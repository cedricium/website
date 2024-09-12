type Progress = {
  status: {
    value: number;
    label: string;
    color: string;
  };
  ranges: {
    min: number;
    max: number;
    label: string;
    color: string;
  }[];
  timestamp: Date;
};

export default async function StatusIndicator() {
  const { LIFESTATUS_BASE_API } = process.env;
  const response = await fetch(`${LIFESTATUS_BASE_API}/v1/monitors/status`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    return null;
  }

  const progress: Progress = await response.json();
  if (!progress) return null;

  return (
    <a
      id="status"
      href="/status"
      className="inline-block space-x-1.5 px-1.5 py-0.5 border border-stone-400 rounded-md text-[10px]"
    >
      <span className="relative inline-flex h-2 w-2">
        <span
          style={{ backgroundColor: progress.status.color }}
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
        />
        <span
          style={{ backgroundColor: progress.status.color }}
          className={`relative inline-flex rounded-full h-2 w-2`}
        />
      </span>
      <span className="font-sans font-medium text-current">
        {progress.status.label}
      </span>
    </a>
  );
}
