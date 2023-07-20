import React, { useEffect, useState } from "react";

export const TruncatedText = ({ text, maxLength }) => {
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncatedText(text.substring(0, maxLength) + "...");
    } else {
      setTruncatedText(text);
    }
  }, [text, maxLength]);

  return <div>{truncatedText}</div>;
};
