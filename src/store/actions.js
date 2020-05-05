export const SET_USER = 'SET_USER';

export function setUser(user) {
  return { type: SET_USER, user };
}

export default {
  types: {
    SET_USER,
  },

  actionCreators: {
    setUser,
  },
};
