import { actionTypes } from './index.action';

export const exampleInitialState = {
  num: 0,
  ballInfo: [],
};

function reducer(state = exampleInitialState, { type: actionType, payload }) {
  switch (actionType) {
    case actionTypes.ADD:
      return { ...state, num: state.num + 1 };
    case actionTypes.MINUS:
      return { ...state, num: state.num - 1 };


    case actionTypes.BALL_INFO_REQUEST:
      return { ...state, ...{ isRequesting: true } };
    case actionTypes.BALL_INFO_SUCCESS:
      return { ...state, ...{ isRequesting: false, ballInfo: payload.ballInfo } };
    case actionTypes.BALL_INFO_FAILURE:
      return { ...state, ...{ isRequesting: false } };
  
    default:
      return state;
  }
}

export default reducer;