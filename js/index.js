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
// 获取元素样式 原生方法
const getPlace = (el, k) => {
  return el.getBoundingClientRect()[k]
}
// 判断是否出现在可视区
const isVisible = el => {
  // let width = getPlace(el, 'width');
  let gapTop = el.offset().top - $(window).scrollTop();
  let gapLeft = el.offset().left - $(window).scrollLeft();
  let height = el.height();
  return gapTop < (window.innerHeight - height / 2) && gapTop > - height / 2 && gapLeft < window.innerWidth && gapLeft > 0;
}
let arr = [
  // { el: $('.first_box'), cl: '.first_box', x: 360 },
  { el: $('.second_box'), cl: '.second_box', x: 660 },
  { el: $('.third_box'), cl: '.third_box', x: 880 },
]
const handleScroll = () => {
  arr.forEach(val => {
    if(isVisible(val.el)) {
      gsap.to(val.cl, { x: val.x })
    } else {
      gsap.to(val.el, { x: 0 })
    }
  })
  if(isVisible($('.first_box'))) {
    let t = 0;
    for(let k of $('.first_box').siblings()) {
      // let t1 = 0;
      setTimeout(() => {
        for(let key of k.getElementsByClassName('animated')) {
          key.style.display = 'block';
          key.classList.add('rollIn');
        }
      }, t);
      t+=600;
    }
  } else {
    for(let k of $('.first_box').siblings()) {
      for(let key of k.getElementsByClassName('animated')) {
        key.style.display = 'none';
        key.classList.remove('rollIn');
      }
    }
  }
}
handleScroll();
$('#main').on('scroll', throttle(handleScroll, 200))
