import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface digitalLabState {
  settings: Setting[];
}

const initialState: digitalLabState = {
  settings: [],
};

const digitalLab = createSlice({
  name: "digitalLab",
  initialState,
  reducers: {
    setDigitalLabSettingData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setDigitalLabSettingData, clearSettings } = digitalLab.actions;
export default digitalLab.reducer;
