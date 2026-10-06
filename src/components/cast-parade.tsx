import { COMPANY } from "@/lib/cast";

export function CastParade() {
  return (
    <ul className="flex gap-2 overflow-x-auto pb-2 sm:gap-4">
      {COMPANY.map((person) => (
        <li key={person.id} className="w-24 shrink-0 text-center sm:w-28">
          <img
            src={`/cast/walk/${person.id}.png`}
            alt=""
            className="pixel mx-auto h-36 w-auto sm:h-44"
          />
          <p className="mt-2 font-display text-xs tracking-wide text-navy uppercase">{person.name}</p>
          <p className="text-base leading-snug text-navy/70">{person.role}</p>
        </li>
      ))}
    </ul>
  );
}
