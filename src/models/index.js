export default {
  namespace: 'capsuleSelector',
  state: {
    capsuleList: [
      {
        displayName: '我是数据1数据1数据1',
        id: 1,
      },
      {
        displayName: '我是数据2 2222',
        id: 2,
      },
      {
        displayName: '我是数据3333',
        id: 3,
      },
      {
        displayName: '我是数据44444',
        id: 4,
      },
    ],
    selectedCapsule: [],
    isShowList: false,
  },
  reducers: {
    changeListShow(state, { payload }) {
      console.log(payload);
      return {
        ...state,
        isShowList: payload,
      };
    },
    itemClick(state, { payload }) {
      return {
        ...state,
        isShowList: false,
        capsuleList: state.capsuleList.filter(item => item.id !== payload.id),
        selectedCapsule: [...state.selectedCapsule, payload],
      };
    },
  },
};
