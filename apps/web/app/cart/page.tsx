  import React from "react";

  import { getCart } from "@/actions/cart";
  import CartClient from "@/components/cart/cart-client";
  import { Cart } from "@/types/cart";

  export const dynamic = "force-dynamic";
  export const revalidate = 0;

  export default async function CartPage() {
    const cart = await getCart();

    const safeCart: Cart = cart ?? {
      id: "temp",
      userId: "temp",
      items: [],
      total: 0,
    };

    return <CartClient initialCart={safeCart} />;
  }
