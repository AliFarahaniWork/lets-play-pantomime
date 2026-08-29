import { usePageSetupStore } from "~/stores/pageSetupStore";
import { Button } from "~/components/ui/button";
import { Field, FieldGroup } from "~/components/ui/field";
import { Input } from "~/components/ui/input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function InputTeamPlayerName() {
  // Team Detail
  const addTeam = usePageSetupStore((s) => s.addTeam);

  // Hook Form
  const schema = yup.object({
    teamName: yup
      .string()
      .required("Team Name Required")
      .min(1, "You Can't Input Empty Name"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      teamName: "",
    },
  });

  type TeamForm = {
    teamName: string;
  };

  const onSubmit = (data: TeamForm) => {
    addTeam(data.teamName);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        mx-auto
        w-full
        max-w-md
        px-4

        max-[480px]:px-0

        md:px-4

        lg:px-4
      "
    >
      <FieldGroup className="w-full">
        <Field className="flex flex-col gap-1">
          <div
            className="
              flex
              w-full
              flex-col
              gap-2

              md:flex-row

              lg:flex-row
            "
          >
            <Input
              {...register("teamName")}
              id="fieldgroup-name"
              className="
                min-w-0
                flex-1
                border-gray-300
                focus-visible:border-[#FFAA0F]
                focus-visible:ring-[#FFAA0F]/20
              "
              placeholder="Team Name"
            />

            <Button
              type="submit"
              className="
                shrink-0
                border
                border-[#FFAA0F]
                bg-[#FFAA0F]
                text-black
                transition-all
                duration-200
                hover:border-black
                hover:bg-black
                hover:text-white

                max-[480px]:w-full

                md:w-auto

                lg:w-auto
              "
            >
              Add Team
            </Button>
          </div>

          {errors.teamName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.teamName.message}
            </p>
          )}
        </Field>
      </FieldGroup>
    </form>
  );
}
