export type SizeType = "large" | "medium" | "small";

// -------------- SETTING TYPES -----------------------

export interface Setting {
  id: number;
  key: string;
  value: string;
  language: string;
  publish: boolean;
  pageIndex: number;
  pageSize: number;
  totalRecord: number;
}

export interface SettingsResponse {
  status: string;
  statusCode: number;
  message: string;
  data: Setting[];
}

export interface GetSettingsParams {
  key?: string;
  language?: string;
  publish?: boolean;
  pageIndex?: number;
  pageSize?: number;
}
