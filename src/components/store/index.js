import { configeStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
configeStore({
  reducer: { ui: uiSlice.reducer },
});
