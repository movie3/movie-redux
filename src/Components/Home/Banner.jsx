import React from "react";
import { Link } from "react-router-dom";
import banner from "../img/device-pile.png";
const Banner = () => {
  return (
    <div>
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${banner})`,
          height: "500px",
        }}
      >
        <div
          class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
        >
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-5xl font-bold mt-0 mb-6"></h1>
              <h3 class="text-3xl font-bold mb-8"></h3>
              <Link to="/Iptv">
                <button
                  style={{
                    marginBottom: "50px",
                    backgroundColor: "red",
                    paddingLeft: "20px",
                  }}
                  type="button"
                  class="inline-block px-6 py-2.5 border-2 border-subMain text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Watch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
