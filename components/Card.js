import Image from "next/image";

const Card = ({ title, category, price }) => {
  return (
    <div class="w-full md:w-1/2 lg:w-80 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure class="mb-2">
          <img
            src="https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png"
            alt=""
            class="h-64 ml-auto mr-auto"
          />
        </figure>
        <div class="rounded-lg p-4 bg-gray-700 flex flex-col text-center">
          <div>
            <h5 class="text-white text-2xl font-bold leading-none">{title}</h5>
            <span class="text-xs text-gray-400 leading-none">{category}</span>
          </div>
          <div class="flex justify-center">
            <h2 class="text-lg text-white font-light">${price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
