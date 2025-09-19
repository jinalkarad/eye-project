import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface contactLenseState {
  settings: Setting[];
}

const initialState: contactLenseState = {
  settings: [],
};

const contactLense = createSlice({
  name: "contactLense",
  initialState,
  reducers: {
    setContactLenseSettingsData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setContactLenseSettingsData, clearSettings } =
  contactLense.actions;
export default contactLense.reducer;
