export default function Button({ text }) {
  return (
    <button className="my-5 px-5 py-2 uppercase rounded-full sm:text-lg  font-medium text-gray-500 border border-gray-500 transition duration-500 ease-in-out hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff]">
      {text || "Generate Images"}
    </button>
  );
}
