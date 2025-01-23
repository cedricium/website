import { RequestInit } from "next/dist/server/web/spec-extension/request";
import { cache } from "react";

export class ProgressAPI {
  private static async request(
    endpoint: string,
    opts?: RequestInit
  ): Promise<any> {
    const { LIFESTATUS_BASE_API } = process.env;
    try {
      const response = await fetch(`${LIFESTATUS_BASE_API}${endpoint}`, {
        cache: "no-cache",
        ...opts,
      });
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (error) {
      return null;
    }
  }

  static async monitorStatus(): Promise<any> {
    return this.request("/v1/monitors/status");
  }

  static async monitors(): Promise<any> {
    return this.request("/v1/monitors");
  }

  static async snapshots(): Promise<any> {
    return this.request("/v1/snapshots");
  }

  static async updates(): Promise<any> {
    return this.request("/v1/updates");
  }
}

export const getMonitorStatus = cache(async () => ProgressAPI.monitorStatus());
export const getMonitors = cache(async () => ProgressAPI.monitors());
export const getSnapshots = cache(async () => ProgressAPI.snapshots());
export const getUpdates = cache(async () => ProgressAPI.updates());
