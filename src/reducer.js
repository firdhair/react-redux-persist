const initialState = {
  username: '',
  password: ''
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'login/success':
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}