import { GET_EPISODES } from "..";
import axios from 'axios';

export const GetEpisodes = (episodes) => {
  if(!episodes)
    return
  let requests = []

  episodes.forEach((episode) => requests.push(axios.get(episode)))

  return dispatch => {
      axios.all(requests).then(responses => {
        console.log(responses)

        dispatch({
          type: GET_EPISODES,
          episodes: responses
        });
      }).catch(error => {
        console.log(error)
      })
  };
};