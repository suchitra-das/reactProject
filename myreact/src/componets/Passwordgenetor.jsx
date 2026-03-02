import React, { useState } from "react";
import { useCallback, useEffect } from "react";

const Passwordgenetor = () => {
  const [NumberAllowed, setNumberAllowed] = useState(8);
  const [length, setlength] = useState(true);
  const [CharAllowed, setCharAllowed] = useState(true);
  const [Password, setPassword] = useState(true);

  const PassWordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllowed) str += "123456789";

    if (CharAllowed) str += "!@#$%^&*-_=+{}[]~`";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass  += str.charAt(char);
    }
    setPassword(pass);
  }, [NumberAllowed, length, CharAllowed, Password, ]);





  return (
    <div>
      <div className="flex flex-col p-4 border h-50% gap-4">
        <div className=" flex items-center justify-center rounded-xl border-gray-700">
          <input
            className="border rounded-lg p-1"
            placeholder="Password"
            value={Password}
            type="text"
            readOnly
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="border rounded-r-lg text-md p-1 bg-blue-600 text-white">
            Copy
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-2">
            <input
              className="border "
              type="range"
              min={6}
              max={100}
              value={length}
            />
            <label>Number{length}</label>
          </div>

          <div className="flex gap-1">
            <input
              className="border"
              type="checkbox"
              defaultChecked={CharAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

          <div className="flex gap-1">
            <input
              className="border"
              type="checkbox"
              onChange={() => {
                setlength((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Number</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passwordgenetor;
