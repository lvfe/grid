import { useState } from "react";
function useColor() {
  const [color, setColor] = useState([]);
  function getColorValue() {
    return "#" + Math.round(Math.random() * 1000000);
  }
  const setColors = (num, isColor)=>{
      if(isColor) {
        const colors = new Array(num).fill(1).map((i) => getColorValue());
        console.log('colors', colors);
        setColor(colors);
      } else {
          const color = getColorValue();
          setColor(new Array(num).fill(color))
          console.log('colors1', color);
      }
     
  }
  return [color, setColors];
}
export default useColor;
