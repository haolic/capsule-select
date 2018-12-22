

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
  initialState: {
    capsuleList: [
      {
        displayName: "我是数据1",
        id: 1
      },
      {
        displayName: "我是数据2",
        id: 2
      },
      {
        displayName: "我是数据3",
        id: 3
      },
      {
        displayName: "我是数据4",
        id: 4
      },
    ]
  }
};

