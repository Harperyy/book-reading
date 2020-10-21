wx.cloud.init({
  env:"yqq-3g0xquwqdd5bcff3",
  traceUser: true
})
const db = wx.cloud.database()

Page({
  data: {
      inputValue:'',
      context:''
  },
  onLoad: function (options) {

  },
    searchInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 查询搜索的接口方法
  searchBook: function (e) {
    var that = this;
    db.collection('book').where({
      bookname:this.data.inputValue
    })
    .get({
      success: function(res) {
        console.log(res.data[0].context)
        that.setData({
          context: res.data[0].context
        })
        that.onLoad()
      }
    })
  },
  addBook: function (e) {
    wx.navigateTo({
      url: "../addBook/addBook"
    })
  }
})