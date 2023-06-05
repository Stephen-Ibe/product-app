import { GetAllProductsApi } from "@/services";
import Image from "next/image";

export default async function Home() {
  const products = await GetAllProductsApi();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="container py-20 mx-auto">
        <div className="products--container">
          {products.map(({ id, image, price, title }) => (
            <div className="product h-[500px]" key={id}>
              <div className="h-[75%] relative w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="absolute object-cover"
                  object-fit="cover"
                />
              </div>
              <div className="h-[25%] p-y-2 product--detail">
                <h4>{title}</h4>
                <p>${price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
