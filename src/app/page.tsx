import { GetAllProductsApi } from "@/services";

export default async function Home() {
  const products = await GetAllProductsApi();

  console.log(products);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="container mx-auto border">H</div>
    </main>
  );
}
