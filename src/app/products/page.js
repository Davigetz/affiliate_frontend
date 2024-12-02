import InteractiveButton from '../components/InteractiveButton';

export default async function ProductsPage() {
  const res = await fetch('http://127.0.0.1:8000/products', {
    cache: 'no-store',
  });
  const { products } = await res.json();

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.id} className='border rounded shadow p-4 bg-white'>
            <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
            <p className='text-sm text-gray-600'>{product.description}</p>
            <p className='text-sm font-bold'>Price: ${product.price}</p>
            <InteractiveButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
