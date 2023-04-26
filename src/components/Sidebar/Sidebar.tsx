import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../../assets";
import { ListOne, ListTwo, ListThree } from "../../constants";

const SideBarLink = React.lazy(() => import("../SideBarLink/SideBarLink"));

type Props = {
  mobileNav: boolean;
  expand: boolean;
  userImg?: string;
};

const Index: React.FC<Props> = ({ mobileNav, expand, userImg }) => {
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <Suspense>
      <div
        className={
          isMobile
            ? mobileNav
              ? " bottom-0 overflow-x-hidden overflow-y-auto -translate-x-[40%]  absolute right-0 top-0 h-screen bg-white text-link flex flex-col justify-evenly items-center w-[calc(100%-30vw)] lg:w-full ease-in duration-300 z-[99] border-r-2 border-b-2 border-[#EFF1F6]"
              : "-translate-x-[100%] lg:translate-x-[0%] w-[18rem] bg-white text-link fixed top-0 bottom-0 overflow-x-hidden overflow-y-auto ease-in duration-300 z-[99] border-r-2 border-[#EFF1F6]"
            : expand
            ? "  w-[6rem] bg-white text-link fixed top-0 bottom-0 overflow-x-hidden overflow-y-auto ease-in duration-300 z-[99] border-r-2 border-[#EFF1F6]"
            : "-translate-x-[100%] lg:translate-x-[0%] w-[18rem] bg-white text-link fixed top-0 bottom-0 overflow-x-hidden overflow-y-auto ease-in duration-300 z-[99] pl-10 border-r-2 border-[#EFF1F6]"
        }
      >
        <div
          className={
            expand
              ? "flex justify-center items-center mt-5 "
              : "flex justify-start items-start mt-5 "
          }
        >
          {expand ? (
            <img
              className=" w-[40px] h-[40px]   object-contain "
              src={Logo}
              alt="Image Alt"
            />
          ) : (
            <img
              className="  w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]    object-contain"
              src={Logo}
              alt="Image Alt"
            />
          )}
        </div>

        {ListOne && ListOne.length > 0 && (
          <ul
            className={
              expand
                ? "flex flex-col justify-center items-center w-full"
                : "flex flex-col justify-end items-end w-full "
            }
          >
            {ListOne.map((link, i) => (
              <SideBarLink
                key={i}
                isIconMode={expand}
                Icon={link.icon}
                {...link}
                path={link.path}
              />
            ))}
          </ul>
        )}

        {ListTwo && !expand && (
          <h3 className="mt-7 text-[0.7rem] lg:text-[0.75rem] text-link font-sohne">
            OTHERS 1
          </h3>
        )}

        {ListTwo && ListTwo.length > 0 && (
          <ul
            className={
              expand
                ? "flex flex-col justify-center items-center w-full"
                : "flex flex-col justify-end items-end w-full "
            }
          >
            {ListTwo.map((link, i) => (
              <SideBarLink
                key={i}
                isIconMode={expand}
                Icon={link.icon}
                {...link}
                path={link.path}
              />
            ))}
          </ul>
        )}

        {ListThree && !expand && (
          <h3 className="mt-7 text-[0.7rem] lg:text-[0.75rem] text-link font-sohne">
            OTHERS 2
          </h3>
        )}

        {ListThree && ListThree.length > 0 && (
          <ul
            className={
              expand
                ? "flex flex-col justify-center items-center w-full"
                : "flex flex-col justify-end items-end w-full "
            }
          >
            {ListThree.map((link, i) => (
              <SideBarLink
                key={i}
                isIconMode={expand}
                Icon={link.icon}
                {...link}
                path={link.path}
              />
            ))}
          </ul>
        )}

        <div className="mt-2 cursor-pointer ">
          {!expand ? (
            <div className="flex items-center">
              <div className="  w-[32px]  h-[32px] my-[1rem]  rounded-full ">
                <img
                  className="  w-full h-full object-cover rounded-full "
                  src={
                    userImg ? userImg : "https://via.placeholder.com/100x100"
                  }
                  alt="Image Alt"
                />
              </div>
              <p className="ml-2 font-sohne text-[#4D5760] font-semibold">
                {" "}
                Blessing Daniels
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="   w-[32px]  h-[32px] my-[1rem]   rounded-full ">
                <img
                  className="  w-full h-full object-cover rounded-full "
                  src={
                    userImg ? userImg : "https://via.placeholder.com/100x100"
                  }
                  alt="Image Alt"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Index;
