import { 
  TOGGLE_OVERLAY,
  GET_EPISODES
} from "../../actions";

const INITIAL_STATE = {
  overlayCard: false,
  loading : true,
  char: {},
};

const UIReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY: {
      return {
        ...state,
        overlayCard: action.overlayCard,
        loading: action.loading,
        char: action.char
      };
    }
    default:
      return state;
  }
};

export default UIReducer