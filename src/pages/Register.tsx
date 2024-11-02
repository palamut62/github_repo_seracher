import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import ThemeToggle from '../components/ThemeToggle';
import { GoogleIcon } from '../components/GoogleIcon';

export default function Register() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register, googleSignIn } = useAuth();

  const handleRegister = async (email: string, password: string) => {
    try {
      setError('');
      await register(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create account');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      await googleSignIn();
      navigate('/');
    } catch (err) {
      setError('Failed to sign in with Google');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center">
            <Github className="w-12 h-12 text-gray-900 dark:text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Create your account
          </h2>
          {error && (
            <div className="mb-4 text-sm text-red-600">{error}</div>
          )}
          
          <AuthForm mode="signup" onSubmit={handleRegister} />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <GoogleIcon />
                Sign up with Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}