import { useState } from "react";
import { MessageSquareHeart } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-900 to-forest-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left side - Form section */}
        <div className="w-full lg:w-7/12 p-8 flex flex-col">
          {/* Logo section */}
          <div className="mb-8 flex flex-col items-center">
            <MessageSquareHeart className="size-12 text-primary mb-2" />
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              LingoLink
            </span>
            <p className="text-sm mt-2 text-center opacity-80">
              Your gateway to language learning
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="alert alert-error mb-6">
              <span>{error.response.data.message}</span>
            </div>
          )}

          {/* Form container */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-4">
                {/* Email field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Password field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Submit button */}
              <button 
                className="btn btn-primary w-full mt-4 shadow-md hover:shadow-lg transition-shadow"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Signing in...
                  </>
                ) : (
                  "Continue Your Journey"
                )}
              </button>
            </form>

            {/* Sign up link */}
            <div className="text-center mt-6">
              <p className="text-sm">
                New to LingoLink?{" "}
                <Link to="/signup" className="link link-primary font-medium">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Visual section */}
        <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]"></div>
          
          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
            {/* Illustration */}
            <div className="w-3/4 mx-auto mb-8">
              <img 
                src="/Translator-bro.png" 
                alt="Language learning" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Benefits list */}
            <div className="space-y-4 text-base-content">
              <h3 className="text-xl font-bold">Continue Your Progress</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="badge badge-primary badge-xs"></span>
                  Pick up where you left off
                </li>
                <li className="flex items-center gap-2">
                  <span className="badge badge-primary badge-xs"></span>
                  Reconnect with language partners
                </li>
                <li className="flex items-center gap-2">
                  <span className="badge badge-primary badge-xs"></span>
                  Track your learning journey
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
