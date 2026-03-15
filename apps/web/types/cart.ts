export type CartItem = {
  id: string;
  quantity: number;
  menu: {
    id: string;
    name: string;
    price: number;
    imageUrl: string; 
  };
};

export type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
};
