import { API_CONFIG } from "@/config/api";

export async function getCartClient() {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cart`, {
    credentials: "include",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.data;
}

export async function updateCartItem(id: string, quantity: number) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cart/item/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
    credentials: "include",
  });

  return res.ok;
}

export async function deleteCartItem(id: string) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cart/item/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return res.ok;
}
