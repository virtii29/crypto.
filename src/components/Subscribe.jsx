import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our DeFi Community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4 text-black' type="email" placeholder='  Enter your email' />
            <button>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-4'>
        <input className='mr-2 ml-10' type="checkbox"/>
            <p className='mx-2'>Yes, I agree to receive email communications from CryptoNet.</p>
        </div>
    </div>
  )
}

export default Subscribe