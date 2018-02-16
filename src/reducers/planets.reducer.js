import { FETCH_PLANET_SUCCESS } from "../actions/planets.actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLANET_SUCCESS:
      const { planet } = action.payload;
      return planet;
      break;
    default:
      return state;
      break;
  }
};
