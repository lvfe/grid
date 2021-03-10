import React, { useState, useEffect } from "react";
import useForceUpdate from "./useForceUpdate";
import UseWillSize from "./useResize";
import useColor from "./useColor";
import logo from "./logo.svg";
import "./App.css";
const themes = ["color", "blank"];

function App({ size, data }) {
  const forceupdate = useForceUpdate();
  const windowSize = UseWillSize();
  const [shake, setShake] = useState('Nclass');
  const [rows, columns] = size;
  const [popup, setPopup] = useState(false);
  const [theme, setTheme] = useState("blank");
  const [colors, setColors] = useColor();
  useEffect(() => {
    setShake('');
    if (theme === "color") {
      setColors(rows * columns, theme === "color");
    } else {
      setColors(rows * columns, theme === "color");
    }
    window.setTimeout(()=>{
      setShake('Nclass');
    }, 100)
  }, [theme]);
  const shapeWidth =
    Math.min(windowSize.width / columns, windowSize.height / rows) - 5;
  return (
    <div className="App">
      <div
        className="logo"
        onClick={() => {
          setPopup(!popup);
        }}
      >
        <img src={logo} />
        {popup && (
          <ul>
            {themes.map((theme) => (
              <li
                key={theme}
                onClick={() => {
                  setTheme(theme);
                  setPopup(!popup);
                }}
              >
                {theme}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="bg">
        {new Array(rows).fill(0).map((_, index) => {
          return (
            <div key={`row_${index}`} className="row">
              {new Array(columns).fill(0).map((_, jndex) => {
                return (
                  <div
                    onClick={() => {
                      data[index][jndex].side = !data[index][jndex].side;
                      forceupdate();
                    }}
                    key={`${index}_${jndex}`}
                    className={`column ${shake} `}
                    style={{
                      width: `${shapeWidth}px`,
                      height: `${shapeWidth}px`,
                      opacity: 0.95,
                      backgroundColor: !data[index][jndex].side
                        ? `${colors[index * columns + jndex]}`
                        : "rgb(83, 66, 97)",
                    }}
                  >
                    {!data[index][jndex].side ? (
                      <div style={{ color: "yellow" }}>
                        {data[index][jndex].keyword}
                      </div>
                    ) : (
                      <div style={{ color: "white" }}>
                        {data[index][jndex].description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
