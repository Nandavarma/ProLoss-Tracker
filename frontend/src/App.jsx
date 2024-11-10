import Transaction from "./components/Transaction";
import "./index.css";
import { useState } from "react";
import { BackgroundLines } from "@ui/background-lines";
import getDateTime from "./assets/getDateTime";
function App() {
  const timeNow = getDateTime();
  const [sumAmout, setSumAmount] = useState(0);
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    amout: 0,
    dateTime: timeNow,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <BackgroundLines className="flex flex-col items-center w-full px-4 bg-black h-screen relative">
      <div className="flex flex-col w-full items-center absolute ">
        <div className="py-[4vh] text-gray-300 font-extrabold text-2xl">
          ProLoss Tracker
        </div>
        <div className="py-[2vh] border-gray-400 border-[1px] w-4/6 rounded-xl px-5 bg-gradient-to-b from-[#e1e1e1]/70 to-[#a1a1a1]/70">
          <h1 className="font-bold text-4xl w-2/6 text-center bg-gradient-to-r from-[#1D2235] to-[#121318] m-auto py-2 rounded-md mb-2 text-white">
            Cumulative : ${sumAmout}
          </h1>
          <form
            className="flex justify-around"
            onSubmit={handleSubmit(formData)}
          >
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter the name"
                className="input-styles"
              />
              <input
                type="text"
                placeholder={timeNow}
                className="input-styles"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Description of item"
                className="input-styles"
              />
              <input
                type="number"
                placeholder="Amount in Rs"
                className="input-styles"
              />
            </div>
          </form>

          <Transaction
            itemName="Smartphone"
            description="this is a new model"
            amount="100"
          />
        </div>
      </div>
    </BackgroundLines>
  );
}

export default App;
