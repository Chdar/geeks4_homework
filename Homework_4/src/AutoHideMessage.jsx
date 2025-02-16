import React, { useState, useEffect } from "react";

function AutoHideMessage() {
  const [messageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    if (messageVisible) {
      const timer = setTimeout(() => {
        setMessageVisible(false);
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [messageVisible]);

  return (
    <div>
      <button onClick={() => setMessageVisible(true)}>Показать сообщение</button>
      {messageVisible && <p>Это сообщение исчезнет через 5 секунд.</p>}
    </div>
  );
}

export default AutoHideMessage;