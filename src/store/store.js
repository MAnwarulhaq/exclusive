import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartslice'
import wishlistReducer from './slice/wishslice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const cartPersistConfig = {
  key: 'cart',
  storage,
}

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)
const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlistReducer)

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
  },
})

export const persistor = persistStore(store)
