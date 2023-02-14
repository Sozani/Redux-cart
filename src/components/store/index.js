import { configeStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
const store = configeStore({
  reducer: { ui: uiSlice.reducer },
});
export default store;
