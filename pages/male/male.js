var genData = require("../../data/male.js");
Page({
  data: {

  },
  toSpecies: function (event) {
    var gid = event.currentTarget.dataset.genId;
      wx.navigateTo({
        url: '../tujian-family/species/species?gid='+gid
      })
  },
  onLoad: function (options) {
    var fid = "male_" + options.fid;
    var gens = genData[fid];

    this.setData({ genKey: gens });
  },

  onShareAppMessage: function () {

  }
})