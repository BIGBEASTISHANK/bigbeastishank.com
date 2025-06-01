export default function PostsTable({
  fields,
  fieldsData,
}: {
  fields: string[];
  fieldsData: string[][];
}) {
  return (
    <div
      className="overflow-x-auto mt-4"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <table className="w-full min-w-[600px] border-separate border-spacing-0 text-[#F6F9FC] font-sans rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#1A1E23]">
            {fields.map((field, i) => (
              <th
                key={i}
                className={`${
                  i === 0
                    ? "rounded-tl-lg"
                    : i === fields.length - 1
                    ? "rounded-tr-lg"
                    : ""
                } md:w-48 w-32 border border-[#1793D1] p-3 text-left font-bold whitespace-nowrap`}
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fieldsData.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 1 ? "bg-[#0A0C0E]" : "bg-[#050607]"}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`md:w-48 w-32 border-b border-r border-[#1793D1] p-3 whitespace-nowrap ${
                    j === 0 ? "border-l" : ""
                  } ${
                    i === fieldsData.length - 1 && j === 0
                      ? "rounded-bl-lg"
                      : ""
                  } ${
                    i === fieldsData.length - 1 && j === row.length - 1
                      ? "rounded-br-lg"
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
