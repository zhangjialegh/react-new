export const initialState = {
  text: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const s = state.text.concat([action.payload])
      return {
        ...state,
        text: s
      }
    default:
      return state
  }
}