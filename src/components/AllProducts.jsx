import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import { addToCart } from "../store/slice/cartslice";
import { useDispatch } from "react-redux";

const categories = [
  { name: "Electronics", sub: ["Mobiles", "Laptops", "Accessories"] },
  { name: "Fashion", sub: ["Men", "Women", "Kids"] },
  { name: "Home & Kitchen", sub: ["Furniture", "Appliances", "Decor"] },
];

const AllProducts = () => {

  const dispatch = useDispatch()


  const products = [
    { id: 1, image: p4, heading: "HAVIT HV-G92 Gamepad", newprice: 990, oldprice: 1000, discount: 30 , categorcategoryy: "Electronics", sub: ["Mobiles", "Laptops", "Accessories"]},
    { id: 2, image: p3, heading: "AK-900 Wired Keyboard", newprice: 1120, oldprice: 1160, discount: 10, category: "Electronics", sub: ["Mobiles", "Laptops", "Accessories"] },
    { id: 3, image: p2, heading: "IPS LCD Gaming Monitor", newprice: 520, oldprice: 560, discount: 20 },
    { id: 4, image: p1, heading: "S-Series Comfort Chair ", newprice: 120, oldprice: 160, discount: 25 ,category: "Home & Kitchen", sub: ["Furniture", "Appliances", "Decor"] },
    { id: 5, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 2000, oldprice: 2200, discount: 25, category: "Electronics", sub: ["Mobiles", "Laptops", "Accessories"] },
    { id: 6, image: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 110, oldprice: 160, },
    { id: 7, image: p2, heading: "HAVIT HV-G92 Gamepad", newprice: 90, oldprice: 110, discount: 30 },
    { id: 8, image: b1, heading: "The north coat", newprice: 320, oldprice: 460, discount: "", category: "Fashion", subcategory: "Men" },
    { id: 9, image: b2, heading: "Gucci duffle bag", newprice: 400, oldprice: 460, discount: "", category: "Fashion", subcategory: "Men" },
    { id: 10, image: b3, heading: "RGB liquid CPU Cooler", newprice: 320, oldprice: 360, discount: "" },
    { id: 11, image: b4, heading: "Small BookSelf", newprice: 120, oldprice: 160, discount: "",category: "Home & Kitchen", sub: ["Furniture", "Appliances", "Decor"] },
    { id: 12, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 160, oldprice: 160 },
    { id: 13, image: p2, heading: "AK-900 Wired Keyboard", newprice: 720, oldprice: 160 },
    { id: 14, image: p3, heading: "IPS LCD Gaming Monitor", newprice: 10, oldprice: 160 },
    { id: 15, image: p2, heading: "S-Series Comfort Chair ", newprice: 1660, oldprice: 160 },
    { id: 16, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 160, oldprice: 160 },
    { id: 17, image: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160 },
    { id: 18, image: p2, heading: "HAVIT HV-G92 Gamepad", newprice: 150, oldprice: 160 },
    { id: 19, image: p2, heading: "S-Series Comfort Chair ", newprice: 120, oldprice: 160 },
    { id: 20, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 2000, oldprice: 160 },
    { id: 21, image: p2, heading: "AK-900 Wired Keyboard", newprice: 130, oldprice: 160 },
    { id: 22, image: p3, heading: "IPS LCD Gaming Monitor", newprice: 820, oldprice: 160 },
    { id: 23, image: p2, heading: "S-Series Comfort Chair ", newprice: 1250, oldprice: 160 },
    { id: 24, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 1230, oldprice: 160 },
    { id: 25, image: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 190, oldprice: 160 },
    { id: 26, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160, discount: 30 },
    { id: 27, image: p2, heading: "AK-900 Wired Keyboard", newprice: 150, oldprice: 160 },
    { id: 28, image: p3, heading: "IPS LCD Gaming Monitor", newprice: 900, oldprice: 1600 },
    { id: 29, image: p2, heading: "S-Series Comfort Chair ", newprice: 1220, oldprice: 1250 },

  ];
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsToShow, setItemsToShow] = useState(4);
  console.log(itemsToShow)
  console.log("search" + search.length)

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.heading.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

   const filteredProduct1 = products.filter((p) => {
    const matchesSearch = p.heading.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const visibleProducts = filteredProduct1.slice(0, itemsToShow);

  const loadMore = () => {
    if (itemsToShow < products.length) {
      setItemsToShow((prev) => {
        // console.log(prev)
        return prev + 4
      });
    }
  };

    useEffect(()=>{
      filteredProducts
    },[search,categories])

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="bg-black text-white py-8 text-center">
        <h1 className="text-3xl font-bold">🔥  Exclusive Products 🔥</h1>
        <p className="text-gray-300 mt-2">Discover premium items and best offers — just for you!</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h2>
          <ul className="space-y-3">
            <li
              className={`cursor-pointer font-medium ${selectedCategory === "All" ? "text-red-500" : "text-gray-800"}`}
              onClick={() =>{
                  setSelectedCategory("All")
                  
              } 
            }


            >
              All
            </li>
            {categories.map((cat, i) => (
              <li key={i}>
                <p
                  className={`font-medium cursor-pointer ${selectedCategory === cat.name ? "text-red-500" : "text-gray-800"}`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name}
                </p>
                <ul className="ml-4 mt-2 text-sm text-gray-500 space-y-1">
                  {cat.sub.map((sub, j) => (
                    <li key={j} className="hover:text-red-500 cursor-pointer transition">{sub}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
            <input
              type="search"
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
            {

              search.length > 0 ?(
                  <>
                     {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <div key={p.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition relative">
                  {p.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      -{p.discount}%
                    </span>
                  )}
                  <img src={p.image} alt={p.heading} className="w-full h-48 object-contain rounded-md mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{p.heading}</h3>
                  <p className="text-sm text-gray-500 mb-2">{p.category}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-red-500 font-bold">${p.newprice}</p>
                    <p className="text-gray-400 line-through text-sm">${p.oldprice}</p>
                  </div>

                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-red-500 transition"
                    onClick={() => dispatch(addToCart(p))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">No products found.</p>
            )}
                  </>
              ): (
                <>
                 {visibleProducts.length > 0 ? (
              visibleProducts.map((p) => (
                <div key={p.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition relative">
                  {p.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      -{p.discount}%
                    </span>
                  )}
                  <img src={p.image} alt={p.heading} className="w-full h-48 object-contain rounded-md mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{p.heading}</h3>
                  <p className="text-sm text-gray-500 mb-2">{p.category}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-red-500 font-bold">${p.newprice}</p>
                    <p className="text-gray-400 line-through text-sm">${p.oldprice}</p>
                  </div>

                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-red-500 transition"
                    onClick={() => dispatch(addToCart(p))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">No products found.</p>
            )}
                </>
              )

            }
           
          </div>

          {itemsToShow < filteredProducts.length && (
            <div className="mt-10 w-full flex items-center justify-center">
              <button
                className="bg-red-500 w-60 h-12 text-white cursor-pointer rounded-lg hover:bg-red-600 transition"
                onClick={loadMore}
              >
                See More Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
