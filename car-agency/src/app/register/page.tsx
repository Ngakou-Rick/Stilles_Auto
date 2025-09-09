import React from 'react';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-primary-light">
      <div className="max-w-md mx-auto bg-primary-dark-soft p-8 rounded-lg">
        <h1 className="text-4xl font-bold font-serif mb-8 text-center">Create an Account</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">Full Name</label>
            <input type="text" id="name" className="w-full p-2 rounded bg-primary-dark border border-accent-silver" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-primary-dark border border-accent-silver" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-bold mb-2">Password</label>
            <input type="password" id="password" className="w-full p-2 rounded bg-primary-dark border border-accent-silver" />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-lg font-bold mb-2">Confirm Password</label>
            <input type="password" id="confirm-password" className="w-full p-2 rounded bg-primary-dark border border-accent-silver" />
          </div>
          <button type="submit" className="bg-accent-gold hover:bg-opacity-80 text-primary-dark font-bold py-3 px-6 rounded transition-colors text-xl w-full">
            Register
          </button>
        </form>
        <p className="text-center mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-accent-gold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
