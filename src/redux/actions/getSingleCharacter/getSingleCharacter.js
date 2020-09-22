import { GET_SINGLE_CHAR } from "../";
import axios from 'axios';
import { GetEpisodes } from "../getEpisodes";


export const GetSingleCharacter = (id) => {
  // console.log('id:', id)

  return dispatch => {
    axios.get(`https://rickandmortyapi.com/api/character/` + id)
    .then(res => {


        dispatch({
            type: GET_SINGLE_CHAR,
            character: res.data
        });
        if (res.data.episode) {
  
          dispatch(GetEpisodes(res.data.episode))
        }
    }).catch(err => {
      console.log(err)
    })
    return true
  };
};