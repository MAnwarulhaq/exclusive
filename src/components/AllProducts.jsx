import React, { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";

const categories = [
  {
    name: "Electronics",
    sub: ["Mobiles", "Laptops", "Accessories"],
  },
  {
    name: "Fashion",
    sub: ["Men", "Women", "Kids"],
  },
  {
    name: "Home & Kitchen",
    sub: ["Furniture", "Appliances", "Decor"],
  },
];

const AllProducts = () => {
  const products = [
    { id: 1, img: p4, heading: "HAVIT HV-G92 Gamepad", newprice: 320, oldprice: 460, discount: 30, category: "Electronics", subcategory: "Accessories" },
    { id: 2, img: p3, heading: "AK-900 Wired Keyboard", newprice: 700, oldprice: 760, discount: 10, category: "Electronics", subcategory: "Accessories" },
    { id: 3, img: p2, heading: "IPS LCD Gaming Monitor", newprice: 920, oldprice: 999, discount: 20, category: "Electronics", subcategory: "Laptops" },
    { id: 4, img: p1, heading: "S-Series Comfort Chair", newprice: 120, oldprice: 160, discount: 25, category: "Home & Kitchen", subcategory: "Furniture" },
    { id: 5, img: b1, heading: "The North Coat", newprice: 220, oldprice: 260, category: "Fashion", subcategory: "Men" },
    { id: 6, img: b2, heading: "Gucci Duffle Bag", newprice: 350, oldprice: 420, category: "Fashion", subcategory: "Women" },
    { id: 7, img: b3, heading: "RGB Liquid CPU Cooler", newprice: 180, oldprice: 210, category: "Electronics", subcategory: "Accessories" },
    { id: 8, img: b4, heading: "Small BookShelf", newprice: 95, oldprice: 120, category: "Home & Kitchen", subcategory: "Furniture" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Filtering Logic (Search + Category)
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.heading.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  const visbleproducts = filteredProducts.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="bg-black text-white py-8 text-center">
        <h1 className="text-3xl font-bold">🔥 VIP Exclusive Products 🔥</h1>
        <p className="text-gray-300 mt-2">
          Discover premium items and best offers — just for you!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h2>
          <ul className="space-y-3">
            <li
              className={`cursor-pointer font-medium ${
                selectedCategory === "All" ? "text-red-500" : "text-gray-800"
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            {categories.map((cat, i) => (
              <li key={i}>
                <p
                  className={`font-medium cursor-pointer ${
                    selectedCategory === cat.name
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name}
                </p>
                <ul className="ml-4 mt-2 text-sm text-gray-500 space-y-1">
                  {cat.sub.map((sub, j) => (
                    <li
                      key={j}
                      className="hover:text-red-500 cursor-pointer transition"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-red-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visbleproducts.length > 0 ? (
              visbleproducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition relative"
                >
                  {p.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      -{p.discount}%
                    </span>
                  )}

                  <img
                    src={p.img}
                    alt={p.heading}
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />

                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {p.heading}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{p.category}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-red-500 font-bold">${p.newprice}</p>
                    <p className="text-gray-400 line-through text-sm">
                      ${p.oldprice}
                    </p>
                  </div>

                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-red-500 transition">
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No products found.
              </p>
            )}
          </div>
          <div className="mt-10 w-full flex items-center justify-center">
            <button className=""> See Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
