import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AiGlassState {
  settings: Setting[];
}

const initialState: AiGlassState = {
  settings: [],
};

const aiGlassesSlice = createSlice({
  name: "aiGlass",
  initialState,
  reducers: {
    setAiGlassesPageSettingData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setAiGlassesPageSettingData, clearSettings } =
  aiGlassesSlice.actions;
export default aiGlassesSlice.reducer;
