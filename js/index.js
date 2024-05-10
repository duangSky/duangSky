const box = document.querySelector('#box');
const box1 = document.querySelector('.box1');
const btn = document.querySelector('#btn')
// document.addEventListener('visibilitychange', () => {
//     console.log('可见度变化了');
// })
// 节流
const throttle = (func, time) => {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      func();
      timer = null;
    }, time);
  }
}
// 获取元素样式
const getPlace = (el, k) => {
  return el.getBoundingClientRect()[k]
}
// 判断是否出现在可视区
const isVisible = el => {
  // let width = getPlace(el, 'width');
  let height = getPlace(el, 'width');
  return getPlace(el, 'top') < (window.innerHeight - height / 2) && getPlace(el, 'top') > - height / 2 && getPlace(el, 'left') < window.innerWidth && getPlace(el, 'left') > 0;
}
const handleScroll = () => {
  if (isVisible(box1)) {
    gsap.to('.box1', { x: 660 });
  } else {
    gsap.to('.box1', { x: 0 });
  }
}
btn.addEventListener('click', () => {
  gsap.to('#box', { x: 200 })
})
window.addEventListener('scroll', throttle(handleScroll, 200));