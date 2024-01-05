export function HorizontalSeprator({
  color = "gray-600",
  height = "0.01rem",
  customTWClass = "",
}) {
  return <div className={`bg-${color} py-[${height}] ${customTWClass}`} />;
}
