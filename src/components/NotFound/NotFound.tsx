import { Suspense } from "react";
const Index = () => {
    return (
      <Suspense>
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <h3 className="text-3xl font-poppins text-primary my-5 lg:text-xl text-center ">
              404 page not found
            </h3>
            <p className="text-lg mt-5 font-nunito w-full lg:text-base text-center text-[#213F7D]">
              We are sorry but the page you are looking for does not exist.
            </p>
          </div>
        </div>
      </Suspense>
    );
};

export default Index;
