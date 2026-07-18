const PATTERN_A = [0, 3, 4, 7, 10, 13, 14, 17, 19];
const PATTERN_B = [1, 2, 5, 8, 9, 12, 15, 16, 18];

export default function PixelDivider({
  from = "#101210",
  to = "#e9e9e6",
}: {
  from?: string;
  to?: string;
}) {
  const cells = 20;
  return (
    <div aria-hidden style={{ background: to }}>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${cells}, 1fr)` }}>
        {Array.from({ length: cells }, (_, i) => (
          <div
            key={`a${i}`}
            className="aspect-square"
            style={{ background: PATTERN_A.includes(i) ? from : to }}
          />
        ))}
        {Array.from({ length: cells }, (_, i) => (
          <div
            key={`b${i}`}
            className="aspect-square"
            style={{ background: PATTERN_B.includes(i) ? from : to }}
          />
        ))}
      </div>
    </div>
  );
}
