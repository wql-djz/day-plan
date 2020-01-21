// components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active:{
      type:Number,
      value:""
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    icon: {
      normal: 'http://api.cat-shop.penkuoer.com/uploads/20200104/1578537634565.png'
    }
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // this.setData({ active: event.detail });
      // console.log(event.detail);  
      if (event.detail == 0){
        wx.navigateTo({
          url: "/pages/schedule/index",
        })
      }else if (event.detail == 1) {
        wx.navigateTo({
          url: "/pages/add/index",
        })
      } else if (event.detail == 2) {
        wx.navigateTo({
          url: "/pages/index/index",
        })
      }
    }
  }
})