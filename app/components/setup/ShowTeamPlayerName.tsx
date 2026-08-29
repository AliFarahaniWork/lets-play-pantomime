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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const ShowTeamPlayerName = () => {
  // Edit Team Name
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [tempValue, setTempValue] = useState("");

  // Hook Form
  const playerSchema = yup.object({
    playerName: yup.string().trim().required("Player name is required"),
  });

  type PlayerForm = {
    playerName: string;
  };

  const {
    register: registerPlayer,
    handleSubmit: handlePlayerSubmit,
    reset: resetPlayer,
    formState: { errors: playerErrors },
  } = useForm<PlayerForm>({
    resolver: yupResolver(playerSchema),
    defaultValues: {
      playerName: "",
    },
  });

  // Main Data
  const data = usePageSetupStore((s) => s.data);

  // Player detail
  const addPlayer = usePageSetupStore((s) => s.addPlayer);

  // Edit Function
  const removeTeam = usePageSetupStore((s) => s.removeTeam);
  const removePlayer = usePageSetupStore((s) => s.removePlayer);
  const updateTeamName = usePageSetupStore((s) => s.updateTeamName);

  return (
    <div
      className="
        mx-auto
        flex
        w-full
        max-w-[768px]
        flex-row
        flex-wrap
        justify-center
        gap-4
        px-4

        max-[480px]:gap-2
        max-[480px]:px-0

        md:gap-4
        md:px-4

        lg:gap-4
        lg:px-4
      "
    >
      {data.map((team: Data, indexTeam: number) => (
        <Dialog key={indexTeam}>
          {/* Team Item */}
          <Item
            variant="outline"
            className="
              w-auto
              min-w-[150px]
              border-gray-300
              transition-all
              duration-200
              hover:border-[#FFAA0F]

              max-[480px]:w-full
              max-[480px]:min-w-0

              md:w-auto
              md:min-w-[150px]

              lg:w-auto
              lg:min-w-[150px]
            "
          >
            <ItemContent className="min-w-0 items-center">
              <DialogTrigger
                render={
                  <Button
                    variant="outline"
                    className="
                      w-full
                      border-gray-300
                      bg-white
                      text-black
                      hover:border-black
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <span className="min-w-0 break-words">{team.teamName}</span>
                  </Button>
                }
              />

              <ItemDescription className="text-center">
                {team.playerName.length} Players
              </ItemDescription>
            </ItemContent>
          </Item>

          {/* Dialog */}
          <DialogContent
            showCloseButton={true}
            className="
              border-gray-300
              bg-white
              text-black

              max-[480px]:w-[calc(100%-24px)]
              max-[480px]:max-w-none
              max-[480px]:p-4

              md:max-w-md

              lg:max-w-md
            "
          >
            <DialogHeader>
              <DialogTitle className="break-words text-xl">
                {team.teamName}
              </DialogTitle>

              <DialogDescription>Manage team and players</DialogDescription>
            </DialogHeader>

            {/* Team Actions */}
            <div className="flex flex-row gap-2">
              <Button
                size="sm"
                variant="outline"
                className="
                  border-gray-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
                onClick={() => {
                  removeTeam(indexTeam);
                }}
              >
                Remove
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="
                  border-[#FFAA0F]
                  bg-[#FFAA0F]
                  text-black
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
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
                className="
                  flex-col
                  gap-2

                  md:flex-row

                  lg:flex-row
                "
              >
                <Input
                  className="
                    min-w-0
                    border-gray-300
                    focus-visible:border-[#FFAA0F]
                    focus-visible:ring-[#FFAA0F]/20
                  "
                  placeholder="Team Name"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                />

                <Field orientation="horizontal">
                  <Button
                    type="button"
                    className="
                      bg-[#FFAA0F]
                      text-black
                      hover:bg-black
                      hover:text-white

                      max-[480px]:w-full

                      md:w-auto

                      lg:w-auto
                    "
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
              <form
                onSubmit={handlePlayerSubmit((formData) => {
                  addPlayer(indexTeam, formData.playerName);
                  resetPlayer();
                })}
                className="w-full"
              >
                <Field
                  orientation="horizontal"
                  className="
                    w-full
                    flex-col
                    items-start
                    gap-2

                    md:flex-row

                    lg:flex-row
                  "
                >
                  <div className="w-full min-w-0 flex-1">
                    <Input
                      className="
                        w-full
                        min-w-0
                        border-gray-300
                        focus-visible:border-[#FFAA0F]
                        focus-visible:ring-[#FFAA0F]/20
                      "
                      placeholder="Player Name"
                      {...registerPlayer("playerName")}
                    />

                    {playerErrors.playerName && (
                      <p className="mt-1 text-sm text-red-500">
                        {playerErrors.playerName.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="
                      shrink-0
                      bg-[#FFAA0F]
                      text-black
                      hover:bg-black
                      hover:text-white

                      max-[480px]:w-full

                      md:w-auto

                      lg:w-auto
                    "
                  >
                    Add Player
                  </Button>
                </Field>
              </form>
            </FieldGroup>

            {/* Players */}
            <div className="flex w-full min-w-0 flex-col gap-2">
              {team.playerName.map((player: string, indexPlayer: number) => (
                <div
                  key={indexPlayer}
                  className="
                      flex
                      min-w-0
                      items-center
                      justify-between
                      gap-2
                      rounded-md
                      border
                      border-gray-200
                      px-3
                      py-2
                    "
                >
                  <ItemDescription className="min-w-0 break-words text-black">
                    {player}
                  </ItemDescription>

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="
                        shrink-0
                        text-xs
                        hover:border-black
                        hover:bg-black
                        hover:text-white
                      "
                    onClick={() => removePlayer(indexTeam, indexPlayer)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
