export default function HeroDecoration() {
  const bars = [
    { w: 80, h: 48, left: 97, top: 7 },
    { w: 64, h: 48, left: 209, top: 16 },
    { w: 64, h: 40, left: 141, top: 81 },
    { w: 64, h: 44, left: 206, top: 137 },
    { w: 64, h: 44, left: 168, top: 209 },
    { w: 80, h: 44, left: -1, top: 0 },
    { w: 80, h: 40, left: 42, top: 76 },
    { w: 80, h: 40, left: 94, top: 142 },
  ];

  return (
    <div
      className="pointer-events-none absolute top-[190px] right-0 hidden h-64 w-72 overflow-hidden lg:block"
      aria-hidden
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          className="absolute rounded-sm bg-lime-200/10"
          style={{
            width: bar.w,
            height: bar.h,
            left: bar.left,
            top: bar.top,
          }}
        />
      ))}
    </div>
  );
}
