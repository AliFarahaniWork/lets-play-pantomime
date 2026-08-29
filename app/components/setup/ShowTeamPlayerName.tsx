import { useState } from "react";

import { usePageSetupStore } from "~/stores/pageSetupStore";
import type { Data } from "~/types/pageSetupType";

import { Field, FieldGroup } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import { Item, ItemContent, ItemDescription } from "~/components/ui/item";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export const ShowTeamPlayerName = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [tempValue, setTempValue] = useState("");

  // Main Data
  const data = usePageSetupStore((s) => s.data);

  // Player detail
  const playerName = usePageSetupStore((s) => s.playerName);
  const setPlayerName = usePageSetupStore((s) => s.setPlayerName);
  const addPlayer = usePageSetupStore((s) => s.addPlayer);

  // Edit Function
  const removeTeam = usePageSetupStore((s) => s.removeTeam);
  const removePlayer = usePageSetupStore((s) => s.removePlayer);
  const updateTeamName = usePageSetupStore((s) => s.updateTeamName);

  return (
    <div className="mx-auto flex w-full max-w-[1080px] flex-row flex-wrap justify-center gap-6">
      {" "}
      {data.map((team: Data, indexTeam: number) => (
        <Dialog key={indexTeam}>
          {/* Team Item */}
          <Item variant="outline" className="w-auto">
            <ItemContent>
              <DialogTrigger
                render={<Button variant="outline">{team.teamName}</Button>

                }
              />

              <ItemDescription>
                {team.playerName.length} Players
              </ItemDescription>
            </ItemContent>
          </Item>

          {/* Dialog */}
          <DialogContent showCloseButton={true}>
            <DialogHeader>
              <DialogTitle>{team.teamName}</DialogTitle>

              <DialogDescription>Manage team and players</DialogDescription>
            </DialogHeader>

            {/* Team Actions */}
            <div className="flex flex-row gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  removeTeam(indexTeam);
                }}
              >
                Remove
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setOpenIndex(indexTeam);
                  setTempValue(team.teamName);
                }}
              >
                Edit
              </Button>
            </div>

            {/* Edit Team Name */}
            {openIndex === indexTeam && (
              <Field
                orientation="horizontal"
                className="flex-col gap-2 sm:flex-row"
              >
                <Input
                  className="border"
                  placeholder="Team Name"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                />

                <Field orientation="horizontal">
                  <Button
                    type="button"
                    onClick={() => {
                      updateTeamName(indexTeam, tempValue);
                      setOpenIndex(null);
                    }}
                  >
                    Ok
                  </Button>
                </Field>
              </Field>
            )}

            {/* Add Player */}
            <FieldGroup className="w-full max-w-md">
              <Field
                orientation="horizontal"
                className="flex-col gap-2 sm:flex-row"
              >
                <Input
                  className="border"
                  placeholder="Player Name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                />

                <Field orientation="horizontal">
                  <Button
                    type="button"
                    className="border hover:bg-white hover:text-black hover:border-white"
                    onClick={() => addPlayer(indexTeam, playerName)}
                  >
                    Add Player
                  </Button>
                </Field>
              </Field>
            </FieldGroup>

            {/* Players */}
            <div>
              {team.playerName.map((player: string, indexPlayer: number) => (
                <ItemDescription
                  key={indexPlayer}
                  className="flex items-center gap-2"
                >
                  {player}

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="text-xs"
                    onClick={() => removePlayer(indexTeam, indexPlayer)}
                  >
                    Delete
                  </Button>
                </ItemDescription>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
