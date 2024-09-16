export type MonitorsReq = {
  monitors: Monitor[];
  ranges: StatusRange[];
};

export type SnapshotChartReq = {
  data: SnapshotChartData[];
};

export type SnapshotChartData = {
  date: string;
  avg?: number;
  fill?: string;
};

export type StatusRange = {
  min: number;
  max: number;
  label: string;
  color: string;
};

export type Monitor = {
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
