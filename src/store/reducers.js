import { combineReducers } from 'redux';
import { SET_USER } from './actions';

// const initialState = {
//   user: null,
// };

function user(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;

    default:
      return state;
  }
}

// function agradinho(state = {}, action) {
//   return {
//     user: user(state.user, action),
//   };
// }

const agradinho = combineReducers({
  user,
});

export default agradinho;
