import { RootState } from '../../helpers/types'

/* eslint-disable */
export const getSync = (state: RootState) => state.syncState
export const getAuth = (state: RootState) => state.authState
export const getManagement = (state: RootState) => state.managmentState
export const getFolder = (state: RootState) => state.folderState
/* eslint-enable */
