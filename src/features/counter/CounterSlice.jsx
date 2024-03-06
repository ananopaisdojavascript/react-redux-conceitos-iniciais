import { createSlice } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
  value: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Recebem as modificações solicitadas pelas ações ("actions")
  reducers: {
    // Ação para aumentar o valor inicial
    increment: (state) => {
      state.value += 1
    },

    // Ação para diminuir o valor alterado
    decrement: (state) => {
      state.value -= 1
    },

    // Ação para zerar o valor
    reset: (state) => {
      state.value = 0
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer