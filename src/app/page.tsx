"use client";
import { useState } from "react";
import { AppDispatch, RootState } from "@/app/redux/store";
import { GetAllProductsApi } from "@/services";
import Image from "next/image";
import { ChangeEvent, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./redux/slices";

export default function Home() {
  const allProducts = useSelector((state: RootState) => state.product.products);
  const [products, setProducts] = useState<any | any[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const fetchAllProducts = async () => {
    try {
      const products = await GetAllProductsApi();

      setProducts(products);
      dispatch(productActions.addProducts(products));
    } catch (err) {
      console.log(err);
    }
  };

  const a

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === "") {
      setProducts(allProducts);
    } else {
      const filteredList = allProducts.filter((e: any) =>
        e.title.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(filteredList);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="container py-20 mx-auto space-y-20">
        <div className="w-full flex items-center justify-between">
          <div className="w-10/12">
            <input
              type="search"
              className="w-full py-2 px-4 border-b-2 bg-transparent outline-none"
              placeholder="Search for product..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <BsCart4 size={30} />
            <p className="text-sm border h-8 w-8 flex items-center justify-center rounded-full">
              4
            </p>
          </div>
        </div>
        <div className="products--container">
          {products.map(({ category, id, image, price, title }: any) => (
            <div className="product h-[500px]" key={id}>
              <div className="h-[75%] relative w-full rounded-t-lg">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="absolute object-cover w-full h-full rounded-t-lg"
                  object-fit="contain"
                />
              </div>
              <div className="h-[25%] p-2 product--detail">
                <h4>{title}</h4>
                <div className="flex items-center justify-between">
                  <p>${price}</p>
                  <button className="border px-2 rounded text-sm py-1">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
