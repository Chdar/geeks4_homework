import React, { useState, useRef } from "react";
import { Input, Button } from "antd";
import Text from "./Text";

const CustomInput = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите текст..."
      />
      <Button type="primary" onClick={handleFocus}>
        Фокус
      </Button>
      <Text text={inputValue} />
    </div>
  );
};

export default CustomInput;
