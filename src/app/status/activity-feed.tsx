import { source } from "@/lib/fonts";
import { timeAgo } from "@/lib/utils";

import { Update } from "./types";

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
        <span className={`${source.className} italic whitespace-pre-line`}>
          {update.notes}
        </span>
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

export default function ActivityFeed({ activity }: { activity: Update[] }) {
  return (
    <details>
      <summary>Recent Activity</summary>

      <div className="py-6 px-2">
        <ul role="list" className=" pr-2 space-y-6">
          {activity.map((update) => (
            <FeedItem key={update.id} update={update} />
          ))}
        </ul>
      </div>
    </details>
  );
}
