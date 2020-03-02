// 导入fetch
import fetch from '../../utils/fetch'
// 导入regeneratorRuntime，就可以让小程序支持async和await
import regeneratorRuntime from '../../utils/runtime.js'

Page({
  data: {
    id: '', // 当前商铺的id值
    info: {}, // 当前商铺的详细信息
  },
  onLoad (query) {
    this.data.id = query.id
    this.setData(this.data)
  },
  async onShow() {
    // 发送ajax请求
    let res = await fetch(`shops/${this.data.id}`)
    this.data.info = res.data
    this.setData(this.data)
  },
  // 图片的预览
  preview (e) {
    // 调用 wx.previewImage 即可
    // urls 是个数组 多张图片 可以左右滑动
    // current 默认显示第几张
    // 把 current 和 urls 中图片的 w.h 替换成 1000.1000
    let { current, urls } = e.currentTarget.dataset
    current = current.replace('w.h', '1000.1000')
    urls = urls.map(item => item.replace('w.h', '1000.1000'))
    wx.previewImage({
      urls: urls,
      current: current
    })
  }
})