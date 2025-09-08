import React from "react";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-l from-sky-300 via-green-300 to-indigo-500 ">
        <div className="text-center space-y-3">
          <h3
            className={` ${poppins.className} text-5xl font-semibold text-slate-900 drop-shadow-sm`}
          >
            Sample Auth
          </h3>
          <p
            className={`text-xl p-4 text-sky-900/90 drop-shadow-lg  font-light tracking-wider ${poppins.className}`}
          >
            Authentication Application
          </p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AboutPage;
