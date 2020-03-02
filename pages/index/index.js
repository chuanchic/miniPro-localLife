// 导入fetch
import fetch from '../../utils/fetch'
// 导入regeneratorRuntime，就可以让小程序支持async和await
import regeneratorRuntime from '../../utils/runtime.js'

Page({
  data: {
    imgList: [], // 轮播图数据
    categoryList: [], // 分类的列表数据
  },
  onShow () {
    // 获取轮播图数据
    this.getImgList()
    // 获取分类列表数据
    this.getCategoryList()
  },
  // 获取轮播图数据
  async getImgList () {
    let res = await fetch('slides')
    this.data.imgList = res.data
    this.setData(this.data)
  },
  // 获取分类列表数据
  async getCategoryList() {
    let res = await fetch('categories')
    this.data.categoryList = res.data
    this.setData(this.data) 
  }
})