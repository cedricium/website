import Link from "next/link";
import { league } from "@/lib/fonts";
import { notFound } from "next/navigation";
import SnapshotGraph from "./snapshot-graph";

function timeAgo(timestamp: number): string {
  const diff = Date.now() - timestamp;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (diff < week) {
    const days = Math.floor(diff / day);
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else {
    const weeks = Math.floor(diff / week);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
}

type MonitorsReq = {
  monitors: Monitor[];
  ranges: StatusRange[];
};

type StatusRange = {
  min: number;
  max: number;
  label: string;
  color: string;
};

type Monitor = {
  id: string;
  title: string;
  description?: string;
  created_at: number;
  last_update_at: number;
  period: number;
  frequency: number;
  status: {
    value: number;
    label: string;
    color: string;
  };
};

function MonitorItem({ monitor }: { monitor: Monitor }) {
  const lastUpdatedAt = new Date(monitor.last_update_at).toLocaleString(
    "en-US",
    { timeZone: "America/Los_Angeles" }
  );

  return (
    <li key={monitor.id} className="flex items-center gap-4 ">
      <span
        title={monitor.status.label}
        className="relative inline-flex h-2 w-2 hover:cursor-pointer"
      >
        <span
          style={{ backgroundColor: monitor.status.color }}
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
        />
        <span
          style={{ backgroundColor: monitor.status.color }}
          className={`relative inline-flex rounded-full h-2 w-2`}
        />
      </span>
      <div>
        <p className="font-medium text-stone-50">
          {monitor.title}{" "}
          {monitor.last_update_at && (
            <time
              className="font-normal text-xs text-stone-300"
              dateTime={lastUpdatedAt}
              title={lastUpdatedAt}
            >
              (updated {timeAgo(monitor.last_update_at)})
            </time>
          )}
        </p>
        <p className="text-sm">{monitor?.description}</p>
      </div>
    </li>
  );
}

export default async function Page() {
  // const { LIFESTATUS_BASE_API } = process.env;
  const LIFESTATUS_BASE_API = "http://localhost:3000";

  const responses = await Promise.all([
    fetch(`${LIFESTATUS_BASE_API}/v1/monitors`, {
      cache: "no-cache",
    }),
    fetch(`${LIFESTATUS_BASE_API}/v1/snapshots`, {
      cache: "no-cache",
    }),
  ]);

  if (!responses.every((r) => r.ok)) {
    return notFound();
  }

  const [{ monitors }, { snapshots }] = await Promise.all([
    responses[0].json(),
    responses[1].json(),
  ]);

  // const { monitors, ranges }: MonitorsReq = await response.json();

  return (
    <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
      <header className="w-full md:w-1/2">
        <div className="space-y-2 md:sticky md:top-36">
          <h2 className={`${league.className} max-w-sm text-4xl`}>Status</h2>

          <nav className="relative flex flex-row gap-2 font-semibold">
            <Link href="/">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div>
          <SnapshotGraph data={snapshots} />
        </div>

        <ul className="space-y-2">
          {monitors.map((monitor) => (
            <MonitorItem key={monitor.id} monitor={monitor} />
          ))}
        </ul>

        <hr className="my-4" />
        <h3 className={`${league.className} text-2xl`}>What is this?</h3>
        <p>
          A public accountability status page for my personal goals/tasks.{" "}
          <Link
            href="/blog/public-accountability"
            className="underline decoration-dotted"
          >
            Read the blog post
          </Link>{" "}
          for more detailed information.
        </p>
      </div>
    </section>
  );
}
