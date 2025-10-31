import prisma from "@/lib/prisma";
import Link from "next/link";
import { ViewTransition } from "react";

export default async function Home() {
  const units = await prisma.unit.findMany();

  return (
    <div className="flex flex-col m-auto p-1">
      <div className="grid grid-cols-3 gap-2">
        {units.map((unit) => (
          <Link
            key={unit.id}
            href={`/units/${unit.id}`}
            className="flex flex-col"
          >
            <ViewTransition name={`unit-container-${unit.id}`}>
              <div className="flex flex-col p-1 px-2 justify-center items-center border bg-emerald-400 text-emerald-800 border-emerald-900">
                <ViewTransition name={`unit-name-${unit.id}`}>
                  <span className="text-lg font-semibold">{unit.name}</span>
                </ViewTransition>
              </div>
            </ViewTransition>
          </Link>
        ))}
      </div>
    </div>
  );
}
