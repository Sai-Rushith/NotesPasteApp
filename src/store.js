import { configureStore } from '@reduxjs/toolkit'
import PasteReducer from '../src/redux/PasteSlice'

export default configureStore({
  reducer: {
    paste: PasteReducer
  }
})