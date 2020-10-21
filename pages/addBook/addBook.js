// pages/addBook/addBook.js
wx.cloud.init({
  env: "yqq-3g0xquwqdd5bcff3",
  traceUser: true
})
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      inputValue: '',
      context: '',
      name:''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bookName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bookContext: function (e) {
    this.setData({
      context: e.detail.value
    })
  },
  addBook: function (e) {
    var that = this;
    db.collection('book').add({
      data:{
        bookname: this.data.name,
        context: this.data.context
      },
     

        success: function (res) {
          wx.navigateBack({})
        }
    })
  },
})