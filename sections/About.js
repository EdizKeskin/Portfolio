import React from "react";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="mockup-window bg-[#2d374850] border border-base-300 backdrop-blur-md shadow-lg sm:shadow-md mb-6 mt-40 sm:shadow-[#7aebfb] sm:border-none"
      >
        <div className="flex flex-col p-4 py-10 m-4 md:p-10 md:m-10">
          <div className="flex flex-col items-center justify-center">
            <p className="justify-center text-lg text-center ">
              Hello my name is Ediz Keskin. I&apos;m 17 years old. I want to be
              Full stack developer in the future.
            </p>
            <div className="divider" />
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-start p-4 m-4 md:m-4 md:p-4">
              <h2 className="mb-4 text-4xl font-bold text-white">
                Favorite activities
              </h2>
              <ul className="list-disc list-inside">
                <li>Playing video games</li>
                <li>Reading book</li>
                <li>Learning something new</li>
                <li>Love chit chat with my friends</li>
              </ul>
            </div>
            <div className="flex flex-col items-start p-4 m-4 md:m-4 md:p-4">
              <h2 className="mb-4 text-4xl font-bold text-white">
                Favorite Movies and Series
              </h2>
              <ul className="list-disc list-inside">
                <li>Game of Thrones</li>
                <li>Breaking Bad</li>
                <li>Daredevil</li>
                <li>Se7en</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
