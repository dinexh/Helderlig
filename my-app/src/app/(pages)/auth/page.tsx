'use client';

import { useState } from 'react';
import { auth } from '@/config/firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../globals.css';
import './page.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in!');
      router.push('/dashboard');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Login error:', error.message);
        toast.error(error.message);
        setError(error.message);
      } else {
        const errorMessage = 'An unexpected error occurred';
        console.error('Login error:', errorMessage);
        toast.error(errorMessage);
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error('Please enter your email first');
      setError('Please enter your email first');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Please check your inbox.');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Registration error:', error.message);
        toast.error(error.message);
        setError(error.message);
      } else {
        const errorMessage = 'An unexpected error occurred';
        console.error('Registration error:', errorMessage);
        toast.error(errorMessage);
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="login-component">
        <div className="login-component-in">
            <Toaster position="top-right" />
                <div className="login-component-in-heading">
                    <h1>Helderlig Admin Portal</h1>
                {error && <div className="error-message">{error}</div>}
                </div>
            <div className="login-component-in-form">
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <div className="form-group-password">
                <button 
                    type="button" 
                    className="forgot-password"
                    onClick={handleForgotPassword}
                >
                    Forgot Password?
                </button>
                </div>
                    <button 
                        type="submit" 
                        className="login-button"
                    disabled={loading}
                >
                    {loading ? 'Signing in...' : 'Sign In'}                
                </button>

            </form>
        </div>
    </div>
    </div>
  );
}
