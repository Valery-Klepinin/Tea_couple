// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../../features/users/types/State';
import { AuthUser, UserPassAndEmail } from '../../features/users/types/types';
import * as api from '../../App/api';

const initialState: State = {
  authUser: undefined,
  error: undefined,
};

export const signUp = createAsyncThunk('auth/sign-up', (user: AuthUser) =>
  api.fetchSignUp(user)
);

export const checkUser = createAsyncThunk('auth/check-user', () =>
  api.fetchCheckUser()
);

export const AuthorizationUser = createAsyncThunk(
  'auth/auth',
  (user: UserPassAndEmail) => api.fetchAuth(user)
);

export const LogOut = createAsyncThunk('auth/logout', () => api.fetchLogOut());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.error = undefined;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.error = undefined;
      })
      .addCase(AuthorizationUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
      })
      .addCase(AuthorizationUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(LogOut.fulfilled, (state) => {
        state.authUser = undefined;
        state.error = undefined;
      })
      .addCase(LogOut.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { clearError } = authSlice.actions;
export default authSlice.reducer;
