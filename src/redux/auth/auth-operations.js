import axios from 'axios';
import { projectsSuccess } from '../projects/projects-actions';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,

  //   logoutRequest,
  //   logoutSuccess,
  //   logoutError,
} from './auth-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token = {
  token: '',

  set(token) {
    // console.log(token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.token = `Bearer ${token}`;
  },
  get() {
    return this.token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    this.token = '';
  },
};

const register = user => async dispatch => {
  dispatch(registerRequest());
  try {
    // await axios.post('/auth/register', user);
    const response = await axios.post('/auth/register', user);
    // console.log(response);

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

const logIn = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', user);
    token.set(response.data.accessToken);
    dispatch(
      loginSuccess({
        accessToken: token.get(),
        refreshToken: `Bearer ${response.data.refreshToken}`,
        sid: response.data.sid,
      }),
    );
    const responseProjects = await axios.get('/project', {
      headers: { Authorization: token.get() },
    });
    // console.log(response.data);

    dispatch(projectsSuccess(responseProjects.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export { register, logIn };
