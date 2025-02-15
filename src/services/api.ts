import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../Pages/Home'

type Product = {
  id: number
  price: number
}

type OrderPayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getSelectedRestaurant: builder.query<Restaurantes, string>({
      query: (id) => 'restaurantes/'.concat(`${id}`)
    }),
    order: builder.mutation<any, OrderPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetSelectedRestaurantQuery,
  useOrderMutation
} = api
export default api
