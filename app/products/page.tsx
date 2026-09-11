import Link from "next/link";

const Products = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return (
    <ul>
      {data.products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Products;
