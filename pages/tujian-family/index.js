var faData = require("../../data/family.js");

Page({
  data: {
  },
  toGenus:function(event){
    var fId = event.currentTarget.dataset.familyId;
    var urlto="";
    if (fId == "f01"){
      urlto = '../male/male?fid=' + fId;
    }else{
      urlto = '../female/female?fid=' + fId ;
    }

    wx.navigateTo({
      url: urlto
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({familyKey:faData.familys});
  },

  onShareAppMessage: function (res) {
       
  }
})