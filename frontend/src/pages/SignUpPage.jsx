import { useState } from "react";
import { MessageSquareHeart } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (signupData.password.length >= 6) {
      signupMutation(signupData);
    }
  };

  return (
    // Changed background to a subtle gradient
    <div className="min-h-screen bg-gradient-to-br from-forest-900 to-forest-800 flex items-center justify-center p-4">
      
      {/* Main container with new layout - now a single centered card */}
      <div className="w-full max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left side - Form section */}
        <div className="w-full lg:w-7/12 p-8 flex flex-col">
          {/* Logo section - centered and with better spacing */}
          <div className="mb-8 flex flex-col items-center">
            <MessageSquareHeart className="size-12 text-primary mb-2" />
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              LingoLink
            </span>
            <p className="text-sm mt-2 text-center opacity-80">
              Connect with language partners worldwide
            </p>
          </div>

          {/* Error message - now with slide-down animation */}
          {error && (
            <div className="alert alert-error mb-6 animate-fade-in">
              <span>{error.response.data.message}</span>
            </div>
          )}

          {/* Form container with better spacing */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-center">Join Our Community</h2>
            
            <form onSubmit={handleSignup} className="space-y-5">
              {/* Form fields with improved styling */}
              <div className="space-y-4">
                {/* Full Name field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    value={signupData.fullName}
                    onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                    required
                  />
                </div>

                {/* Email field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Password field with conditional error styling */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className={`input input-bordered w-full ${
                      submitted && signupData.password.length < 6 ? "input-error" : ""
                    }`}
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    required
                  />
                  <label className="label">
                    <span className={`label-text-alt ${
                      submitted && signupData.password.length < 6
                        ? "text-error"
                        : "text-base-content/60"
                    }`}>
                      Password must be at least 6 characters
                    </span>
                  </label>
                </div>

                {/* Terms checkbox with better alignment */}
                <div className="form-control pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-sm checkbox-primary mt-1" 
                      required 
                    />
                    <span className="label-text text-sm">
                      I agree to the{" "}
                      <Link to="/terms" className="link link-primary">terms</Link> and{" "}
                      <Link to="/privacy" className="link link-primary">privacy policy</Link>
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit button with better loading state */}
              <button 
                className="btn btn-primary w-full mt-4 shadow-md hover:shadow-lg transition-shadow"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Creating account...
                  </>
                ) : (
                  "Join LingoLink"
                )}
              </button>
            </form>

            {/* Login link with better spacing */}
            <div className="text-center mt-6">
              <p className="text-sm">
                Already a member?{" "}
                <Link to="/login" className="link link-primary font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Visual section (now with overlay effect) */}
        <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
          {/* Added a subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          
          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
            {/* Illustration with better sizing */}
            <div className="w-3/4 mx-auto mb-8">
              <img 
                src="/Translator-bro.png" 
                alt="Language learning" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Benefits list */}
            <div className="space-y-4 text-base-content">
              <h3 className="text-xl font-bold">Start Your Language Journey</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="badge badge-primary badge-xs"></span>
                  Connect with native speakers
                </li>
                <li className="flex items-center gap-2">
                  <span className="badge badge-primary badge-xs"></span>
                  Practice real conversations
                </li>
                <li className="flex items-center gap-2">
                  <span className="badge badge-primary badge-xs"></span>
                  Make friends worldwide
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;