// el  运动元素
// step  步长 (传入正数)
// target  目标位置

function linearMove(el, step, target) {
  if (el.timer) {
    clearInterval(el.timer);
  }
  if (target == el.offsetLeft) {
    return;
  }

  if (target < el.offsetLeft) {
    step = -1 * step;
  }

  el.timer = setInterval(function () {
    // 移动
    el.style.left = el.offsetLeft + step + "px";

    // 终止条件
    if (Math.abs(target - el.offsetLeft) < Math.abs(step)) {
      el.style.left = target + "px";
      clearInterval(el.timer);
      el.timer = null;
    }
  }, 16.7);
}

// el 运动元素
// target 目标位置
// 缓动:  新位置== 当前位置+ (target-leader)/10
function swingMove(el, target) {
  if (el.timer) {
    clearInterval(el.timer);
  }
  if (target == el.offsetLeft) {
    return;
  }

  el.timer = setInterval(function () {
    // 计算步长
    var remain = target - el.offsetLeft;
    var step = remain / 10;
    console.log(remain, step, el.offsetLeft);
    // 当剩余距离不满 10px 时   修正步长 为 1px
    if (Math.abs(remain) < 10) {
      step = step > 0 ? 1 : Math.floor(step);
      console.log(step);
    }
    // 移动
    // el.style.left = el.offsetLeft + step + "px";
    el.style.left = el.offsetLeft + step + "px";
    console.log(el.offsetLeft);
    // 终止条件
    if (el.offsetLeft == target) {
      clearInterval(el.timer);
      el.timer = null;
    }
  }, 16.7);
}
