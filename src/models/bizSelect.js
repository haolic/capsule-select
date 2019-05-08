import api from './../service/api';

export default {
  namespace: 'bizSelect',
  state: {
    bizSelectorData: [],
  },
  effects: {
    *fetchData(_, { call, put }) {
      const res = yield call(api.fetchData);
      yield put({
        type: 'setSelectorData',
        payload: res.data,
      });
    },
  },
  reducers: {
    setSelectorData(state, { payload }) {
      return {
        ...state,
        bizSelectorData: payload,
      };
    },
  },
};
