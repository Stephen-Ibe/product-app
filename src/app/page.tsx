import { GetAllProductsApi } from "@/services";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

export default async function Home() {
  const products = await GetAllProductsApi();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="container py-20 mx-auto space-y-20">
        <div className="w-full flex items-center justify-between">
          <div className="w-10/12">
            <input
              type="search"
              className="w-full py-2 px-4 border-b-2 bg-transparent outline-none"
              placeholder="Search for product..."
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
          {products.map(({ category, id, image, price, title }) => (
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
                  <p className="text-sm">{category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
