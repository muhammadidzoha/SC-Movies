import React, {useState, useEffect} from "react";
import axios from "../axios";

const image_uri = "https://image.tmdb.org/t/p/original/";

export default function Main(props) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.url);
      setMovie(request.data.results);
    }

    fetchData();
  }, [props.url]);

  console.log(movies);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <h1 className="font-semibold text-xl">
        <span className="text-red-600 align-text-bottom">|</span>
        {props.featured}
      </h1>

      <div className="mt-5 grid grid-cols-5 gap-x-24">
        {movies.map((movie) => {
          return (
            <div className="w-44 h-64 mb-20 relative">
              <div className="group">
                <img
                  src={`${image_uri}${movie.poster_path}`}
                  alt=""
                  className="w-full h-full object-center object-cover rounded-xl filter brightness-50"
                />
                <img
                  src={`${image_uri}${movie.poster_path}`}
                  alt=""
                  className="w-full h-full object-center object-cover rounded-xl absolute top-0 z-10 group-hover:hidden"
                />
                <a
                  href="/"
                  className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="#fff"
                    class="w-20 h-20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </a>
              </div>
              {/* <h1 className="label font-thin bg-red-600 text-white rounded-tl-xl px-3 text-xs py-1 absolute top-0">
                FEATURED
              </h1> */}
              <h1 className="title mt-2 text-xs font-semibold">
                {movie.original_title || movie.name}
              </h1>
              <p className="year text-xs font-normal text-slate-600">
                {movie.release_date || movie.first_air_date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
