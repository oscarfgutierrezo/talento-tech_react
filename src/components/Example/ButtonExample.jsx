import { useSelector, useDispatch } from "react-redux";
import { decreaseNumber, increaseNumber } from "../features/numberSlice";

export const ButtonExample = () => {
  const number = useSelector((state) => state.number.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="pt-14 flex justify-center gap-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4 transition-all duration-300"
          onClick={() => dispatch(increaseNumber())}
        >
          Increase
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 rounded text-blue-50 font-bold py-2 px-4 transition-all duration-300"
          onClick={() => dispatch(decreaseNumber())}
        >
          Decrease
        </button>
      </div>
      <p className="text-xl pt-5 text-center">{`Contador: ${number}`}</p>
    </>
  );
};
