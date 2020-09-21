import { 
  GET_ALL_CHARS, GET_SINGLE_CHAR, INIT_DATA, GET_EPISODES
} from "../../actions";

const INITIAL_STATE = {
  chars: [],
  charPageNumber: 0,
  loading: true,
  character: {},
  episodes: []
};

const dataReducer = (state = INITIAL_STATE, action) => {
  // console.log("data reducer"  , action);
  switch (action.type) {
    case GET_ALL_CHARS: {
      return {
        ...state,
        chars: state.chars.concat(action.chars).sort((a, b) => a.fame > b.fame ? -1 : 1),
        loading: false
      };
    }
    case GET_SINGLE_CHAR: {
      return {
        ...state,
        character: action,
        loading: false
      };
    }
    case GET_EPISODES: {
      return {
        ...state,
        episodes: action.episodes,
        loading: false
      };
    }
    case INIT_DATA: {
      return {
        ...state,
        chars: action.chars,
        charPageNumber: action.pageNumber
      };
    }
    default:
      return state;
  }
};

export default dataReducer