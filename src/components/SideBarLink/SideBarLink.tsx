import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {
  path: string;
  title: string;
  Icon: any;
  isIconMode?: boolean;
};

function SidebarLink({ path, title, Icon, isIconMode = false }: Props) {
  const body = (
    <div className=" flex justify-center items-center lg:block">
      <span>
        {isIconMode ? (
          <FontAwesomeIcon
            className="text-2xl w-[1.5rem] h-[1.5rem]  "
            icon={["fas", Icon]}
          />
        ) : (
          <FontAwesomeIcon
            className="text-lg w-[1.125rem] h-[1.125rem] "
            icon={["fas", Icon]}
          />
        )}
      </span>
      {isIconMode ? null : (
        <span className="inline-block ml-5 text-sm lg:text-base font-sohne font-semibold">
          {title}
        </span>
      )}
    </div>
  );

  return (
    <Suspense>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? isIconMode
              ? " relative  text-primary   my-2 py-3 mx-0 "
              : "relative  my-1 py-3 mx-0 w-full   text-primary "
            : isIconMode
            ? " relative my-2 py-3   mx-0    hover:text-primary "
            : "relative my-1 py-3 mx-0  w-full  hover:text-primary "
        }
        to={path}
        data-tooltip-target="tooltip-hover"
        data-tooltip-trigger="hover"
      >
        {body}
      </NavLink>
    </Suspense>
  );
}

export default SidebarLink;
