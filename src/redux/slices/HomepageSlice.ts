import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomepageState {
  settings: Setting[];
  mediaSetting: Setting[];
}

const initialState: HomepageState = {
  settings: [],
  mediaSetting: [],
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    setMediaSettings: (state, action: PayloadAction<Setting[]>) => {
      state.mediaSetting = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
      state.mediaSetting = [];
    },
  },
});

export const { setSettings, setMediaSettings, clearSettings } =
  homepageSlice.actions;
export default homepageSlice.reducer;
