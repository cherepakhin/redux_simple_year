// имитация базы данных
const initialState = {
    user: "started user",
    year: 2015
}
//  сам редусер 
export default function userInfoReducer(state = initialState,  action) {
    switch (action.type) {
        case "SET_YEAR":
          // тут запрашивать backend и менять state.
          // в данном случае state.year: получает новое значение
          return {...state, year: "_" + action.payload +"_"}
        default:
          return state
    }
}