import { useState } from "react";
import { assets } from "../assets/assets";
import { ImageDown, Loader2 } from "lucide-react";

export default function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageGenerated, setImageGenerated] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setImageLoading(true);
    setTimeout(() => {
      setImageLoading(false);
      setImageGenerated(true);
      setImage(assets.sample_img_2); // Simulate image generation
    }, 3000);
  };

  const handleGenerateAnother = () => {
    setPrompt("");
    setImageLoading(true);

    setTimeout(() => {
      setImageLoading(false);
      setImageGenerated(false);
      setImage(assets.sample_img_1); // Reset to initial image
    }, 2000);
  };
  return (
    <form
      onSubmit={handleGenerate}
      className="flex flex-col min-h-[90vh] w-full items-center justify-center px-4 py-8"
    >
      <div className="w-full max-w-xl mx-auto">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src={image}
            alt="AI generated image"
            className="w-full h-auto object-cover"
            onLoad={() => setImageLoading(false)}
          />
          {/* Progress bar */}
          <div
            className={`absolute bottom-0 left-0 h-1.5 bg-blue-500 ${
              imageLoading
                ? " w-full animate-pulse transition-all duration-[10s]"
                : "w-0"
            }`}
          />
          {/* Loading overlay */}
          {imageLoading && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
                <p className="text-white font-medium">
                  Generating your image...
                </p>
              </div>
            </div>
          )}
          {/* download button */}
          {imageGenerated && (
            <a
              href={image}
              download
              className="absolute flex items-center justify-center top-3 right-3 w-10 h-10 bg-blue-500 text-white rounded-full cursor-pointer shadow-md hover:bg-blue-600 transition-colors duration-200 z-[999]"
              aria-label="Download image"
            >
              <ImageDown color="#fff" />
            </a>
          )}
        </div>
        <div className="mt-8 w-full">
          {!imageGenerated && (
            <>
              {!imageLoading ? (
                <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe what you want to generate"
                    className="flex-1 bg-transparent outline-none px-4 py-2 placeholder:text-neutral-300 font-medium text-sm md:text-base"
                  />
                  <button
                    type="submit"
                    className="bg-zinc-900 px-6 py-2.5 md:px-12 rounded-full text-sm md:text-base font-medium hover:bg-zinc-800 transition-colors duration-200"
                  >
                    Generate
                  </button>
                </div>
              ) : (
                <div
                  type="button"
                  disabled
                  className="w-full flex justify-center items-center gap-2 rounded-full bg-transparent border border-zinc-900 text-black px-6 py-3 opacity-50 cursor-not-allowed"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </div>
              )}
            </>
          )}

          {imageGenerated && (
            <button
              type="button"
              onClick={handleGenerateAnother}
              className="mt-4 w-full flex justify-center items-center gap-2 rounded-full bg-transparent border border-zinc-900 text-black px-6 py-3 hover:bg-zinc-100 transition-colors duration-200"
            >
              Generate Another
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
