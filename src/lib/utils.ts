import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(timestamp: number, shortForm?: boolean): string {
  const diff = Date.now() - timestamp;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return minutes === 1
      ? shortForm
        ? "1m ago"
        : "1 minute ago"
      : shortForm
      ? `${minutes}m ago`
      : `${minutes} minutes ago`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return hours === 1
      ? shortForm
        ? "1h ago"
        : "1 hour ago"
      : shortForm
      ? `${hours}h ago`
      : `${hours} hours ago`;
  } else if (diff < week) {
    const days = Math.floor(diff / day);
    return days === 1
      ? shortForm
        ? "1d ago"
        : "1 day ago"
      : shortForm
      ? `${days}d ago`
      : `${days} days ago`;
  } else {
    const weeks = Math.floor(diff / week);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
}
