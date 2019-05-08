import axios from 'axios';

export default function request(option) {
  return axios(option)
    .then(res => {
      if (res.status !== 200) {
        console.error(res.statusText);
        return Promise.resolve({
          ...res,
        });
      } else {
        return Promise.resolve({
            data: res.data,
            success: true
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
}
