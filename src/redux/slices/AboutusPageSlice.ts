import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AboutState {
  settings: Setting[];
}

const initialState: AboutState = {
  settings: [],
};

const aboutUsPage = createSlice({
  name: "AboutUs",
  initialState,
  reducers: {
    setAboutUsSettingsData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setAboutUsSettingsData, clearSettings } = aboutUsPage.actions;
export default aboutUsPage.reducer;
