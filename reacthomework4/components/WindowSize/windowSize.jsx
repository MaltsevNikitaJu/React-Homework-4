import { useEffect, useState } from "react";

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Размер окна</h1>
      <p>Ширина: {windowSize.width}</p>
      <p>Высота: {windowSize.height}</p>
    </div>
  );
}

export default WindowSize;
