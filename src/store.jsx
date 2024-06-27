import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/CartReducer";
const rootReducer={
    cart:cartReducer,//It goes to Cart Reducer file
}
const StoreDetails=configureStore(
    {
        reducer:rootReducer,
    }
);
export default StoreDetails;