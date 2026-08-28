import { useState } from "react";
import { usePageSetupStore } from "~/stores/pageSetupStore";
import type { Data } from "~/types/pageSetupType";

export const ShowTeamPlayerName = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [tempValue, setTempValue] = useState("");

  //Main Data
  const data = usePageSetupStore((s) => s.data);

  //Player detail
  const playerName = usePageSetupStore((s) => s.playerName);
  const setPlayerName = usePageSetupStore((s) => s.setPlayerName);
  const addPlayer = usePageSetupStore((s) => s.addPlayer);

  //Edit Function
  const removeTeam = usePageSetupStore((s) => s.removeTeam);
  const removePlayer = usePageSetupStore((s) => s.removePlayer);
  const updateTeamName = usePageSetupStore((s) => s.updateTeamName);
  return (
    <div className="flex flex-row gap-1.5 justify-center">
      {data.map((team: Data, indexTeam: number) => {
        return (
          <>
            {/* add team and players */}
            <div className="flex flex-col gap-1.5 justify-between align-middle ">
              <div
                className="flex flex-col px-2.5 gap-5 mx-1.5 border border-white"
                key={indexTeam}
              >
                <h1 className="text-4xl">
                  {team.teamName}
                  <div className="flex flex-row justify-center">
                    <button
                      className="text-xs border hover:bg-white hover:text-black hover:border-white"
                      onClick={() => {
                        removeTeam(indexTeam);
                      }}
                    >
                      delete
                    </button>
                    <button
                      className="text-xs border hover:bg-white hover:text-black hover:border-white"
                      onClick={() => {
                        setOpenIndex(indexTeam);
                        setTempValue(team.teamName);
                      }}
                    >
                      edit
                    </button>
                    {openIndex === indexTeam && (
                      <div>
                        <input
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                        />
                        <button
                          onClick={() => {
                            updateTeamName(indexTeam, tempValue);
                            setOpenIndex(null);
                          }}
                        >
                          ok
                        </button>
                      </div>
                    )}
                  </div>
                </h1>
                <div className="">
                  {team.playerName.map((player: any, indexPlayer: any) => (
                    <div key={indexPlayer}>
                      <p className="border-white">
                        {player}
                        <button
                          className="text-xs border hover:bg-white hover:text-black hover:border-white"
                          onClick={() => removePlayer(indexTeam, indexPlayer)}
                        >
                          delete
                        </button>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <input
                  className="border"

                  placeholder="Player Name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                />
                <button
                  className="border hover:bg-white hover:text-black hover:border-white"
                  onClick={() => addPlayer(indexTeam, playerName)}
                >
                  Player Name
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
