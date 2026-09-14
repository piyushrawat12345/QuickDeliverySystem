import React, { useState } from "react";
import ProductCard from "../component/ProductCard";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      category: "Mobile",
      image:
        "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1759733968",
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      price: 74999,
      category: "Mobile",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBEtS75gZLry_OxMpfuJsubRjvaukclsDjbzv38A-0w&s",
    },
    {
      id: 3,
      name: "OnePlus 13",
      price: 64999,
      category: "Mobile",
      image:
        "https://image01-in.oneplus.net/media/202412/17/052a246708df8233d079b3502aeeb327.png",
    },
    {
      id: 4,
      name: "Dell Inspiron 15",
      price: 55999,
      category: "Laptop",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJSuuYD-sLifxtr4y9QTgZWuzsgc4u9fCNIo8iE9ZRg&s=10",
    },
    {
      id: 5,
      name: "MacBook Air M3",
      price: 114900,
      category: "Laptop",
      image:
        "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mba_13_m3_2024_hero.png",
    },
    {
      id: 6,
      name: "HP Pavilion 14",
      price: 48999,
      category: "Laptop",
      image:
        "https://electronicparadise.in/cdn/shop/files/1_0f4c8e17-dee8-45a9-998b-5d311152318a.jpg?v=1727263398&width=679",
    },
    {
      id: 7,
      name: "Sony WH-1000XM5",
      price: 29999,
      category: "Headphones",
      image:
        "https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=png-alpha&wid=330",
    },
    {
      id: 8,
      name: "Bose QuietComfort Ultra",
      price: 34999,
      category: "Headphones",
      image:
        "https://m.media-amazon.com/images/I/51PidGKAJ6L.jpg",
    },
    {
      id: 9,
      name: "boAt Rockerz 550",
      price: 1999,
      category: "Headphones",
      image:
        "https://vlebazaar.in/image/cache/catalog/boAt-Rockerz-550-Bluetooth-Wireless-Over-Ear-Headphone-with-Mic-Black-Sy/boAt-Rockerz-550-Bluetooth-Wireless-Over-Ear-Headphone-with-Mic-Black-Symphony-R-1500x1500.jpg",
    },
    {
      id: 10,
      name: "Apple Watch Series 10",
      price: 45999,
      category: "Smartwatch",
      image:
        "https://www.icrescent.in/cdn/shop/files/61MCwIFvKuL._SX679_-removebg-preview_f7ba167f-c3a8-4d4e-9fd0-9509c0bbb314.png?v=1757592238&width=1445",
    },
    {
      id: 11,
      name: "Samsung Galaxy Watch 7",
      price: 32999,
      category: "Smartwatch",
      image:
        "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:255,cw:1538,ch:1154,q:80,w:1538/pQLgepFdrm8vcqpuvqGPRA.jpg",
    },
    {
      id: 12,
      name: "Noise ColorFit Pro 5",
      price: 3499,
      category: "Smartwatch",
      image:
        "https://www.fliptwirls.com/uploads/90009900523113_1_123-37.png",
    },
    {
      id: 13,
      name: "iPad Air 5th Gen",
      price: 59900,
      category: "Tablet",
      image:
        "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264356_iyyy1g.png",
    },
    {
      id: 14,
      name: "Samsung Galaxy Tab S9",
      price: 72999,
      category: "Tablet",
      image:
        "https://www.leronza.com/wp-content/uploads/2024/08/Leronza-Luxury-24k-Gold-Samsung-Galaxy-s9.webp",
    },
    {
      id: 15,
      name: "Logitech MX Master 3S",
      price: 8999,
      category: "Mouse",
      image:
        "https://m.media-amazon.com/images/I/61xKiCADfpL.jpg",
    },
    {
      id: 16,
      name: "Anker 737 Power Bank",
      price: 12999,
      category: "Powerbank",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOInSuaIUi-PucbpyQf9uFrI_h_qiG6A45OJfL_bl_sRIlakcu_8HwA6q7&s=10",
    },
    {
      id: 17,
      name: "JBL Flip 6",
      price: 10999,
      category: "Speaker",
      image:
        "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf0f285ee/2_JBL_FLIP6_3_4_RIGHT_BLUE_30192_x1.png?sw=535&sh=535",
    },
    {
      id: 18,
      name: "Sony SRS-XB100",
      price: 3999,
      category: "Speaker",
      image:
        "https://sony.scene7.com/is/image/sonyglobalsolutions/Primary_image_1200-11?$categorypdpnav$&fmt=png-alpha",
    },
    {
      id: 19,
      name: "Canon EOS R50",
      price: 74999,
      category: "Camera",
      image:
        "https://gppro.in/wp-content/uploads/2023/06/EOS-R50-1.jpg",
    },
    {
      id: 20,
      name: "GoPro HERO12 Black",
      price: 39999,
      category: "Camera",
      image:
        "https://m.media-amazon.com/images/I/61dUvabnSmL.jpg",
    },
  ];

  const categories = [
    { name: "Mobile", filter: "Mobile" },
    { name: "Laptop", filter: "Laptop" },
    { name: "Headphones", filter: "Headphones" },
    { name: "Watch", filter: "Smartwatch" },
    { name: "Camera", filter: "Camera" },
    { name: "Tablet", filter: "Tablet" },
    { name: "Speaker", filter: "Speaker" },
    { name: "Mouse", filter: "Mouse" },
  { name: "Powerbank", filter: "Powerbank" },
  ];

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    dispatch(addItem(product));
  };

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">

            <p className="text-purple-400 font-semibold mb-3">
              WELCOME TO OUR SHOP
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Find Everything You Need
            </h1>

            <p className="mt-5 text-gray-300 text-lg">
              Discover the latest products at the best prices.
              Shop electronics, fashion and more.
            </p>

            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-8 bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-lg font-semibold"
            >
              Shop Now
            </button>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-gray-900">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-7">

          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                setSelectedCategory(category.filter)
              }
              className={`bg-white p-6 rounded-xl shadow-sm
                hover:shadow-md cursor-pointer text-center
                transition
                ${
                  selectedCategory === category.filter
                    ? "ring-2 ring-purple-600 bg-purple-50"
                    : ""
                }`}
            >
              <h3 className="text-lg font-semibold">
                {category.name}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Explore Products
              </p>
            </div>
          ))}

        </div>

        {/* Selected Category */}
        <div className="flex items-center justify-between mt-8">

          <p className="text-gray-600">
            Showing:{" "}
            <span className="font-semibold text-purple-600">
              {selectedCategory === "Smartwatch"
                ? "Watch"
                : selectedCategory}
            </span>
          </p>

          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-purple-600 font-semibold hover:underline"
            >
              Show All
            </button>
          )}

        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex justify-between items-center mb-7">

          <h2 className="text-3xl font-bold">
            {selectedCategory === "All"
              ? "Featured Products"
              : selectedCategory === "Smartwatch"
              ? "Watch Products"
              : `${selectedCategory} Products`}
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">

                  <p className="text-sm text-purple-600 font-medium">
                    {product.category}
                  </p>

                  <h3 className="text-lg font-semibold mt-1">
                    {product.name}
                  </h3>

                  <p className="text-xl font-bold mt-3">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-4 bg-gray-900 text-white py-2.5 rounded-lg hover:bg-purple-600 transition"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}

        </div>
      </section>

    </div>
  );
};

export default Shop;
