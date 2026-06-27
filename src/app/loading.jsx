export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-violet-900 border-t-violet-400 animate-spin" />
        <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}
