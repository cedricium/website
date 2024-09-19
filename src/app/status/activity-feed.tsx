import { source } from "@/lib/fonts";
import { timeAgo } from "@/lib/utils";

const ACTIVITY: Update[] = [
  {
    id: "c3ng6cfIui",
    monitor_id: "YT34x9WTEC",
    timestamp: 1726692583730,
    notes: 'applied to "Software Development Engineer (Adobe)"',
    monitor: "Apply to Jobs",
  },
  {
    id: "Urt1WVBwL9",
    monitor_id: "YT34x9WTEC",
    timestamp: 1726691957693,
    notes: 'applied to "Full Stack Software Engineer (Atlassian)"',
    monitor: "Apply to Jobs",
  },
  {
    id: "09wuNaA6Tm",
    monitor_id: "YT34x9WTEC",
    timestamp: 1726691931029,
    // notes: 'applied to "Full Stack Engineer (Trunk Tools)"',
    notes: "",
    monitor: "Apply to Jobs",
  },
  {
    id: "HcNmag81Vr",
    monitor_id: "6NiaWOx2gb",
    timestamp: 1726690994034,
    notes: 'solved "58. Length of Last Word (Easy)"',
    monitor: "Study / LeetCode",
  },
  {
    id: "dLGusSPu46",
    monitor_id: "8ix4nfxZR7",
    timestamp: 1726640862350,
    notes:
      'provocative read in "Increment: APIs" on designing for two types of developers: eager and discerning devs.',
    monitor: "Reading",
  },
  {
    id: "Urt3anX1L9",
    monitor_id: "RDoOqSJuer",
    timestamp: 1726638633356,
    notes:
      "fix monitor status calculation bug (b7c12a7); add Makefile to project (2bdfb97)",
    monitor: "Daily Coding",
  },
  {
    id: "FtJnUewXGa",
    monitor_id: "6NiaWOx2gb",
    timestamp: 1726631800489,
    notes: 'solved "169. Majority Element (Easy)"',
    monitor: "Study / LeetCode",
  },
  {
    id: "7UFx8IxgdX",
    monitor_id: "RDoOqSJuer",
    timestamp: 1726530556811,
    notes: "completed Snapshots feature",
    monitor: "Daily Coding",
  },
  {
    id: "HcN75y9xVr",
    monitor_id: "8ix4nfxZR7",
    timestamp: 1726489989155,
    notes: 'Increment "APIs" magazine',
    monitor: "Reading",
  },
  {
    id: "WfjtJNle0E",
    monitor_id: "RDoOqSJuer",
    timestamp: 1726467050871,
    notes: '"snapshots" API + chart PRs',
    monitor: "Daily Coding",
  },
];

type Update = {
  id: string;
  monitor_id: string;
  timestamp: number;
  notes?: string;
  monitor: string;
};

function FeedItem({ update }: { update: Update }) {
  return (
    <li className="group text-xs flex gap-4 relative font-sans">
      <div
        id="vertical-rule-container"
        className="absolute w-6 flex justify-center top-6 left-0 -bottom-6"
      >
        <div id="vertical-rule" className="w-px bg-stone-600 group-last:w-0" />
      </div>
      <div
        id="indicator-dot-container"
        className="relative flex justify-center items-center h-6 w-6 flex-none"
      >
        <div
          id="indicator-dot"
          className="h-1.5 w-1.5 rounded-full ring-1 ring-stone-400 bg-stone-600"
        />
      </div>
      <p
        id="activity"
        className="flex-auto py-0.5 mr-2 text-foreground-muted leading-5"
      >
        Update recorded for{" "}
        <span className="text-background font-medium">{update.monitor}</span>.
        <br />
        <span className={`${source.className} italic`}>{update.notes}</span>
      </p>
      <time
        dateTime={new Date(update.timestamp).toISOString()}
        className="shrink-0 py-0.5 text-foreground-muted leading-5"
      >
        {timeAgo(update.timestamp, true)}
      </time>
    </li>
  );
}

export default function ActivityFeed() {
  return (
    <details>
      <summary>Recent Activity</summary>

      <div className="py-6 px-2">
        <ul role="list" className=" pr-2 space-y-6">
          {ACTIVITY.map((update) => (
            <FeedItem key={update.id} update={update} />
          ))}
        </ul>
      </div>
    </details>
  );
}
