export default function Home() {
  return (
    <div className="flex flex-col m-auto p-1">
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
          <div
            key={i}
            className="inline-flex justify-center p-2 border bg-emerald-400 text-emerald-800 border-emerald-900"
          >
            Unit {i}
          </div>
        ))}
      </div>
    </div>
  );
}
