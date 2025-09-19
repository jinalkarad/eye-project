import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface lenseSelectionState {
  settings: Setting[];
}

const initialState: lenseSelectionState = {
  settings: [],
};

const lenseSelectionSlice = createSlice({
  name: "lenseselection",
  initialState,
  reducers: {
    setLenseSelectionSettingData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setLenseSelectionSettingData, clearSettings } =
  lenseSelectionSlice.actions;
export default lenseSelectionSlice.reducer;
