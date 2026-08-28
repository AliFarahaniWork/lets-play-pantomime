import { usePageSetupStore } from "~/stores/pageSetupStore";

export const ListTeamPlayer = () => {
  //Main Data
  const data = usePageSetupStore((s) => s.data);

  return (
    <div className="flex flex-row">
      {data.map((team: any, indexTeam: any) => {
        return (
          <>
            <div className="flex flex-col" key={indexTeam}>
              <h1 className="text-3xl"> {team.teamName}</h1>
              <div className="">
                {team.playerName.map((player: any, indexPlayer: any) => (
                  <div key={indexPlayer}>
                    {player}
                    <div className="text-mist-300 text-2xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
