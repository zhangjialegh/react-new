export const initialState = {
  text: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const s = state.text.concat([action.payload])
      console.log(s,'sdfsdf')
      return {
        text: s
      }
    default:
      return state
  }
}