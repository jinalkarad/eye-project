import api from "@/lib/axios";
import endpoints from "@/config/endpoints";
import { GetSettingsParams, SettingsResponse } from "@/types/types";

export const getAllSettings = async (
  params: GetSettingsParams
): Promise<SettingsResponse> => {
  // eslint-disable-next-line
  const query = new URLSearchParams(params as any).toString();
  const url = `${endpoints.settings.getAll}?${query}`;

  const response = await api.post(url);
  return response.data;
};
