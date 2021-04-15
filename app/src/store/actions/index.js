import axios from 'axios';
export  const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS"
export  const FETCH_CAT_START = "FETCH_CAT_START"
export  const FETCH_CAT_FAILURE = "FETCH_CAT_FAILURE"

export const fetchData = () => {
    return (dispatch) => {
       dispatch({type:FETCH_CAT_START});

       axios
       .get('https://api.thecatapi.com/v1/images/search?api_key=87083daf-901a-4937-a3ce-49981e687f7e') 
       .then((res) => {
         dispatch({type:FETCH_CAT_SUCCESS, payload:res.data[0]});
       })
       .catch((err) => {
           console.log(err.message);
           dispatch({ type: FETCH_CAT_FAILURE, payload: err.message});
       });
    };
};