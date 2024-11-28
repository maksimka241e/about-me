import { createSlice } from "@reduxjs/toolkit"

export const PortfolioReducer = createSlice({
    name: "Portfolio",
    initialState: {
        color: 'blue',
        backgroundColor: 'Dark'
    },
    reducers: {
        ChangeColors(state,action){
            state.color = action.payload
        },
        ChangeBackgroundColors(state,action){
            state.backgroundColor = action.payload
        }
    },
})
// rgb(120 171 168) green
// rgb(255 145 251) pink
// rgb(253 187 46) yellow
// rgb(82 113 255) blue 
// rgb(0 255 255) emerald
// rgb(84 182 137) dark green
export const {ChangeColors, ChangeBackgroundColors} =  PortfolioReducer.actions
export const colors = (state) => state.color
export const backgroundColors = (state) => state.backgroundColor