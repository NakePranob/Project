"use client"

import { useState, useEffect } from "react";
type Props = {
    text: string
    size: number
    sizeSm: number
}

function TruncateText({ text, size, sizeSm }: Props) {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width < 640) {
      const maxLength:number = size;
      if (text.length <= maxLength) {
        return <p>{text}</p>;
      }
      return <p>{text.slice(0, maxLength - 3)}...</p>;
    } else {
      const maxLength:number = sizeSm;
      if (text.length <= maxLength) {
        return <p>{text}</p>;
      }
      return <p>{text.slice(0, maxLength - 3)}...</p>;
    }
  }
  
  export default TruncateText;