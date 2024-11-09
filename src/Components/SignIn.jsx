import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log('Google sign in clicked');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-800">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            Welcome Back
          </h2>
          <p className="text-xl bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text font-semibold">
            Sign in to your account
          </p>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-neutral-700 
                   rounded-lg text-white hover:bg-neutral-800/50 transition-colors"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-neutral-900/50 text-neutral-400">Or continue with</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-neutral-800 border border-neutral-700 
                         text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                         transition-colors"
                placeholder="Enter your email"
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-neutral-800 border border-neutral-700 
                         text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                         transition-colors"
                placeholder="Enter your password"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 
                         hover:text-neutral-300 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded border-neutral-700 text-red-500 focus:ring-red-500"
              />
              <span className="text-sm text-neutral-300">Remember me</span>
            </label>
            <a href="#" className="text-sm text-red-300 hover:text-red-400 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-300 py-3 px-6 rounded-lg 
                     text-white font-semibold hover:opacity-90 transition-opacity flex items-center 
                     justify-center gap-2 group"
          >
            Sign In
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-neutral-400">
            Don't have an account?{' '}
            <a href="register" className="text-red-300 hover:text-red-400 transition-colors font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;