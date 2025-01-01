// /pages/api/products.js

export default function handler(_req, res) {
  console.log("Fetching products...");
  const products = [
    {
      id: 1,
      name: "Tandoori Pizza",
      price: 10,
      image:
        "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    },
    {
      id: 2,
      name: "Pizza 2",
      price: 20,
      image:
        "https://lp-cms-production.imgix.net/2022-08/GettyImages-899907172.jpg?w=1440&h=810&fit=crop&auto=format&q=75",
    },
    {
      id: 3,
      name: "Pizza 3",
      price: 30,
      image:
        "https://lp-cms-production.imgix.net/2022-08/0S8A3078.jpg?fit=crop&w=1200&auto=format&q=75",
    },
    {
      id: 4,
      name: "Pizza 4",
      price: 40,
      image:
        "https://hips.hearstapps.com/vidthumb/images/classic-cheese-pizza-recipe-1-644be15492a79.jpeg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    },
    {
      id: 5,
      name: "Pizza 5",
      price: 50,
      image:
        "https://thumbs.dreamstime.com/b/hot-pizza-slice-melting-cheese-rustic-wooden-table-324492030.jpg?w=768",
    },
    {
      id: 6,
      name: "Pizza 6",
      price: 70,
      image:
        "https://thumbs.dreamstime.com/b/vibrant-detailed-angled-shot-dripping-slice-pepperoni-pizza-melting-cheese-fresh-herbs-captured-mid-pull-showcasing-327608388.jpg?w=768",
    },
  ];

  res.status(200).json(products);
}
