import { notFound } from "next/navigation";
// import Link from "next/link";

// import { league } from "@/lib/fonts";
// import { timeAgo } from "@/lib/utils";
// import SnapshotGraph from "./snapshot-graph";
// import ActivityFeed from "./activity-feed";

// import { Monitor, MonitorsReq, SnapshotChartReq, ActivityReq } from "./types";
// import { ProgressAPI } from "@/lib/dal";

// function MonitorItem({ monitor }: { monitor: Monitor }) {
//   const lastUpdatedAt = new Date(monitor.last_update_at).toLocaleString(
//     "en-US",
//     { timeZone: "America/Los_Angeles" }
//   );

//   return (
//     <li key={monitor.id} className="flex items-center gap-4 ">
//       <span
//         title={monitor.status.label}
//         className="relative inline-flex h-2 w-2 hover:cursor-pointer"
//       >
//         <span
//           style={{ backgroundColor: monitor.status.color }}
//           className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
//         />
//         <span
//           style={{ backgroundColor: monitor.status.color }}
//           className={`relative inline-flex rounded-full h-2 w-2`}
//         />
//       </span>
//       <div>
//         <p className="font-medium text-stone-50">
//           {monitor.title}{" "}
//           {monitor.last_update_at && (
//             <time
//               className="font-normal text-xs text-stone-300"
//               dateTime={lastUpdatedAt}
//               title={lastUpdatedAt}
//             >
//               (updated {timeAgo(monitor.last_update_at)})
//             </time>
//           )}
//         </p>
//         <p className="text-sm">{monitor?.description}</p>
//       </div>
//     </li>
//   );
// }

export default async function Page() {
  return notFound();

  // let responses = [];
  // try {
  //   responses = await Promise.all([
  //     ProgressAPI.monitors(),
  //     ProgressAPI.snapshots(),
  //     ProgressAPI.updates(),
  //   ]);

  //   if (!responses.every((r) => r !== null)) {
  //     return notFound();
  //   }
  // } catch (error) {
  //   return notFound();
  // }

  // const [{ monitors }, { data }, { activity }]: [
  //   MonitorsReq,
  //   SnapshotChartReq,
  //   ActivityReq
  // ] = responses;

  // return (
  //   <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
  //     <header className="w-full md:w-1/2">
  //       <div className="space-y-2 md:sticky md:top-36">
  //         <h2 className={`${league.className} max-w-sm text-4xl`}>Status</h2>

  //         <nav className="relative flex flex-row gap-2 font-semibold">
  //           <Link href="/">About</Link>
  //           <Link href="/work">Work</Link>
  //           <Link href="/projects">Projects</Link>
  //           <Link href="/blog">Blog</Link>
  //         </nav>
  //       </div>
  //     </header>

  //     <div className="flex flex-col gap-4 w-full md:w-1/2">
  //       <SnapshotGraph data={data} />
  //       <ul role="list" className="space-y-2">
  //         {monitors.map((monitor) => (
  //           <MonitorItem key={monitor.id} monitor={monitor} />
  //         ))}
  //       </ul>
  //       <ActivityFeed activity={activity} />

  //       <hr className="my-4" />

  //       <h3 className={`${league.className} text-2xl`}>What is this?</h3>
  //       <p>
  //         A public accountability status page for my personal goals/tasks.{" "}
  //         <Link
  //           href="/blog/public-accountability"
  //           className="underline decoration-dotted"
  //         >
  //           Read the blog post
  //         </Link>{" "}
  //         for more detailed information.
  //       </p>
  //     </div>
  //   </section>
  // );
}
