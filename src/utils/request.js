import { extend } from 'umi-request';
import { message } from 'antd';

const baseUrl = 'http://localhost:7001';

const request = extend({
  prefix: baseUrl,
  timeout: 1500,
});

export default function(url, option = {}) {
  return request(url, option)
    .then(res => {
      if (res.success) {
        res.msg && message.success(res.msg);
        return res.result;
      } else {
        message.error(res.errMsg || '请求错误。');
      }
    })
    .catch(err => {
      console.error(err);
    });
}
