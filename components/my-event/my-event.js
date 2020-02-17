// components/my-event.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    // 要放在methods下
    clickFunc(){
      //第一个参数：要传递给page的事件名字
      //第二个参数：是要传递的数据
      //第3个参数是 options,默认传递{}
      this.triggerEvent("increment", {},{})
    }
  }
})
