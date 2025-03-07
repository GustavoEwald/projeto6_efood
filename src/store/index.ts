import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './reducers/cart'
import deliveryReducer from './reducers/delivery'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
