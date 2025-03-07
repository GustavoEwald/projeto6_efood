import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Menu[]
  orderTabisOpen: boolean
}

const initialState: CartState = {
  items: [],
  orderTabisOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.orderTabisOpen = true
    },
    close: (state) => {
      state.orderTabisOpen = false
    },
    del: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((itemId) => itemId.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, del, clear } = cartSlice.actions
export default cartSlice.reducer
