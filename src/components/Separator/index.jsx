export function VerticalSeparator({ height = 1.25, width = 0.08, twClass = "" }) {
  return (
    <div
      className={`bg-gray-600 px-[${width}rem] rounded-full py-[${height}rem] ${twClass}`}
    />
  );
}
