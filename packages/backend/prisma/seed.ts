import { prisma } from "@/lib/prisma";


async function main() {
  console.log("🌱 Seeding professional menu data...");

  await prisma.menu.deleteMany();
  await prisma.category.deleteMany();

  const data = [
    {
      name: "Pizza",
      items: [
        {
          name: "Margherita Pizza",
          description:
            "Classic Italian pizza with fresh mozzarella, basil and tomato sauce.",
          price: 11.99,
          imageUrl:
            "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
        },
        {
          name: "Pepperoni Pizza",
          description:
            "Traditional pepperoni pizza with rich mozzarella and tomato base.",
          price: 14.49,
          imageUrl:
            "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
        },
        {
          name: "BBQ Chicken Pizza",
          description: "Grilled chicken with smoky BBQ sauce and red onions.",
          price: 15.99,
          imageUrl: "https://images.unsplash.com/photo-1548365328-9f547fb0953b",
        },
        {
          name: "Four Cheese Pizza",
          description: "Mozzarella, cheddar, parmesan and blue cheese blend.",
          price: 16.25,
          imageUrl:
            "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
        },
        {
          name: "Veggie Supreme Pizza",
          description:
            "Loaded with olives, bell peppers, onions and mushrooms.",
          price: 13.75,
          imageUrl:
            "https://images.unsplash.com/photo-1601924638867-3ec2b93b8d6d",
        },
      ],
    },
    {
      name: "Burger",
      items: [
        {
          name: "Classic Beef Burger",
          description:
            "Grilled beef patty with lettuce, tomato and house sauce.",
          price: 9.99,
          imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        },
        {
          name: "Crispy Chicken Burger",
          description: "Fried chicken fillet with creamy mayo and pickles.",
          price: 8.99,
          imageUrl:
            "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
        },
        {
          name: "Double Cheese Burger",
          description: "Double beef patties layered with cheddar cheese.",
          price: 12.49,
          imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
        },
        {
          name: "Spicy Jalapeno Burger",
          description: "Beef patty topped with jalapenos and spicy sauce.",
          price: 10.75,
          imageUrl:
            "https://images.unsplash.com/photo-1585238342028-4e13d4f5a6a4",
        },
        {
          name: "Veggie Delight Burger",
          description: "Plant-based patty with fresh greens and vegan sauce.",
          price: 8.25,
          imageUrl:
            "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56",
        },
      ],
    },
    {
      name: "Pasta",
      items: [
        {
          name: "Creamy Alfredo Pasta",
          description: "Fettuccine pasta in rich Alfredo cream sauce.",
          price: 11.99,
          imageUrl:
            "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5",
        },
        {
          name: "Spaghetti Bolognese",
          description: "Traditional Italian meat sauce with spaghetti.",
          price: 12.75,
          imageUrl:
            "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        },
        {
          name: "Pesto Penne",
          description: "Penne pasta tossed in fresh basil pesto sauce.",
          price: 10.99,
          imageUrl:
            "https://images.unsplash.com/photo-1563379091339-03246963d96c",
        },
        {
          name: "Baked Mac & Cheese",
          description: "Oven-baked macaroni in creamy cheese sauce.",
          price: 13.49,
          imageUrl:
            "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
        },
        {
          name: "Chicken Carbonara",
          description: "Creamy pasta with grilled chicken and bacon bits.",
          price: 14.25,
          imageUrl:
            "https://images.unsplash.com/photo-1603133872978-d4c80cf2b9d5",
        },
      ],
    },
    {
      name: "Drinks",
      items: [
        {
          name: "Coca Cola",
          description: "Chilled sparkling cola beverage.",
          price: 2.99,
          imageUrl:
            "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        },
        {
          name: "Fresh Lemonade",
          description: "Freshly squeezed lemon juice with mint.",
          price: 3.49,
          imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        },
        {
          name: "Cold Coffee",
          description: "Iced coffee blended with milk and cream.",
          price: 4.99,
          imageUrl:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        },
        {
          name: "Mango Smoothie",
          description: "Fresh mango smoothie with creamy texture.",
          price: 4.75,
          imageUrl:
            "https://images.unsplash.com/photo-1572441710534-680ee1a2f4e8",
        },
        {
          name: "Green Tea",
          description: "Hot antioxidant-rich green tea.",
          price: 2.49,
          imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
        },
      ],
    },
    {
      name: "Dessert",
      items: [
        {
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center.",
          price: 6.99,
          imageUrl:
            "https://images.unsplash.com/photo-1601972599720-36938d4ecd31",
        },
        {
          name: "Vanilla Ice Cream",
          description: "Creamy vanilla ice cream scoop.",
          price: 3.99,
          imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
        },
        {
          name: "Classic Brownie",
          description: "Rich chocolate brownie served warm.",
          price: 5.49,
          imageUrl:
            "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
        },
        {
          name: "New York Cheesecake",
          description: "Creamy cheesecake with biscuit base.",
          price: 6.49,
          imageUrl:
            "https://images.unsplash.com/photo-1612197596130-9cdd8a2e0c0f",
        },
        {
          name: "Glazed Donut",
          description: "Soft donut coated with sweet glaze.",
          price: 2.99,
          imageUrl:
            "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
        },
      ],
    },
  ];

  for (const categoryData of data) {
    const category = await prisma.category.create({
      data: { name: categoryData.name },
    });

    for (const item of categoryData.items) {
      await prisma.menu.create({
        data: {
          ...item,
          categoryId: category.id,
        },
      });
    }
  }

  console.log("Menu Data Seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
