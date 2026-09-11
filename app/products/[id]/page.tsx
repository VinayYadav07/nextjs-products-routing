import Image from "next/image";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 50 },
  });

  const product = await res.json();

  return (
    <main>
      <h1>{product.title}</h1>

      <Image src="/product.jpg" alt={product.title} width={300} height={300} />

      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </main>
  );
};

export default ProductDetails;
