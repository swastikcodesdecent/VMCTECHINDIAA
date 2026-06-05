"use client";

export function GrokOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1: Violet/Indigo top-left */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-500/12 to-purple-500/4 blur-[120px]"
        style={{ left: "-10%", top: "5%" }}
      />
      
      {/* Orb 2: Emerald/Teal middle-right */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/3 blur-[130px]"
        style={{ right: "-10%", top: "30%" }}
      />

      {/* Orb 3: Purple/Violet bottom-left */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-violet-600/10 to-indigo-600/3 blur-[110px]"
        style={{ left: "-5%", top: "65%" }}
      />

      {/* Orb 4: Cyan/Indigo top-right */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/4 blur-[100px]"
        style={{ right: "10%", top: "15%" }}
      />

      {/* Orb 5: Amber/Emerald center-bottom */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-500/8 to-emerald-500/3 blur-[120px]"
        style={{ right: "20%", top: "85%" }}
      />
    </div>
  );
}
