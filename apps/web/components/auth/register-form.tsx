"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { motion } from "@repo/ui/lib/framer-motion";

import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { toast } from "sonner";
import z from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Username must be at least 2 characters"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterForm = z.infer<typeof registerSchema>;

type ErrorResponse = {
  message?: string;
};
export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(data: RegisterForm) {
    try {
      await axios.post("http://localhost:5000/api/v1/auth/register", data, {
        withCredentials: true,
      });
      toast.success("register successful");
      router.push("/login");
    } catch (error: unknown) {
      const err = error as AxiosError<ErrorResponse>;
      toast.error(err.response?.data?.message ?? "register failed");
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Card className="w-105 border-2 border-[#2D1E2F] rounded-2xl bg-[#fff0da82] shadow-[4px_4px_0px_#2D1E2F]">
          <CardHeader>
            <CardTitle className="text-center text-xl">Register</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Label>Username</Label>
                <Input placeholder="Username" {...register("name")} />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input placeholder="you@example.com" {...register("email")} />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Password</Label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <BsEye size={18} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Registering.." : "Register"}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Login
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
