import {FETCH_CAT_SUCCESS,FETCH_CAT_START,FETCH_CAT_FAILURE} from "../actions"

const inState = {
    isLoading: false,
    cat:[],
    error:"",
};

export const reducer = (state = inState, action) => {
    switch (action.type) {
      case FETCH_CAT_SUCCESS:
          return {
              ...state,
              cat: action.payload,
              isLoading: false,
              error: ""
          };
      case FETCH_CAT_START:
          return {
            ...state,
            isLoading: true,
          };
     case FETCH_CAT_FAILURE:
         return {
            ...state,
            isLoading: false,
            error: action.payload,
         };
        default:
         return state;
    }
};