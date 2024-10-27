import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function NotFound404 () {

    return (
        <div
        className="flex items-center justify-center  text-white pt-10">
        <div className="text-center max-w-lg mx-auto">
          {/* Lottie Animation */}
          <div className="w-full flex justify-center mb-8">
            <div className="max-w-xs w-full">
              <DotLottieReact
                src="/src/assets/images/404.lottie"
                loop
                autoplay
                
              />
            </div>
          </div>

          {/* 404 Heading */}
          <h1 className="text-8xl font-extrabold mb-4 text-gray-800">
            404
          </h1>

          {/* Error Message */}
          <p className="text-2xl font-light mb-6 text-gray-800">
            Oops! The page youre looking for doesnt exist.
          </p>

          {/* Back to Homepage Button */}
          <Link
            to="/"
            className="inline-block px-8 py-4 text-lg font-medium bg-red-600 hover:bg-red-900 transition-colors rounded-full shadow-lg"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    );
};



