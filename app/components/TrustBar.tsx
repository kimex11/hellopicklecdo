import { IconCheck } from "./Icons";

const items = [
  "Free forever",
  "No login required",
  "Works fully offline",
  "Saved on your device",
];

export default function TrustBar() {
  return (
    <div className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm font-semibold text-slate-500">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <IconCheck className="h-4 w-4 text-emerald-600" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
