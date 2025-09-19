import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InsurancePageState {
  settings: Setting[];
}

const initialState: InsurancePageState = {
  settings: [],
};

const insurancePageSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    setInsurancePageSettingData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setInsurancePageSettingData, clearSettings } =
  insurancePageSlice.actions;
export default insurancePageSlice.reducer;
