import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthError = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Authentication Failed
        </h2>
        <p className="text-neutral-400">
          Redirecting back to sign in...
        </p>
      </div>
    </div>
  );
};

export default AuthError;