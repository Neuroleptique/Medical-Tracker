import { configureStore } from "@reduxjs/toolkit"

import apptsSlice from "./src/features/appts/apptsSlice"

export const store = configureStore({
  reducer: {
    appts: apptsSlice
  }
})
