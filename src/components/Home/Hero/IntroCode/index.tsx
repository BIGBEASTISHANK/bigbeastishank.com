import { ColorPalette as CP } from "@@/data/ColorPaletteData";

export default function IntroCodeComponent() {
  return (
    <div
      className="rounded-3xl pl-5 pr-20 py-10 font-mono text-sm overflow-auto"
      style={{ backgroundColor: CP.surface.low.hex }}
    >
      <div className="flex">
        {/* Line numbers */}
        <div
          className="pr-4 select-none flex flex-col gap-1"
          style={{ color: CP.text.tertiary.hex }}
        >
          {Array.from({ length: 11 }, (_, i) => (
            <div key={i + 1} className="leading-relaxed">
              {i + 1}.
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex flex-col gap-1">
          <div className="leading-relaxed">
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              class
            </span>{" "}
            <span className="font-bold" style={{ color: CP.warning.hex }}>
              person
            </span>{" "}
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#123;
            </span>
          </div>

          <div className="leading-relaxed ml-4">
            <span className="font-bold" style={{ color: CP.error.hex }}>
              public
            </span>
            <span style={{ color: CP.text.secondary.hex }}>:</span>
          </div>

          <div className="leading-relaxed ml-8">
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              string
            </span>{" "}
            <span
              className="font-semibold"
              style={{ color: CP.text.primary.hex }}
            >
              name
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#123;
            </span>
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Ishank"
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#125;
            </span>
            <span style={{ color: CP.text.secondary.hex }}>;</span>
          </div>

          <div className="leading-relaxed ml-8">
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              int
            </span>{" "}
            <span
              className="font-semibold"
              style={{ color: CP.text.primary.hex }}
            >
              age
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#123;
            </span>
            <span className="font-bold" style={{ color: CP.warning.hex }}>
              {new Date().getFullYear() - 2006}
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#125;
            </span>
            <span style={{ color: CP.text.secondary.hex }}>;</span>
          </div>

          <div className="leading-relaxed ml-8">
            <span className="font-bold" style={{ color: CP.accent.hex }}>
              string
            </span>{" "}
            <span
              className="font-semibold"
              style={{ color: CP.text.primary.hex }}
            >
              traits
            </span>
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              []
            </span>{" "}
            <span className="font-bold" style={{ color: CP.error.hex }}>
              =
            </span>{" "}
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              [
            </span>
          </div>

          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Game developer"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Fullstack Web developer"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Network &amp; Server Administrator"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          <div className="leading-relaxed ml-12">
            <span className="font-medium" style={{ color: CP.success.hex }}>
              "Pentester"
            </span>
            <span style={{ color: CP.text.secondary.hex }}>,</span>
          </div>

          <div className="leading-relaxed ml-8">
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              ];
            </span>
          </div>

          <div className="leading-relaxed">
            <span
              className="font-bold"
              style={{ color: CP.text.secondary.hex }}
            >
              &#125;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
