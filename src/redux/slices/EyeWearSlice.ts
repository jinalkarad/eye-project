import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EyewearState {
  settings: Setting[];
}

const initialState: EyewearState = {
  settings: [],
};

const eyewearPage = createSlice({
  name: "eyewear",
  initialState,
  reducers: {
    setEyewearSettingData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setEyewearSettingData, clearSettings } = eyewearPage.actions;
export default eyewearPage.reducer;
