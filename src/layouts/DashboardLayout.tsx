import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import Spinner from "../components/Spinner/Spinner";
const SideBar = React.lazy(() => import("../components/Sidebar/Sidebar"));
const Header = React.lazy(() => import("../components/Header/Header"));
type Props = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [expand, setExpand] = React.useState<boolean>(false);
  const [mobileNav, setMobileNav] = React.useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  const handleMobileNav = () => {
    if (isMobile) {
      setMobileNav(!mobileNav);
    }
  };

  return (
    <Suspense fallback={<Spinner />}>
      <div className={"w-full "}>
        <SideBar expand={expand} mobileNav={mobileNav} />
        <div
          className={
            isMobile
              ? `my-container`
              : expand
              ? "relative left-[6rem] min-h-full bg-[#fff] h-screen ease-in duration-300 w-[calc(100%-6rem)] overflow-auto"
              : "relative left-[18rem] min-h-full bg-[#fff] h-screen ease-in duration-300 w-[calc(100%-18rem)] overflow-auto"
          }
        >
          <div
            className={
              expand
                ? "w-full mx-auto max-w-[1240px]"
                : "w-full mx-auto max-w-[1024px] "
            }
          >
            <Header
              expand={expand}
              setExpand={setExpand}
              mobileNav={mobileNav}
              handleMobileNav={handleMobileNav}
            />{" "}
            <div className="bg-white w-full h-screen">{children}</div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardLayout;
