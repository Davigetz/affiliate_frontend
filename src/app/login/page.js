export default function LoginPage() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form className='bg-white p-6 rounded shadow-md'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input
            type='password'
            placeholder='Enter your password'
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <button className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700'>
          Login
        </button>
      </form>
    </div>
  );
}
