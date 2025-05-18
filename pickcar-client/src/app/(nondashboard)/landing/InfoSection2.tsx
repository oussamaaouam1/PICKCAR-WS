import React from 'react' 
import Image from 'next/image';

const InfoSection2 = () => {
  return (
    <section className="lg:min-w-screen">
      <div className="mx-auto max-w-screen-2xl  py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-secondary-800 p-8 md:p-12 lg:px-16 lg:py-24 items-center justify-center flex">
            <div className="mx-auto max-w-xl text-center items-center justify-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl font-michroma  sm:text-3xl">
                Have a car without having a car{" "}
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block font-michroma text-lg sm:text-xl">
                Get access to a car nearby that&apos;s ready to drive. Go for a
                day or a week - just return the car when you&apos;re done. Easy,
                right?
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded-sm border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

<Image
          src="/info.jpg"
          alt="Landing Image"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-4xl"
        />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection2
