import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import {
  ArrowLeftIcon,
  SwordIcon,
  KnifeIcon,
  TargetIcon,
  CrossIcon,
  FireIcon,
  SpinnerGapIcon,
  GenderMaleIcon,
  GenderFemaleIcon,
  RobotIcon,
  QuestionMarkIcon,
} from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";

export async function generateStaticParams() {
  const units = await prisma.unit.findMany({
    select: { id: true },
  });

  return units.map((unit) => ({ id: unit.id }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = await prisma.unit.findUnique({
    where: { id },
  });

  if (!unit) {
    notFound();
  }

  let ClassIcon = SwordIcon;
  let classColors = "bg-gray-400 text-gray-800 border-gray-900";
  switch (unit.class) {
    case "WARRIOR":
      ClassIcon = SwordIcon;
      classColors = "bg-blue-400 text-blue-800 border-blue-900";
      break;
    case "MAGE":
      ClassIcon = FireIcon;
      classColors = "bg-red-400 text-red-800 border-red-900";
      break;
    case "ROGUE":
      ClassIcon = KnifeIcon;
      classColors = "bg-cyan-400 text-cyan-800 border-cyan-900";
      break;
    case "ARCHER":
      ClassIcon = TargetIcon;
      classColors = "bg-green-400 text-green-800 border-green-900";
      break;
    case "CLERIC":
      ClassIcon = CrossIcon;
      classColors = "bg-pink-400 text-pink-800 border-pink-900";
      break;
  }

  let GenderIcon = QuestionMarkIcon;
  let genderColors = "bg-gray-400 text-gray-800 border-gray-900";
  switch (unit.gender) {
    case "MALE":
      GenderIcon = GenderMaleIcon;
      genderColors = "bg-blue-400 text-blue-800 border-blue-900";
      break;
    case "FEMALE":
      GenderIcon = GenderFemaleIcon;
      genderColors = "bg-pink-400 text-pink-800 border-pink-900";
      break;
    case "OTHER":
      GenderIcon = RobotIcon;
      genderColors = "bg-gray-400 text-gray-800 border-gray-900";
      break;
  }

  return (
    <div className="flex flex-col m-auto">
      <ViewTransition name={`unit-container-${unit.id}`}>
        <div className="flex flex-col border bg-emerald-400 text-emerald-800 border-emerald-900">
          <div className="flex flex-row justify-start items-center gap-1 border-b">
            <div className="inline-flex self-stretch">
              <Link
                href={`/units`}
                className="inline-flex items-center p-1 border-e bg-rose-400 text-rose-800 border-rose-900"
              >
                <ArrowLeftIcon className="w-full h-full aspect-square" />
              </Link>
              <div
                className={cn(
                  "flex justify-center items-center p-1 border-e",
                  genderColors
                )}
              >
                <GenderIcon weight="duotone" className="w-full h-full" />
              </div>
            </div>
            <ViewTransition name={`unit-name-${unit.id}`}>
              <span className="text-xl font-bold">{unit.name}</span>
            </ViewTransition>
            <div className="mx-auto" />
            <span className="text-sm">{unit.class}</span>
            <div className="inline-flex self-stretch">
              <div
                className={cn(
                  "flex justify-center items-center p-1 border-s",
                  classColors
                )}
              >
                <ClassIcon weight="duotone" className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col border-b justify-between items-center p-1">
            <div className="flex flex-row justify-center items-center w-[75%] aspect-square border bg-emerald-300">
              <SpinnerGapIcon className="size-8 animate-spinner" />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_2fr] gap-1 p-1">
            <span className="font-light">LVL</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.lvl}
            </span>
            <span className="font-light">EXP</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.exp}
            </span>

            <div className="flex col-span-4 -mx-1 h-px bg-emerald-950" />

            <span className="font-light">ATK</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.atk}
            </span>
            <span className="font-light">DEF</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.def}
            </span>

            <span className="font-light">MAG</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.mag}
            </span>
            <span className="font-light">RES</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.res}
            </span>

            <span className="font-light">SPD</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.spd}
            </span>
            <span className="font-light">LUK</span>
            <span className="font-extrabold font-mono bg-emerald-300">
              {unit.luk}
            </span>
          </div>
        </div>
      </ViewTransition>
    </div>
  );
}
