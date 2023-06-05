"use client";
import { useCallback, useState } from "react";
import { AppDispatch, RootState } from "@/app/redux/store";
import { GetAllProductsApi } from "@/services";
import Image from "next/image";
import { ChangeEvent, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cartActions, productActions } from "./redux/slices";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const allProducts = useSelector((state: RootState) => state.product.products);
  const cart = useSelector((state: RootState) => state.cart.cart);

  const [products, setProducts] = useState<any | any[]>([]);

  const fetchAllProducts = async () => {
    try {
      const products = await GetAllProductsApi();

      setProducts(products);
      dispatch(productActions.addProducts(products));
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfProductExists = (id: number) => {
    return cart.some((e: any) => e === id);
  };

  const addToCart = (id: number) => {
    dispatch(cartActions.addProductToCart(id));
    toast.success("Item added to cart");
  };

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
        <div className="flex items-center justify-between w-full">
          <div className="w-10/12">
            <input
              type="search"
              className="w-full px-4 py-2 bg-transparent border-b-2 outline-none"
              placeholder="Search for product..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <BsCart4 size={30} />
            <p className="flex items-center justify-center w-8 h-8 text-sm border rounded-full">
              {cart.length}
            </p>
          </div>
        </div>
        <div className="products--container">
          {products.map(({ category, id, image, price, title }: any) => (
            <div className="product h-[500px]" key={id}>
              <div className="h-[70%] relative w-full rounded-t-lg">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="absolute object-cover w-full h-full rounded-t-lg"
                  object-fit="contain"
                />
              </div>
              <div className="h-[30%] p-2 product--detail">
                <h4>{title}</h4>
                <div className="flex items-center justify-between">
                  <p>${price}</p>
                  {checkIfProductExists(id) ? (
                    "Item in Cart"
                  ) : (
                    <button
                      className="px-2 py-1 text-sm border rounded hover:bg-white hover:text-black"
                      onClick={() => addToCart(id)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
