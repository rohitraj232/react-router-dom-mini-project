import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white w-full h-screen">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="mt-6 space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://img.freepik.com/free-vector/experts-concept-illustration_114360-451.jpg?size=626&ext=jpg&uid=R119023841&ga=GA1.1.1074883898.1697271655&semt=ais"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Lorem ipsum dolor sit amet nemo consectetur adipisicing
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}