// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    id: "2000229", // Transaction ID. Required.
    affiliation: "Acme Clothing", // Affiliation or store name.
    revenue: 29.97, // Grand Total.
    shipping: 3, // Shipping.
    tax: 1.29, // Tax.
    products: [
      { name: "Product 1", desc: "A nice thing", price: "$9.99" },
      { name: "Product 2", desc: "Another thing", price: "$3.45" },
      { name: "Product 3", desc: "Something else", price: "$6.51" },
      { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
    ],
  });
};
