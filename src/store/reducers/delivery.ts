import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DeliveryData } from '../../Components/Checkout'

type DeliveryState = {
  items: DeliveryData[]
  deliveryTabisOpen: boolean
}

const initialState: DeliveryState = {
  items: [],
  deliveryTabisOpen: false
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    addDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.items.push(action.payload)
    },
    openDeliveryTab: (state) => {
      state.deliveryTabisOpen = true
    },
    closeDeliveryTab: (state) => {
      state.deliveryTabisOpen = false
    }
  }
})

export const { addDeliveryData, openDeliveryTab, closeDeliveryTab } =
  deliverySlice.actions
export default deliverySlice.reducer
