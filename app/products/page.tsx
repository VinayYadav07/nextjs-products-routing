import Link from "next/link";

const Products = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 50 },
  });

  const data = await res.json();

  return (
    <main>
      <h1>Products Page</h1>

      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
