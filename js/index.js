const main = document.querySelector('#main')
const f_box = document.querySelector('.first_box');
const s_box = document.querySelector('.second_box');
const t_box = document.querySelector('.third_box');
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
  if (isVisible(f_box)) {
    gsap.to('.first_box', { x: 360 });
  } else {
    gsap.to('.first_box', { x: 0 });
  }
  if (isVisible(s_box)) {
    gsap.to('.second_box', { x: 660 });
  } else {
    gsap.to('.second_box', { x: 0 });
  }
  if (isVisible(t_box)) {
    gsap.to('.third_box', { x: 660 });
  } else {
    gsap.to('.third_box', { x: 0 });
  }
}
handleScroll();
main.addEventListener('scroll', throttle(handleScroll, 200));