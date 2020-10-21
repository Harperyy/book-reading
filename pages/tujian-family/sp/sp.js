var speData = require("../../../data/female.js");
Page({
  data: {
  },
  onLoad: function (options) {
    var gid = options.gid;
    var spes = speData["female_f02"];
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