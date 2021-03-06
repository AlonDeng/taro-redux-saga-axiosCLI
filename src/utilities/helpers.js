import Taro from "@tarojs/taro";

export const promiseTimeout = (promise, ms) => {
  const timeout = new Promise((resolve, reject) => {
    const id = setTimeout(() => { clearTimeout(id); reject(new Error(`Timed out in ${ms}ms.`)); }, ms);
  });
  return Promise.race([promise, timeout]);
};
