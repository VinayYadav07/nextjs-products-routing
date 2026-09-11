const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <main>
      <h1>Product {id} details page - content coming soon!</h1>
    </main>
  );
};

export default ProductDetails;
