import { useState } from "react";
import { usePageSetupStore } from "~/stores/pageSetupStore";


import { Button } from "~/components/ui/button";
import {
  Field,
  FieldGroup,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";

export function InputTeamPlayerName() {
  //Team detail
  const teamName = usePageSetupStore((s) => s.teamName);
  const setTeamName = usePageSetupStore((s) => s.setTeamName);
  const addTeam = usePageSetupStore((s) => s.addTeam);

  return (
    <div className="mx-auto flex w-full max-w-[1080px] flex-row flex-wrap justify-center gap-6">
      <FieldGroup className="w-full max-w-md">

        <Field orientation="horizontal" className="flex-col sm:flex-row gap-2">
          <Input
            className="w-full"

            id="fieldgroup-name"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <Field orientation="horizontal">
            <Button
              type="submit"
              onClick={() => {
                addTeam(teamName);
              }}
              className="w-full sm:w-auto"
            >
Add Team            </Button>
          </Field>
        </Field>
      </FieldGroup>
    </div>
  );
}
