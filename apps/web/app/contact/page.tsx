"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@repo/ui/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { motion } from "@repo/ui/lib/framer-motion";

import H1 from "../../components/shared/H1";
import P from "../../components/shared/P";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="min-h-screen py-20">
      <section className="container mx-auto px-4 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12">
          <H1>Contact Us</H1>
          <P>
            Have questions, feedback, or just want to say hello? We'd love to
            hear from you!
          </P>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10 px-4 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Get in Touch
              </h2>
              <P>
                Reach out to us through the form or using the contact details
                below.
              </P>
            </div>
            <div className="space-y-4">
              <p>
                📍 <span className="font-medium">Address:</span> 123 SilverSpoon
                Street, Food City
              </p>
              <p>
                📞 <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
              <p>
                📧 <span className="font-medium">Email:</span>{" "}
                contact@silverspoon.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10 mt-12 md:mt-0"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="p-6 rounded-2xl border-2 space-y-4 hover:scale-105 transition-transform duration-300 shadow-[10px_10px_0px_#2D1E2F] h-[400px]"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="border rounded-lg focus:ring focus:ring-blue-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                          className="border rounded-lg focus:ring focus:ring-blue-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message..."
                          rows={3}
                          {...field}
                          className="border rounded-lg focus:ring focus:ring-blue-200 resize-none overflow-y-auto"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="hidden md:flex w-full items-center px-6 py-2 bg-[#FF6B35] hover:bg-[#e85b29] text-white text-md rounded-md shadow-[2px_2px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
