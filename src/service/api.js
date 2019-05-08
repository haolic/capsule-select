import request from './../utils/request';

export default {
  fetchData() {
    return request('/api/bizSelectData');
  },
};
