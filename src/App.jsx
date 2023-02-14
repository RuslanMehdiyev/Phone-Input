import React, { useState } from "react";

function App() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    let strippedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] >= "0" && value[i] <= "9") {
        strippedValue += value[i];
      }
    }
    if (strippedValue.length == 0) {
      setPhone("");
    } else if (strippedValue.length <= 3) {
      setPhone(`(${strippedValue}`);
    } else if (strippedValue.length <= 6) {
      setPhone(`(${strippedValue.slice(0, 3)}) ${strippedValue.slice(3, 6)}`);
    } else if (strippedValue.length <= 10) {
      setPhone(
        `(${strippedValue.slice(0, 3)}) ${strippedValue.slice(
          3,
          6
        )}-${strippedValue.slice(6, 10)}`
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhone("");
  };

  return (
    <div>
      <input
        type="text"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="(555) 555-5555"
      />
      <button disabled={phone.length !== 14} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
