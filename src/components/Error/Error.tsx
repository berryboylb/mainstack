import React, { Suspense } from "react";
import Lottie from "lottie-react";
import { Connection } from "../../assets";

type Props = {
  err: string;
};

const Error: React.FC<Props> = ({ err }) => {
  return (
    <Suspense>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="mt-10 ">
          <Lottie
            animationData={Connection}
            loop={true}
            className="w-[300px] h-[300px]"
          />
        </div>

        <h1 className="text-lg font-poppins text-primary my-5 lg:text-xl text-center ">
          Sorry, check your internet settings
        </h1>

        <p className="text-lg mt-5 font-nunito w-full lg:text-base text-center text-[#213F7D]">
          {err}
        </p>
      </div>
    </Suspense>
  );
};

export default Error;
