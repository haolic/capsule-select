const reducer1 = (state, action) => {
  if (action.type === 'error') {
    console.error('error');
    return { count: 'error' };
  }
  if (action.type === 'increment') {
    return {
      count: state.count === 'error' ? 1 : state.count + 1,
    };
  }
  return {
    count: state.count === 'error' ? 1 : state.count - 1,
  };
};

export default reducer1;
