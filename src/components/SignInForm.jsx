import {Link , NavLink} from 'react-router-dom'
function SignInForm() {
  return (
    <>
    <div className='w-4/5 bg-white rounded-lg flex justify-center items-center p-12'>
      <div className='p-2 w-3/5 bg-gray-200 rounded-lg'>
        <form action="">
          <h1 className='text-2xl font-bold'>Sign In</h1>
          <p className='font-bold mb-4'>Dont have an account? <NavLink to='/' className='underline'>Sign Up</NavLink></p>

          <label htmlFor="email" className='text-gray-600'>Email</label>
          <input className='bg-gray-100 p-2 w-full mb-3' type="text" />
          <label htmlFor="password" className='text-gray-600'>Password</label>
          <input className='bg-gray-100 p-2 w-full mb-3' type="text" />
          <button className='bg-blue-400 text-white px-4 py-3 rounded-lg mt-5'>Submit</button>

        </form>
      </div>
    </div>
    </>
  )
}

export default SignInForm
