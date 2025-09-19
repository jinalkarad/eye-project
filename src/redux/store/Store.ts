import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "../slices/HomepageSlice";
import aboutUsSlice from "../slices/AboutusPageSlice";
import eyewearSlice from "../slices/EyeWearSlice";
import insuranceSlice from "../slices/InsurancePageSlice";
import digitalLabSlice from "../slices/DigitalLabsSlice";
import contactLenseSlice from "../slices/ContactLenseSlice";
import locationSlice from "../slices/LocationPageSlice";
import eyeExamSlice from "../slices/EyeexampageSlice";
import glassesSlice from "../slices/GlassesPageSlice";
import lenseSlice from "../slices/LenseSelectionPageSlice";
import aiGlassSlice from "../slices/AiGlassesPageSlice";
import commonSlice from "../slices/CommonSlice";

export const store = configureStore({
  reducer: {
    homepage: homepageSlice,
    aboutUs: aboutUsSlice,
    eyewear: eyewearSlice,
    insurance: insuranceSlice,
    digitallab: digitalLabSlice,
    contactLense: contactLenseSlice,
    location: locationSlice,
    eyeexam: eyeExamSlice,
    glasses: glassesSlice,
    lense: lenseSlice,
    aiglass: aiGlassSlice,
    commonSlice: commonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
