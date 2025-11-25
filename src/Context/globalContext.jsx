import { createContext, useEffect, useReducer } from "react";

export const globalContext = createContext()

const initialState = () => {
    return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : {
            cart: [],
            totalPrice: 0,
            totalAmount: 0,
        }
}

const changeState = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...payload, amount: 1 }]
            }

        case "DELETE":
            return {
                ...state,
                cart: state.cart.filter(i => i.id !== payload)
            }

        case "INCREACE":
            return {
                ...state,
                cart: state.cart.map(i =>
                    i.id === payload ? { ...i, amount: i.amount + 1 } : i
                )
            }

        case "DECREACE":
            return {
                ...state,
                cart: state.cart
                    .map(i => i.id === payload ? { ...i, amount: i.amount - 1 } : i)
                    .filter(i => i.amount > 0)
            }

        case "TOTAL_PRODUCT":
            const { totalPrice, totalAmount } = state.cart.reduce(
                (acc, curVal) => {
                    acc.totalPrice += curVal.price * curVal.amount;
                    acc.totalAmount += curVal.amount;
                    return acc;
                },
                { totalPrice: 0, totalAmount: 0 }
            );
            return { ...state, totalAmount, totalPrice };

        case "CLEAR_CARTS":
            return {
                cart: [],
                totalPrice: 0,
                totalAmount: 0,
            }


        default:
            return state;
    }
}

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(changeState, {}, initialState);

    useEffect(() => {
        dispatch({ type: "TOTAL_PRODUCT" });
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state.cart]);

    return (
        <globalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </globalContext.Provider>
    )
}
