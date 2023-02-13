import axios from 'axios'

export const login = (user) => async (dispatch) => {
    try {
      const {data} = await axios.post('http://localhost:4000/user/login', user)
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message });
    }
};


export const SignupUser = (user) => async (dispatch) => {
    try {
      const {data} = await axios.post('http://localhost:4000/user/register', user)
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data });
      document.location.href = '/';
    } catch (error) {
    }
};

export const SignoutUser = (user) => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({type: 'USER_SIGNOUT_SUCCESS', payload: {} })
  document.location.href = '/';
};

export const getAllUser = () => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await  axios.get('http://localhost:4000/user')
    dispatch({type: 'GET_ALL_USER', payload: data})
  } catch (error) {
    dispatch({type: 'GET_ALL_USER_FAIL', payload: error.message})
  }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await axios.delete(`http://localhost:4000/user/delete/${userId}`)
    dispatch({type: 'DELETE_USER', payload: data})
  } catch (error) {
    dispatch({type: 'DELETE_USER_FAIL', error: error.message})
  }
}
export const getuserById = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/user/detailUser/${userId}`
    );

    dispatch({ type: "GET_USER_BY_ID", payload: data });
  } catch (error) {
    dispatch({ type: "GET_USER_BY_ID_FAIL", payload: error.message });
  }
};

export const removeUserById = (userId) => async (dispatch) => {
  dispatch({ type: "REMOVE_USER_BY_ID"});
};


export const saveUser = (user) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
   if (user.get('_id')) {
      // alert("vao user--");
      const { data } = await axios.put(
        `http://localhost:4000/user/Updateuser`,
        user,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "SAVE_USER", payload: data });
   }
  } catch (error) {
    dispatch({ type: "SAVE_USER_FAIL", payload: error.message });
  }
};