import { GetAllProductsApi } from "@/services";
import Image from "next/image";

export default async function Home() {
  const products = await GetAllProductsApi();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="container py-20 mx-auto">
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
