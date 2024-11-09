import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight } from 'lucide-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log('Google sign up clicked');
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
            Create Account
          </h2>
          <p className="text-xl bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text font-semibold">
            Join Savannah AI today
          </p>
        </div>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignUp}
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
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="relative">
            <label htmlFor="fullName" className="block text-sm font-medium text-neutral-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-neutral-800 border border-neutral-700 
                         text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                         transition-colors"
                placeholder="Enter your full name"
              />
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            </div>
          </div>

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
                placeholder="Create a password"
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

          {/* Confirm Password Input */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-neutral-800 border border-neutral-700 
                         text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                         transition-colors"
                placeholder="Confirm your password"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 
                         hover:text-neutral-300 focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              required
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="rounded border-neutral-700 text-red-500 focus:ring-red-500"
            />
            <label htmlFor="acceptTerms" className="ml-2 block text-sm text-neutral-300">
              I agree to the{' '}
              <a href="#" className="text-red-300 hover:text-red-400">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-red-300 hover:text-red-400">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-300 py-3 px-6 rounded-lg 
                     text-white font-semibold hover:opacity-90 transition-opacity flex items-center 
                     justify-center gap-2 group"
          >
            Create Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-neutral-400">
            Already have an account?{' '}
            <a href="#" className="text-red-300 hover:text-red-400 transition-colors font-medium">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;