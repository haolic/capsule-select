import request from './../utils/request';

export const fetchVirusData = async () => {
  const res = await request('https://www.easy-mock.com/mock/5e3103a2b6f7d03b38a940df/example/api/coronavirus');
  // const res = await request('/api/coronavirus');
  const { data } = res;
  const newData = data.map((el, idx) => {
    let value = null;
    if (data[idx - 1] && data[idx - 1].value) {
      value = el.value - data[idx - 1].value
    }
    return {
      date: el.date,
      value,
      type: '较昨日增长值'
    }
  })
  return [...data, ...newData];
}