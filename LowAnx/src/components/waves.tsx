import { useEffect, useState } from "react";

function Waves() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="background"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: `${windowHeight * 0.3}px`, // Definindo a altura como 30% da altura da janela de visualização
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900" // Definindo viewBox para manter o tamanho original das ondas
          style={{ display: "block" }}
        >
          <defs>
            <path
              id="wave"
              fill="#094bce"
              d="M -4508 150 C -4149 419 -3784 172 -3597 104 s 523 330 763 125 s 330 -120 593 64 s 325 69 501 -81 S -1382 141 -1141 321 S -754 174 -506 162 S -135 423 101 372 S 419 146 737 307 S 1183.6667 259.6667 1427 224 S 1723 372 2037 421 S 2339 280 2605 241 S 2995.6667 375.6667 3191 443 S 3560.3333 301 3745 230 S 4171.6667 410.6667 4326 396 S 4588 279 4843 195 S 5260 428 5592 393 S 5974 145 6160 236 v 659 H -4536 V 150 z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".1">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".2">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".4">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s" // Aumentando a duração da animação
                calcMode="spline"
                values="10 220;-120 180;10 220" // Ajustando os valores para movimento 
                keyTimes="0; .5; 1"
                keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1" // Ajustando as curvas de movimento 
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
    </>
  );
}

export default Waves;
