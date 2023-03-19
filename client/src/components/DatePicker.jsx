import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  commitChgHandler,
  currDateChgHandler,
  currViewNameChgHandler,
  chgApptHandler,
  chgAddedApptHandler,
  chgEditedApptHandler,
  sendAppt
} from "../features/appts/apptsSlice"
import Paper from "@mui/material/Paper"
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from "@devexpress/dx-react-scheduler"
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  ViewSwitcher,
  DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui"

import { TextEditor, BasicLayout, DateEditor } from "../utils/formLayout"

const DatePicker = () => {
  // grabs state from redux slice/state
  const {
    rawData,
    currentDate,
    currentViewName,
    addedAppointment,
    appointmentChanges,
    editingAppointment
  } = useSelector((store) => store.appts)
  const dispatch = useDispatch()

  const commitChanges = ({ added, changed, deleted }) => {
    let dataCopy = [...rawData]
    if (added) {
      const startingAddedId =
        dataCopy?.length > 0 ? dataCopy[dataCopy?.length - 1].id + 1 : 0
      dataCopy = [...dataCopy, { id: startingAddedId, ...added }]
    }
    if (changed) {
      dataCopy = dataCopy?.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      )
    }
    if (deleted !== undefined) {
      dataCopy = dataCopy.filter((appointment) => appointment.id !== deleted)
    }

    dispatch(commitChgHandler(dataCopy))
    dispatch(sendAppt())
    return { dataCopy }
  }

  // validates data input
  const CommandButon = useCallback(
    (props) => {
      const { id } = props
      if (id !== "saveButton") {
        return <AppointmentForm.CommandButton {...props} />
      }

      const isDataValid = (data) => data.title
      const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      }
      let fieldValue = ""
      const notify = () =>
        toast.error(`A ${fieldValue} is Require`, toastOptions)

      const nextData = editingAppointment
        ? { ...editingAppointment, ...appointmentChanges }
        : addedAppointment
      const { title, locationField: location } = nextData

      const isValid = () => {
        if (!title || title.trim() == "") {
          fieldValue = "Title"
          return false
        }

        if (!location || location.trim() == "") {
          fieldValue = "Location"
          return false
        }
        if (title || location) {
          return true
        }
      }

      const onExecute = isValid() ? props.onExecute : notify
      return <AppointmentForm.CommandButton {...props} onExecute={onExecute} />
    },
    [addedAppointment, appointmentChanges, editingAppointment]
  )

  const currentDateChange = (currentDate) => {
    dispatch(currDateChgHandler(currentDate))
  }
  const currentViewNameChange = (currentViewName) => {
    dispatch(currViewNameChgHandler(currentViewName))
  }
  const changeAppointmentChanges = (appointmentChanges) => {
    dispatch(chgApptHandler(appointmentChanges))
  }
  const changeAddedAppointment = (addedAppointment) => {
    dispatch(chgAddedApptHandler(addedAppointment))
  }
  const changeEditingAppointment = (editingAppointment) => {
    dispatch(chgEditedApptHandler(editingAppointment))
  }

  return (
    <>
      <Paper>
        <Scheduler
          locale={"en-US"}
          data={rawData}
          height={400}
          className="mt-10"
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />
          <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={changeEditingAppointment}
          />
          <IntegratedEditing />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            name="work-week"
            displayName="Work Week"
            // excludedDays={[0, 6]}
          />
          <MonthView name="month-view" displayName="Month View" />
          <DayView
            startDayHour={10}
            endDayHour={19}
            name="day-view"
            displayName="Day View"
          />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
            dateEditorComponent={DateEditor}
            commandButtonComponent={CommandButon}
          />
          <DragDropProvider />
        </Scheduler>
        <ToastContainer />
      </Paper>
    </>
  )
}

export default DatePicker
