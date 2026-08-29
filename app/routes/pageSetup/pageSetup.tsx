import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

import {  InputTeamPlayerName } from "~/components/setup/inputTeamPlayerName";
import { ShowTeamPlayerName } from "~/components/setup/ShowTeamPlayerName";
import {  RoundSelector } from "~/components/setup/roundSelected";
import { TimeSelector } from "~/components/setup/timeSelector";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";


const PageSetup = () => {

  const navigate = useNavigate()

  //Main Data
  const data = usePageSetupStore((s) => s.data);

  //Round detail
  const round = usePageSetupStore((s) => s.round);

  //Time detail
  const time = usePageSetupStore((s) => s.time);
  const setGameTime = usePlayGameStore((s) => s.setGameTime);

  const canPlay =
    time &&
    round &&
    data.length >= 2 &&
    data.every((team) => team.playerName.length >= 1);

  return (
    <div className="flex flex-col max-w-[1080] gap-8">
      <RoundSelector />
      <TimeSelector />
      <InputTeamPlayerName />
      <ShowTeamPlayerName />
      <Button
        className={`
    mx-auto
    w-full
    max-w-[270px]
    border
    transition-all
    duration-200

    ${
      canPlay
        ? `
          bg-[#FFAA0F]
          text-black
          border-[#FFAA0F]

          hover:bg-black
          hover:text-white
          hover:border-black
        `
        : `
          bg-gray-100
          text-gray-400
          border-gray-200
          cursor-not-allowed
        `
    }
  `}
        disabled={!canPlay}
        onClick={() => {
          setGameTime(time);
          navigate("/game");
        }}
      >
        Start Game
      </Button>{" "}
    </div>
  );
};

export default PageSetup;
