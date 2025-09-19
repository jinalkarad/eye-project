import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationpageState {
  settings: Setting[];
}

const initialState: LocationpageState = {
  settings: [],
};

const locationpageSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationpageSettingData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setLocationpageSettingData, clearSettings } =
  locationpageSlice.actions;
export default locationpageSlice.reducer;
