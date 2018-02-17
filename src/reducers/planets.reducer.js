import {
  FETCH_PLANET_BEGIN,
  FETCH_PLANET_SUCCESS,
  FETCH_PLANET_FAILURE
} from "../actions/planets.actions";

const initialState = {
  data: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANET_BEGIN:
      return { ...state, loading: true, error: null };
      break;
    case FETCH_PLANET_SUCCESS:
      const { planet } = action.payload;
      return { ...state, data: planet, loading: false, error: null };
      break;
    case FETCH_PLANET_FAILURE:
      const error =
        "Sorry, the force is disturbed and we couldn't get the planets data";
      return { ...state, data: {}, loading: false, error };
      break;
    default:
      return state;
      break;
  }
};
