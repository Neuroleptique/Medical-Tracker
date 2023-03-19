import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { appointments } from "../../demo-data/appointments"

const API_URL = import.meta.env.VITE_API_URL

const initialState = {
  loading: true,
  rawData: appointments,
  currentDate: new Date().toJSON().slice(0, 10),
  currentViewName: "work-week",
  addedAppointment: {},
  appointmentChanges: {},
  editingAppointment: undefined,
  register: "",
  hideRegister: ""
}

//Signup Fx
export const signupData = createAsyncThunk(
  "signup/data",
  async (signupData, thunkAPI) => {
    // const { addedAppointment } = thunkAPI.getState().appts
    // params passing user input

    console.log(signupData)

    try {
      const resp = await axios.post(`http://localhost:5000/signup`, {
        data: {
          user: signupData
        }
      })
      return resp.data
    } catch (error) {
      return error.message
    }
  }
)

// Post appts
export const sendAppt = createAsyncThunk("send/appt", async (_, thunkAPI) => {
  const { addedAppointment } = thunkAPI.getState().appts
  // params passing user input
  let config = {
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      appts: addedAppointment
    }
  }

  try {
    console.log("API URL :", API_URL)
    const resp = await axios.post(`${API_URL}api/v1/appts/create`, config)
    return resp.data
  } catch (error) {
    return error.message
  }
})

const apptsSlice = createSlice({
  name: "appts",
  initialState,
  reducers: {
    commitChgHandler: (state, { payload }) => {
      state.rawData = payload
    },
    currDateChgHandler: (state, { payload }) => {
      state.currentDate = payload
    },
    currViewNameChgHandler: (state, { payload }) => {
      state.currentViewName = payload
    },
    chgApptHandler: (state, { payload }) => {
      state.appointmentChanges = payload
    },
    chgAddedApptHandler: (state, { payload }) => {
      state.addedAppointment = payload
    },
    chgEditedApptHandler: (state, { payload }) => {
      state.editingAppointment = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupData.pending, (state) => {
        state.loading = true
      })
      .addCase(signupData.fulfilled, (state, { payload }) => {
        state.loading = false
        console.log(payload)
        state.register = payload
      })
      .addCase(signupData.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
  }
})

export const {
  commitChgHandler,
  currDateChgHandler,
  currViewNameChgHandler,
  chgApptHandler,
  chgAddedApptHandler,
  chgEditedApptHandler
} = apptsSlice.actions

export default apptsSlice.reducer
