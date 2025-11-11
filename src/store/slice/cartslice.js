import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }
// console.log("Initial State:", initialState);

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existing = state.items.find((x) => x.id === item.id);

//       if (existing) {
//         // existing.qty += 1;
//                 existing.qty += item.qty || 1;  
  
//       } else {
//         state.items.push({ ...item,qty:1 }); 
//       }
//     }
//     ,

//     removeFromCart: (state, action) => {

//       const itemId = action.payload; 
//       const existingItem = state.items.find(i => i.id === itemId);

//       if (existingItem) {
//         if (existingItem.qty > 1) {
//           existingItem.qty -= 1;
//         }
//       }
//     },
//     deleteItem: (state, action) => {
//       const itemId = action.payload;
//       state.items = state.items.filter(i => i.id !== itemId);
//     },

//     clearCart: (state) => { state.items = [] },
//   },
// })

// export const selectCartCount = (state) =>
//   state.cart.items.reduce((total, item) => total + item.qty, 0);

// export const { addToCart, removeFromCart, updateQty, deleteItem, clearCart } = cartSlice.actions
// export default cartSlice.reducer

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const item = action.payload;
      const existing = state.items.find((x) => x.id === item.id);

      if(existing){
        // existing.qty += 1;

        existing.qty += item.qty || 1;
      }else{  
      state.items.push({ ...item,  qty:item.qty || 1 } );
      }
    },
    removeFromCart:(state,action)=>{
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);  
      if(existingItem){
        if(existingItem.qty > 1){
          existingItem.qty -= 1;
        } 
      }
    },
    deleteItem:(state,action)=>{
      const itemId = action.payload;
      state.items = state.items.filter(i => i.id !== itemId);
    }
  
    ,
    clearCart: (state) => { state.items = [] }
  }
})

export const {addToCart,clearCart,removeFromCart,deleteItem} = cartSlice.actions
export default cartSlice.reducer