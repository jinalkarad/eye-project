import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface glassesState {
  settings: Setting[];
}

const initialState: glassesState = {
  settings: [],
};

const glassespage = createSlice({
  name: "glasses",
  initialState,
  reducers: {
    setGlassesSettingData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setGlassesSettingData, clearSettings } = glassespage.actions;
export default glassespage.reducer;
