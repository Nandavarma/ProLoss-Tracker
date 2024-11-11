import { PlaceholdersAndVanishInput } from "@ui/placeholders-and-vanish-input";
const SubmitAction = () => {
  const placeholders = ["Profit", "Loss", "Expense", "Income"];
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex px-4 items-center justify-center">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onSubmit={onSubmit}
        onChange={handleChange}
      />
    </div>
  );
};
export default SubmitAction;
