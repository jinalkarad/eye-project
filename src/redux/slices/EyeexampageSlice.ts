import { Setting } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface eyeexamState {
  settings: Setting[];
}

const initialState: eyeexamState = {
  settings: [],
};

const eyeExamSlice = createSlice({
  name: "eyeExam",
  initialState,
  reducers: {
    setEyeExamContactLenseData: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
    clearSettings: (state) => {
      state.settings = [];
    },
  },
});

export const { setEyeExamContactLenseData, clearSettings } =
  eyeExamSlice.actions;
export default eyeExamSlice.reducer;
