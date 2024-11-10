import getDateTime from "../assets/getDateTime";
const Transaction = (props) => {
  const { itemName, description, amount } = props;
  const timeNow = getDateTime();
  return (
    <div className="mt-2">
      <div className="flex justify-around bg-opacity-40 w-full rounded-md shadow-md shadow-gray-700 py-2 bg-gradient-to-r from-[#1D2235] to-[#121318]">
        <div className="font-sans">
          <h1 className="text-xl font-semibold text-slate-300">{itemName}</h1>
          <h1 className="text-slate-400">{description}</h1>
        </div>
        <div className="font-sans text-slate-300">
          <h1 className="text-xl font-semibold">{amount}</h1>
          <h1 className="text-slate-400">{timeNow}</h1>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
