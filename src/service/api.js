import request from './../utils/request';

export default {
  fetchData() {
    const re = request('/api/bizSelectData');
    return re;
  },
};
