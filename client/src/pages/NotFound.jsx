import React from "react";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-3xl text-center">
        <div className="relative mx-auto w-40 h-40 mb-8">
          <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse"></div>
          <div className="absolute inset-3 rounded-full bg-white flex items-center justify-center text-blue-500 font-bold text-6xl shadow-md">
            404
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h1>

        <p className="text-gray-700 text-xl max-w-lg mx-auto mb-12">
          We couldn't find the page you were looking for. It might have been
          moved or doesn't exist.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-8 rounded-xl transition-all duration-300 group"
          >
            <ArrowLeft
              size={22}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-lg font-medium">Go Back</span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Home
              size={22}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-lg font-medium">Home Page</span>
          </button>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="w-full h-px bg-gray-200 mb-6"></div>
          <p className="text-gray-600">
            Need help?{" "}
            <a
              href="https://t.me/mahm0udnasr"
              className="text-blue-500 underline-none"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
