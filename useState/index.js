// 全局生成一个储存值的数组和一个记录个数的值，通过记录值去取储存的值
let _stateArr = [];
let _index = 0;
function myUseState(initDate) {
  _stateArr[_index] = _stateArr[index] | initDate;
  let currentIndex = _index;
  function setState(newDate) {
    _stateArr[currentIndex] = newDate;
    render();
  }
  return [_stateArr[_index++], setState];
}
function render() {
  _index = 0;
}
