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
    if (strippedValue.length <= 10) {
      setPhone(formatPhone(strippedValue));
    }
  };

  const formatPhone = (strippedPhone) => {
    if (strippedPhone.length === 3) {
      return `(${strippedPhone})`;
    } else if (strippedPhone.length > 3 && strippedPhone.length <= 6) {
      return `(${strippedPhone.slice(0, 3)}) ${strippedPhone.slice(3, 6)}`;
    } else if (strippedPhone.length > 6 && strippedPhone.length <= 10) {
      return `(${strippedPhone.slice(0, 3)}) ${strippedPhone.slice(
        3,
        6
      )}-${strippedPhone.slice(6, 10)}`;
    }
    return strippedPhone;
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
