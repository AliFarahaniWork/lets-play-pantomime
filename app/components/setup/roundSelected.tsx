import { usePageSetupStore } from "~/stores/pageSetupStore";


export const RoundSelector = () => {

  //Round detail
  const setRound = usePageSetupStore((s) => s.setRound);
  const round = usePageSetupStore((s) => s.round);

  return (
    <div>
      <h2>Number of rounds</h2>
      <button
        className={`px-5 mx-2 border border-white ${
          round === 3
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
        onClick={() => setRound(3)}
      >
        3
      </button>
      <button
        className={`px-5 mx-2 border border-white ${
          round === 5
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
        onClick={() => setRound(5)}
      >
        5
      </button>
      <button
        className={`px-5 mx-2 border border-white ${
          round === 7
            ? "bg-amber-50 text-black"
            : "hover:bg-amber-50 hover:text-black"
        }`}
        onClick={() => setRound(7)}
      >
        7
      </button>
      <button
        className={`px-5 mx-2 border border-white ${
          round === 9
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
        onClick={() => setRound(9)}
      >
        9
      </button>
    </div>
  );
}
