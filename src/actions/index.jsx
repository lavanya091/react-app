export const addToCart=(item)=>{
    return{
        type:'ADD_TO_CART',
        payload:item,
    }
};
export const removeFromCart=(index)=>{
    return{
        type:'REMOVE_FROM_CART',
        payload: index,
    }
};
export const updateQuantity=(index,quantity)=>({
        type: 'UPDATE_QUANTITY',
        payload:{index,quantity},
    
});