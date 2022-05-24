import axios from "axios";

const loginActionAsync = (username, password) => {
  return (dispatch, getState, baseUrl) => {
    // baseUrl/users/authenticate
    axios.post(`${baseUrl}/users/authenticate`, {
      username,
      password
    }).then((response) => {
      console.log("response data: ", response.data)
      dispatch(loginActionSuccess({ username, password }));
    }).catch((error) => {

    });
  }
}

const loginActionStart = () => ({});

const loginActionSuccess = (payload) => (
  console.log("payload: ", payload),
  {
  type: 'login/success',
  payload
});

const loginActionFailed = () => {};

const fetchUserDetailAsync = () => {
  return (dispatch, getState, baseUrl) => {
    const { username, password } = getState();
    console.log(username, password);

    axios.get(`${baseUrl}/users/`, {
      auth: {
        username,
        password
      },
      headers: {
        // Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {})
  }
}

export {
  loginActionAsync,
  loginActionFailed,
  loginActionStart,
  loginActionSuccess,
  fetchUserDetailAsync
}