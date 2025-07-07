import React from "react";

type Log = {
  uid: string;
  name: string;
  action: string;
  created_at: string;
};

type Props = {
  logs: Log[];
};

function extractFormattedDate(datetimeStr: string): string {
  const match = datetimeStr.match(/datetime\.datetime\((\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return "Invalid date";

  const [, year, month, day, hour, minute] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}, ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
}

function extractActionDetails(action: string) {
  let summary = action;
  const details: Record<string, string> = {};

  try {
    const splitIndex = action.indexOf(": {");
    if (splitIndex === -1) return { summary: action.trim(), details };

    summary = action.slice(0, splitIndex).trim();
    let rawDetails = action.slice(splitIndex + 2).trim(); // setelah ": "

    // Ubah Python-like ke JSON-compatible
    rawDetails = rawDetails
      .replace(/'/g, '"') // kutip satu -> kutip dua
      .replace(/UUID\(["']?(.*?)["']?\)/g, '"$1"') // UUID -> string
      .replace(/\bNone\b/g, "null") // None -> null
      .replace(/\bTrue\b/g, "true") // True -> true
      .replace(/\bFalse\b/g, "false") // False -> false
      .replace(/datetime\.datetime\([^)]+\)/g, '"2025-00-00T00:00:00Z"'); // datetime dummy string

    // Tambahkan kurung kurawal jika belum ada
    if (!rawDetails.startsWith("{")) rawDetails = "{" + rawDetails;
    if (!rawDetails.endsWith("}")) rawDetails += "}";

    const parsed = JSON.parse(rawDetails);

    for (const key in parsed) {
      if (typeof parsed[key] !== "object") {
        details[key] = String(parsed[key]);
      }
    }

  } catch (error) {
    console.error("Gagal parsing action:", action, error);
  }

  return { summary, details };
}

function formatDateTime(isoString: string): string {
  const date = new Date(isoString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}, ${hh}:${min}`;
}


const LogList = ({ logs }: Props) => {
  if (!Array.isArray(logs) || logs.length === 0) {
    return <p className="text-sm text-gray-500">No activity logs available.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Activity Logs</h2>
      <ul className="space-y-6">
        {logs.map((log) => {
          const { summary, details } = extractActionDetails(log.action);
          const time = formatDateTime(log.created_at)

          return (
            <li key={log.uid}>
              <p className="font-semibold text-sm text-gray-700 mb-1">
                {log.name} {time}
              </p>
              <p className="text-gray-800 text-sm mb-1">{summary}</p>
              {Object.keys(details).length > 0 && (
                <ul className="text-sm text-gray-600 pl-4 list-disc">
                  {Object.entries(details).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium">{key}</span>: {value}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LogList;
