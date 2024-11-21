assert.deepStrictEqual(
    dataObj,
    { A: [10, 20], B: [30, 40], C: [50, 60, 70] },
    'dataObj is Not Equals!!'
  );
  
  assert.deepStrictEqual(
    makeObjectFromArray([['A', 10, 20], ['B'], [1, 2, 3]]),
    { A: [10, 20], B: [], 1: [2, 3] },
    'dataObj is Not Equals!!'
  );
  
  function makeArrayFromObject(obj) {
    const results = [];
    for (const [key, val] of Object.entries(obj)) {
      // console.log('🚀  key:', key, val);
      results.push([key, ...val]);
    }
    return results;
  }
  const dataArr = makeArrayFromObject(dataObj);
  // console.log('🚀  dataArr:', dataArr);
  assert.deepStrictEqual(dataArr, data);
  