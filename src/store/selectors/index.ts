import { RootState } from '../../helpers/types'

/* eslint-disable */
export const getSync = (state: RootState) => state.syncState
export const getAuth = (state: RootState) => state.authState
export const getFolder = (state: RootState) => state.folderState
export const getUsersManagement = (state: RootState) => state.managmentState
export const getAppointment = (state: RootState) => state.appointmentState
export const getReset = (state: RootState) => state.authState.resetPassState
export const getActive = (state: RootState) => state.authState.activeState
export const getExam = (state: RootState) => state.examState
/* eslint-enable */
