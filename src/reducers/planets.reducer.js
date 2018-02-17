import {
  FETCH_PLANET_SUCCESS,
  FETCH_PLANET_BEGIN
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
    default:
      return state;
      break;
  }
};
