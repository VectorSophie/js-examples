//arr to obj
function makeObjectFromArray(arr) {
    const obj = {};
    arr.forEach(subArray => {
      const [key, ...values] = subArray;
      obj[key] = values;
    });
    return obj;
  }
//obj to arr
function makeArrayFromObject(obj) {
    const arr = [];
    for (const key in obj) {
      arr.push([key, ...obj[key]]);
    }
    return arr;
  }

  