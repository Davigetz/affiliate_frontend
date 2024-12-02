'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    total_products: 0,
    total_clicks: 0,
    total_income: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('http://127.0.0.1:8000/products/stats');
      const data = await res.json();
      console.log(data);
      setStats(data);
    };

    fetchStats();
  }, []);

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Dashboard</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='border rounded shadow p-4 bg-white'>
          <h3 className='text-lg font-semibold mb-2'>Total Products</h3>
          <p className='text-2xl font-bold'>{stats.total_products}</p>
        </div>
        <div className='border rounded shadow p-4 bg-white'>
          <h3 className='text-lg font-semibold mb-2'>Total Clicks</h3>
          <p className='text-2xl font-bold'>{stats.total_clicks}</p>
        </div>
        <div className='border rounded shadow p-4 bg-white'>
          <h3 className='text-lg font-semibold mb-2'>Total Income</h3>
          <p className='text-2xl font-bold'>${stats.total_income.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
