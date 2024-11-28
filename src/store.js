import { configureStore } from '@reduxjs/toolkit'

import { portfolioReducer } from './hooks/postsSlise'

export default configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
})
