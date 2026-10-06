import { HeldPlate } from "@/components/figure-box";
import { COMPANY } from "@/lib/cast";

export function CastParade() {
  return (
    <ul className="cast-rail flex gap-4 overflow-x-auto pb-2">
      {COMPANY.map((person) => (
        <li key={person.id} className="shrink-0">
          <HeldPlate src={`/cast/walk/${person.id}.png`} name={person.name} role={person.role} />
        </li>
      ))}
    </ul>
  );
}
