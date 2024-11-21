const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
function getValueExceptInitial(k) {
  const { [k]: val } = user;  // (가) user 객체에서 키 k에 해당하는 값을 비구조화 할당으로 가져옴
  const [, ...rest] = [...val];  // (나) val을 배열로 변환한 후, 첫 번째 문자와 나머지를 분리함
  return rest.join('');  // (다) 나머지 문자들을 문자열로 결합하여 반환
}
