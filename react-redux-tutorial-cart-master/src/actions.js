export const DECREASE = 'DECREASE'
export const INCREASE = 'INCREASE'
export const RESET = 'RESET'
export const REMOVE = 'REMOVE'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_TOTALS = 'GET_TOTALS'
export const TOGGLE_CARTITEM_COUNT = 'TOGGLE_CARTITEM_COUNT'


// Action Creaters
export const removeItem = (id) => {
    return {
        type: REMOVE,
        payload: {id}
    }
}