import { GetAllProductsApi } from "@/services";
import Image from "next/image";

export default async function Home() {
  const products = await GetAllProductsApi();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="container py-20 mx-auto">
        <div className="products--container">
          {products.map(({ id, image, price, title }) => (
            <div className="border product h-[300px]" key={id}>
              <div className="h-[70%]">
                <Image src={image} alt={title} width={500} height={500} />
              </div>
              <div className="h-[30%] px-2">
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
