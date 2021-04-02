import axios from 'axios';
import { projectsSuccess } from '../projects/projects-actions';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from './auth-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

export const token = {
  token: '',

  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.token = `Bearer ${token}`;
  },
  get() {
    return this.token;
  },
  refresh(token) {
    this.token = token;
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    this.token = '';
  },
};

const register = user => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/auth/register', user);

    token.set(response.data.accessToken);

    dispatch(
      registerSuccess({
        accessToken: token.get(),
        refreshToken: `Bearer ${response.data.refreshToken}`,
        sid: response.data.sid,
      }),
    );
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

//if (status.code === "401") {
  //axios.post("/auth/refresh", sid)
//if(status.code="200"){
//refreshToken
//}
//logout
//}

const logIn = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', user);
    // console.log(response)
    token.set(response.data.accessToken);
    dispatch(
      loginSuccess({
        accessToken: token.get(),
        refreshToken: `Bearer ${response.data.refreshToken}`,
        sid: response.data.sid,
        email: response.data.data.email,
      }),
    );
    const responseProjects = await axios.get('/project', {
      headers: { Authorization: token.get() },
    });

    dispatch(projectsSuccess(responseProjects.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/auth/logout');
    token.unset();
    dispatch(logoutSuccess());
    window.location.reload();
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export { register, logIn, logOut };
