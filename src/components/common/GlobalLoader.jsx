import { Atom } from "react-loading-indicators";
const GlobalLoader = () => {
  return (
    <div
      className={
        "fixed top-0 left-0 bg-white/90 backdrop-blur-2xl w-svw h-svh z-50 flex items-center justify-center"
      }
    >
      <Atom color="#FF1BE4" size="large" text="Vantafy" textColor="#FF1BE4" />
    </div>
  );
};

export default GlobalLoader;
