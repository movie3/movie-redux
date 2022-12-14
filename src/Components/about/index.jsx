import React, { useEffect } from 'react';
// import Head from '../Components/Head';
// import Layout from './../Layout/Layout';

function AboutUs() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  },[])

  return (
    <div>
      <div className="min-height-screen container mx-auto px-2 my-6">
        {/* <Head title="About Us" /> */}
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to BoxOffice
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <strong>
                  BoxOffice is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                </strong>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p> */}
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-border rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  {/* <p className="mb-0 text-text leading-7 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                  </p> */}
                </div>
                <div className="p-8 bg-border rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  {/* <p className="mb-0 text-text leading-7 text-sm">
                    Completely free, without registration! Lorem Ipsum is simply
                  </p> */}
                </div>
              </div>
            </div>
            <img
              src="https://netflixo.vercel.app/images/about2.jpg"
              alt="aboutus"
              className="w-full xl:block hidden h-header rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;