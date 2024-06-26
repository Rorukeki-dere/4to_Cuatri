import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { get_solo } from "../api/products";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Reviews from "../components/Reviews"
import { Button } from "@material-tailwind/react";



const SoloProduct = () => {
  const { slug } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products", slug],
    queryFn: () => get_solo(slug || ""),
  });

  if (isError) return toast.error("Error!");
  if (isLoading) return <Loader />;


  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {data.name}
            <span className="text-green-300 ml-4">${data.price}</span>
          </h2>
          <p className="mb-4 font-bold">{data.description}</p>
          <a
            href="#"
            className="rounded-lg mb-2 inline-flex items-center mx-3 px-3 py-2 text-sm font-medium text-center text-gray bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 transition duration-500 hover:scale-110  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Añadir al carrito
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <img
          className="w-full rounded-lg"
          src={`${import.meta.env.VITE_BACKEND_URL}${data.image}`}
          alt="office content 1"
        />
      </div>
      <Reviews productId={data.id} reviews={data.reviews} />
    </div>
  );
};
export default SoloProduct;
