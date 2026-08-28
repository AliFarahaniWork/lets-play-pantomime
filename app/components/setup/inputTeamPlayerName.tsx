import { useState } from "react";
import { usePageSetupStore } from "~/stores/pageSetupStore";

export const InputTeamPlayerName = () => {

  //Main Data
  const data = usePageSetupStore((s) => s.data);

  //Team detail
  const teamName = usePageSetupStore((s) => s.teamName);
  const setTeamName = usePageSetupStore((s) => s.setTeamName);
  const addTeam = usePageSetupStore((s) => s.addTeam);

  return (
    <div className="mx-auto text-center">
      <h1>PageSetup</h1>
      <input
        className="input"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button
        className="button"
        onClick={() => {
          addTeam(teamName);
        }}
      >
        set team name
      </button>
    </div>
  );
};
