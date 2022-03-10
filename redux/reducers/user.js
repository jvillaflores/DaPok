import {
    USER_STATE_CHANGE,
    USER_ALL_STATE_CHANGE,
    USER_WORDS_STATE_CHANGE,

} from '../constants';

const initialState = {
    currentUser: [],
    words: [],
}

export const user = ( state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
          return {
            ...state,
            currentUser: action.currentUser,
          };
        case USER_ALL_STATE_CHANGE:
          return {
            ...state,
            usersAll: action.usersAll,
          };
        case USER_WORDS_STATE_CHANGE:
            return {
              ...state,
              words: action.words,
        };
        
    
        default:
          return state;
      }
}