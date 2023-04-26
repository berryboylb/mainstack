import React, { Suspense } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
type Props = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  mobileNav: boolean;
  handleMobileNav?: () => void;
};

const Index: React.FC<Props> = ({
  expand,
  setExpand,
  mobileNav,
  handleMobileNav,
}) => {
  return (
    <Suspense>
      <header className="flex  md:px-0 justify-between items-center py-[1rem] bg-white font-sohne">
        <div>
          <div className={" flex items-center  "}>
            <button
              className=" hidden lg:block text-icon text-2xl mr-5 hover:opacity-80 ease-in duration-300 "
              onClick={() => setExpand(!expand)}
            >
              <FontAwesomeIcon icon={expand ? faTimes : faBars} />
            </button>
            <h4
              className={
                " text-bold  lg:text-[1.25rem] text-base  lg:ml-0 font-semibold"
              }
            >
              Dashboard
            </h4>
          </div>
        </div>

        <div className="flex items-center">
          <button
            role="button"
            onClick={handleMobileNav}
            className="block lg:hidden  text-icon text-xl lg:text-2xl  hover:opacity-80 ease-in duration-300"
          >
            <FontAwesomeIcon icon={mobileNav ? faTimes : faBars} />
          </button>
        </div>
      </header>
      <div className="my-3">
        <h1 className="  text-bold lg:text-[1.5rem] text-[1.25rem] font-semibold">
          Good morning, Blessing ⛅️
        </h1>
        <div className="flex items-center justify-between mt-2 w-full flex-wrap ">
          <p className="text-light lg:text-[0.875rem] text-[0.75rem] w-full lg:w-auto">
            Check out your dashboard summary.
          </p>

          <Link
            to=""
            className="text-primary lg:text-[0.875rem] text-[0.75rem] w-full lg:w-auto mt-[1rem] lg:mt-0"
          >
            View analytics
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default Index;
