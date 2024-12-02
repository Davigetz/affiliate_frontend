'use client';

export default function InteractiveButton({ productId }) {
  const handleClick = async () => {
    await fetch(`http://127.0.0.1:8000/products/${productId}/click`, {
      method: 'POST',
    });
    alert('Click registered!');
  };

  return (
    <button
      onClick={handleClick}
      className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
    >
      Register Click
    </button>
  );
}
