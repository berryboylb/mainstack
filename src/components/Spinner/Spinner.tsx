import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BounceLoader, PacmanLoader } from "react-spinners";
type Props = {
  toggle?: boolean;
};

const Index: React.FC<Props> = ({ toggle }) => {
  const [loading] = useState<boolean>(true);
  const [size, setSize] = useState<number>(30);
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  useEffect(() => {
    if (isMobile) setSize(15);
  }, [isMobile]);
  return (
    <div
      className={
        toggle
          ? "flex justify-center items-center w-screen h-screen"
          : "flex justify-center items-center my-[.5rem]"
      }
    >
      {toggle ? (
        <PacmanLoader
          data-testid="full-loader"
          color="#FF5403"
          loading={loading}
          size={size}
        />
      ) : (
        <BounceLoader
          data-testid="free-loader"
          color="#FF5403"
          loading={loading}
          size={size}
        />
      )}
    </div>
  );
};

Index.defaultProps = {
  toggle: true,
};

export default Index;
