import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ElapsedLabelOpts = {
  unit: string;
  count: number;
};

const UNIT_MINUTE = 60 * 1000;
const UNIT_HOUR = 60 * UNIT_MINUTE;
const UNIT_DAY = 24 * UNIT_HOUR;
const UNIT_WEEK = 7 * UNIT_DAY;

export function timeAgo(timestamp: number, short?: boolean): string {
  const diff = Date.now() - timestamp;

  let opts: Partial<ElapsedLabelOpts> = {};

  if (diff < UNIT_HOUR) {
    opts = { unit: "minute", count: Math.floor(diff / UNIT_MINUTE) };
  } else if (diff < UNIT_DAY) {
    opts = { unit: "hour", count: Math.floor(diff / UNIT_HOUR) };
  } else if (diff < UNIT_WEEK) {
    opts = { unit: "day", count: Math.floor(diff / UNIT_DAY) };
  } else {
    opts = { unit: "week", count: Math.floor(diff / UNIT_WEEK) };
  }

  if (short) {
    return `${opts.count}${opts.unit?.[0]} ago`;
  }
  return opts.count === 1
    ? `1 ${opts.unit} ago`
    : `${opts.count} ${opts.unit}s ago`;
}
