export default {
  namespace: 'capsuleSelector',
  state: {
    capsuleList: [
      {
        displayName: '我是数据1数据1数据1',
        id: '1',
        children: [{
          name:"数1中数据",
          id: '11'
        },{
          name:"数2中数据",
          id: '12'
        },{
          name:"数3中数据",
          id: '13'
        },{
          name:"数4中数据",
          id: '14'
        },{
          name:"数5中数据",
          id: '15'
        }]
      },
      {
        displayName: '我是数据2 2222',
        id: '2',
        children: [{
          name:"数wer据",
          id: '11'
        },{
          name:"asdfasdf据",
          id: '12'
        },{
          name:"666666",
          id: '13'
        },{
          name:"23423423据",
          id: '14'
        },{
          name:"数5中数据",
          id: '15'
        }]
      },
      {
        displayName: '我是数据3333',
        id: '3',
        children: []
      },
      {
        displayName: '我是数据44444',
        id: '4',
        children: []
      },
    ],
    selectedCapsule: [],
  },
  reducers: {
    itemClick(state, { payload }) {
      return {
        ...state,
        capsuleList: state.capsuleList.filter(item => item.id !== payload.id),
        selectedCapsule: [...state.selectedCapsule, payload],
      };
    },
    deleteClick(state, { payload }) {
      return {
        ...state,
        capsuleList: [payload, ...state.capsuleList],
        selectedCapsule: state.selectedCapsule.filter(item => item.id !== payload.id),
      };
    },
  },
};
