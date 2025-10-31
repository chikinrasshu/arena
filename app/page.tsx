export default function Home() {
  return (
    <div className="flex flex-col m-auto p-1">
      <div className="flex flex-col border bg-emerald-400 border-emerald-800">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
          <div key={i} className="p-2">
            Item {i}
          </div>
        ))}
      </div>
    </div>
  );
}
