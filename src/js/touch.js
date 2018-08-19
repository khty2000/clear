/* 监控各种touch事件 */
TouchWatch = function (wrapper, option) {
  // 检测是否为触控设备
  let isTouch = ('ontouchstart' in window)

  // touch 数据结构
  let TouchData = function (e) {
    this.id = e.identifier || 'mouse'

    // 开始距离和当前距离
    this.ox = this.cx = e.pageX
    this.oy = this.cy = e.pageY

    // 计算位移
    this.dx = this.dy = 0

    // 计算距离
    this.tdx = this.tdy = 0

    // 计算时间
    this.ot = this.ct = Date.now()

    // delta time
    this.dt = 0

    this.moved = false
  }

  // update data
  TouchData.prototype.update = function (e) {
    this.moved = true
    
    this.dx = e.pageX - this.cx
    this.dy = e.pageY - this.cy

    this.cx = e.pageX
    this.cy = e.pageY

    this.tdx = this.cx - this.ox
    this.tdy = this.cy - this.oy

    let now = Date.now()
    this.dt = now - this.ct
    this.ct = now
  }

  // touche data array
  let touches = []

  // current gesture
  let currentAction = ''

  // 兼容mouse和touch
  let start = isTouch ? 'touchstart' : 'mousedown'
      move  = isTouch ? 'touchmove' : 'mousemove'
      end   = isTouch ? 'touchend' : 'mouseup'

  // 设置拖拽的门限
  let dragThreshold = 20

  let getTouchIndex = function (id) {
    let i = touches.length,
        t;
    while (i--) {
        t = touches[i];
        if (t.id === id) return i;
    }

    return -1;  
  }

  // 初始化event跟踪事件
  let initEvents = function () {
    // start event
    wrapper.addEventListener(start, function(e){
      // 只记录两个手指
      // 如果已经触发，则忽略其他的动作
      if (touches.length >= 2 || currentAction) return

      // 对于start，只有一个changetouches
      e = isTouch ? e.changeTouches[0] : e
      let startData = TouchData(e)
      touches.push(startData)

      // 动作处理

    })

    // move event
    wrapper.addEventListener(move, function(e){
      if (!touches.length) return  // 兼容pc mouse start
    
      e = isTouch ? e.changeTouches : [e]
      for (updateE in e) {
        let i = getTouchIndex(e.identifier || 'mouse')
        if (i !== -1) {
          touches[i].update(e)
        } else {
          return
        }

        // 动作处理

      }
    })

    // end event
    wrapper.addEventListener(end, function(e){
      e = isTouch ? e.changeTouches : [e]
      
      for (endE in e) {
        let i = getTouchIndex(e.identifier || 'mouse')
        if (i === -1) return;

        // delete/reset afterwards.
        touches.splice(i, 1)

        // 动作处理
      }
    })
  }

  // gestures
  let gestures = {
    press: () => {

    },
    tap: () => {

    },
    drag: () => {

    }
  }
}