const namespace = 'INDEX';

export const actionTypes = {
  ADD: `${namespace}_ADD`,
  MINUS: `${namespace}_MINUS`,
  ASYNC_ADD: `${namespace}_ASYNC_ADD`,

  BALL_INFO_REQUEST: `BALL_INFO_${namespace}_REQUEST`,
  BALL_INFO_SUCCESS: `BALL_INFO_${namespace}_SUCCESS`,
  BALL_INFO_FAILURE: `BALL_INFO_${namespace}_FAILURE`,

};

// 连接socket_main
export function indexAdd(payload) {  return { type: actionTypes.ADD, payload }; }
export function indexMinus(payload) { return { type: actionTypes.MINUS, payload }; }
export function asyncAdd(payload) { console.log('INDEX', 'action', 'async', payload); return { type: actionTypes.ASYNC_ADD, payload }; }
// get ball info
export function getBallInfoRequest(payload) {  return { type: actionTypes.BALL_INFO_REQUEST, payload }; }
export function getBallInfoSuccess(payload) { console.log('SEARCH', 'action', 'getBallInfoSuccess', payload); return { type: actionTypes.BALL_INFO_SUCCESS, payload }; }
export function getBallInfoFailure(payload) {  return { type: actionTypes.BALL_INFO_FAILURE, payload }; }
