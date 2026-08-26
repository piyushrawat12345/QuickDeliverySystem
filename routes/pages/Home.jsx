import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../component/ProductCard";
//import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, error: "" });
  const baseurl = import.meta.env.VITE_BASEURL;

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/products/`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          console.log(response.data);
          setProducts(response?.data?.products);
          setError({ ...error });
        }
      } catch (error) {
        setError({
          isError: true,
          errorMessage: error.response?.data?.message || error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <div className="mx-auto flex flex-wrap gap-4 p-8 max-w-275 ">
        {products.map((product) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;