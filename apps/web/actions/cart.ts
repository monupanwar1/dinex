import { API_CONFIG } from "@/config/api";
import { Cart } from "@/types/cart";

export async function getCart(): Promise<Cart | null> {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/cart`, {
      method: "GET",
      credentials: "include",
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
  // Matches: router.patch("/item/:id")
  const res = await fetch(`${API_CONFIG.BASE_URL}/cart/item/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }), // Your schema likely just wants { quantity }
    credentials: "include",
  });
  return res.ok;
}

export async function deleteCartItem(itemId: string): Promise<boolean> {
  // Matches: router.delete("/item/:id")
  const res = await fetch(`${API_CONFIG.BASE_URL}/cart/item/${itemId}`, {
    method: "DELETE",
    credentials: "include",
  });
  return res.ok;
}
