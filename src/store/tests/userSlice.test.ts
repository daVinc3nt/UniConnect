import { configureStore } from '@reduxjs/toolkit';
import userReducer, {
  setLoading,
  setUser,
  updateUser,
  clearUser,
  setError,
} from '../userSlice';

interface RootState {
  user: ReturnType<typeof userReducer>;
}

describe('userSlice', () => {
  let store: ReturnType<typeof configureStore<RootState>>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: userReducer,
      },
    });
  });

  it('should handle setLoading', () => {
    store.dispatch(setLoading(true));
    const state = store.getState().user;
    expect(state.isLoading).toBe(true);
  });

  it('should handle setUser', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    store.dispatch(setUser(user));
    const state = store.getState().user;

    expect(state.currentUser).toEqual(user);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should handle updateUser', () => {
    const initialUser = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    // Set initial user
    store.dispatch(setUser(initialUser));

    // Update user
    const updates = { name: 'Jane Doe' };
    store.dispatch(updateUser(updates));

    const state = store.getState().user;
    expect(state.currentUser?.name).toBe('Jane Doe');
    expect(state.currentUser?.email).toBe('john@example.com'); // Should remain unchanged
  });

  it('should handle updateUser when no current user exists', () => {
    const updates = { name: 'Jane Doe' };
    store.dispatch(updateUser(updates));

    const state = store.getState().user;
    expect(state.currentUser).toBeNull();
  });

  it('should handle clearUser', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    // Set user first
    store.dispatch(setUser(user));
    // Then clear
    store.dispatch(clearUser());

    const state = store.getState().user;
    expect(state.currentUser).toBeNull();
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should handle setError', () => {
    const errorMessage = 'Something went wrong';
    store.dispatch(setError(errorMessage));

    const state = store.getState().user;
    expect(state.error).toBe(errorMessage);
    expect(state.isLoading).toBe(false);
  });

  it('should have correct initial state', () => {
    const state = store.getState().user;
    expect(state.currentUser).toBeNull();
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });
});
