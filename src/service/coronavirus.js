import request from '@/utils/request';

export const fetchVirusData = async () => {
  // const res = await request('https://www.easy-mock.com/mock/5e3103a2b6f7d03b38a940df/example/api/coronavirus');
  const data = (await request('/api/coronavirus')) || [];
  const newData = [];
  data.forEach((el, idx) => {
    newData.push({
      date: el.date,
      value: el.value,
      type: '感染人数',
    }); // 感染
    if (data[idx - 1] && data[idx - 1].value) {
      newData.push({
        date: el.date,
        value: el.value - data[idx - 1].value,
        type: '较昨日新增感染',
      }); // 较昨日感染
    } else {
      newData.push({
        date: el.date,
        value: null,
        type: '较昨日新增感染',
      }); // 较昨日感染
    }
    newData.push({
      date: el.date,
      value: el.died,
      type: '死亡人数',
    }); // 死亡
    newData.push({
      date: el.date,
      value: el.cure,
      type: '治愈人数',
    }); // 治愈
  });
  return newData;
};
export const insertVirusData = async params => {
  const data = await request('/api/insert_data', {
    method: 'post',
    data: params,
  });
  return data;
};
