import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface commonState {
  defaultLanguage: string;
}

const initialState: commonState = {
  defaultLanguage: "Spanish",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setDefaultLanguage: (state, action: PayloadAction<string>) => {
      state.defaultLanguage = action.payload;
    },
  },
});

export const { setDefaultLanguage } = commonSlice.actions;
export default commonSlice.reducer;
