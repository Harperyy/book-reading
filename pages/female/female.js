var genData = require("../../data/female.js");
Page({
  data: {

  },
  toSpecies: function (event) {
    var gid = event.currentTarget.dataset.genId;
      wx.navigateTo({
        url: '../tujian-family/sp/sp?gid='+gid
      })
  },
  onLoad: function (options) {
    var fid = "female_" + options.fid;
    var gens = genData[fid];

    this.setData({ genKey: gens });
  },

  onShareAppMessage: function () {

  }
})