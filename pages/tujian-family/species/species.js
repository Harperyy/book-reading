var speData = require("../../../data/male.js");
Page({
  data: {
  },
  onLoad: function (options) {
    var gid = options.gid;
    var spes = speData["male_f01"];
    var spedetail;
    spes.forEach(function (e) {
      if (e.genId==gid){
        spedetail=e;
      }
    });
    console.log(spedetail);
    this.setData(spedetail);
  },


  onShareAppMessage: function () {

  }
})