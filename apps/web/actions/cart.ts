"use server";
import { API_CONFIG } from "@/config/api";
import { Cart } from "@/types/cart";

// export async function getCart(): Promise<Cart | null> {
//   try {
//     const res = await fetch(`${API_CONFIG.BASE_URL}/cart`, {
//       method: "GET",
//       credentials: "include",
//     });

//     if (res.status === 401) return null;

//     const result = await res.json();

//     return result.data as Cart;
//   } catch (error) {
//     console.error("Fetch Error:", error);
//     return null;
//   }
// }
import { headers } from "next/headers";

export async function getCart(): Promise<Cart | null> {
  try {
    const headersList = await headers(); // ✅ await here
    const cookie = headersList.get("cookie");

    const res = await fetch(`${API_CONFIG.BASE_URL}/cart`, {
      method: "GET",
      headers: {
        cookie: cookie || "",
      },
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (res.status === 401) return null;

    const result = await res.json();

    return result.data as Cart;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

export async function updateCartItem(
  itemId: string,
  quantity: number,
): Promise<boolean> {
  const headersList = await headers();
  const cookie = headersList.get("cookie");

  const res = await fetch(`${API_CONFIG.BASE_URL}/cart/item/${itemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cookie: cookie || "",
    },
    body: JSON.stringify({ quantity }),
    cache: "no-store",
  });

  return res.ok;
}

export async function deleteCartItem(itemId: string): Promise<boolean> {
  const headersList = await headers();
  const cookie = headersList.get("cookie");

  const res = await fetch(`${API_CONFIG.BASE_URL}/cart/item/${itemId}`, {
    method: "DELETE",
    headers: {
      cookie: cookie || "",
    },
    cache: "no-store",
  });

  return res.ok;
}
