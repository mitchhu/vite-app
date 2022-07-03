import Axios from 'axios'
import _md5 from 'blueimp-md5'
import { isObject } from 'lodash'

export const formatRequestParams = (params: any) => {
  const { url, data = {} } = params;
  const _aid = 5;
  const _vn = 'v5.5.0.1'
  const _ts = Number(new Date());
  const _sm = 'md5';
  const isArray = Array.isArray(url);
  const _mt = isArray ? url.join(',') : url;
  const _did = createDeviceId();
  const checkData = isArray ? data : [data];
  let signature = 'yitshenghuoguan.xyz!';
  // 删除undefined业务参数
  checkData.forEach((item: any) => {
    for (let key in item) {
      if (item[key] === undefined) {
        delete item[key];
      }
    }
  });
  // 组装参数对象
  let result: any = {
    _aid,
    _vn,
    _ts,
    _sm,
    _did,
    _mt,
  };
  const formatReqData: any = {};
  if (isArray) {
    checkData.forEach((item: any, i: number) => {
      for (let key in item) {
        if (item.hasOwnProperty(key)) {
          formatReqData[i + '_' + key] = item[key];
        }
      }
    });
    result = Object.assign({}, result, formatReqData);
  } else {
    result = Object.assign({}, result, data);
  }

  // 添加验证_sig
  const signaArr = [];
  for (let key in result) {
    if (isObject(result[key]) || Array.isArray(result[key])) {
      result[key] = JSON.stringify(result[key]);
    }
    signaArr.push(key + '=' + result[key]);
  }
  const _sig = signaArr.sort().join('') + signature;
  result._sig = _md5(_sig);

  return result;
};


// 生成首位不为0的15位随机数
export function createDeviceId() {
  // 生成首位不为0的15位随机数
  const deviceId = Math.ceil(Math.random() * 9) + Math.random().toString().slice(2, 16);
  return deviceId;
}


export function request(params: any) {
  const options = formatRequestParams(params)
  return Axios.post('/apiagg', options)
}