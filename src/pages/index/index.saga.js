import { delay, put, takeLatest, call } from 'redux-saga/effects';
import _ from 'lodash';
import { actionTypes, indexAdd, getBallInfoSuccess, getBallInfoFailure } from './index.action';

import axiosInstance from '../../utilities/fetch';

// 获取床头设置信息
export function* asyncAddSaga({ payload }) {
  console.log('index', 'saga', 'async', payload);
  try {
    const { timeout } = payload;
    yield delay(timeout)
    yield put(indexAdd());
  } catch (err) {
    // yield put(billInfoFailure(err));
  }
}

export function* getBallInfoSaga({ payload }) {
  // console.log('[DEBUGDEBUG]', 'saga', 'getBannerInfoSaga', payload);
  try {
    // console.log('[DEBUGDEBUG]', 'getSearchHotSaga', 'saga');
    
      const { data: { data } } = yield call(axiosInstance.request, { 
          method: 'get',
          url: '/homepage/dragon/ball',
        });
    //   if (error) throw new Error(`errorCode: ${errorCode}, ${errorMsg}`);

    // console.log('[DEBUGDEBUG]', 'getBannerInfoSaga',data);
    yield put(getBallInfoSuccess({ ballInfo: data }));
  } catch (err) {
    // console.log('===', 'rootScreen_socketMainConnect', 'saga', 'err', err);
    yield put(getBallInfoFailure(err));
  }
}

export default [
  takeLatest(actionTypes.ASYNC_ADD, asyncAddSaga),
  takeLatest(actionTypes.BALL_INFO_REQUEST, getBallInfoSaga),
];