import { configureStore } from '@reduxjs/toolkit' 
import sectionsReducer from './slices/sectionsSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    sections: sectionsReducer
  }
})