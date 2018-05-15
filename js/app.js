
let catNames =[];
// define an object within an array that contain all data (name, url and nr of clicks)
let model = {
  catObject:[
  { name:"TOM",
    file:"img/cat1.jpg",
    clicks:0},
  { name:"CHORUS",
    file:"img/cat2.jpg",
    clicks:0},
  { name:"SILVESTER",
    file:"img/cat3.jpg",
    clicks:0},
  { name:"LEO",
    file:"img/cat4.jpg",
    clicks:0},
  { name:"HAIR",
    file:"img/cat5.jpg",
    clicks:0},
  { name:"THOMAS",
    file:"img/cat6.jpg",
    clicks:0},
  { name:"FELIX",
    file:"img/cat7.jpg",
    clicks:0},
  { name:"HAIR",
    file:"img/cat8.jpg",
    clicks:0}
  ]
};
let octopus = {
  init:function(){
    //call view.init() to display list of catList
    view.init();
    var clickedCat;//an object with all properties from model
    octopus.getClickedCatData(clickedCat);
    octopus.adminArea();
  },
  getCatsNames:function(catNames){
    model.catObject.forEach(function(elem,index,value){
      catNames.push(model.catObject[index].name);
    })
  },
  //define all properties for clickedCat
  getClickedCatData: function(){
    $('.catList').click(function(e){
      clickedCat = model.catObject[$(e.target).index()];
      view.renderClickedCatInfo(clickedCat);
    })
  },
  updateClickCounter:function(){
    $('.catImage').click(function(){
      clickedCat.clicks++;
      view.updateClick(clickedCat);
    })
  },
  // section for admin area
  adminArea:function (){
    $('.admin-button').click(function(){
      $('.admin').removeClass('hidden');// hidden by default
      // get cat image values;
      $('.name').val($('.catNames').text());
      $('.url').val($('.catImage').attr("src"));
      $('.clicks').val($('.clickCounter').text());
      view.showAdminArea();
    });
  },
  getAdminData:function(){
    $('.save').click(function(){
      clickedCat = {
      name:$('.name').val(),
      file:$('.url').val(),
      clicks:$('.clicks').val()
    };
    view.renderClickedCatInfo(clickedCat);
  });
  $('.save').click(function(){
    $('.admin').addClass('hidden');
  });
  $('.cancel').click(function(){
    $('.admin').addClass('hidden');
  })
  }

}
let view = {
  init:function(){
    view.renderList();
  },
  renderList:function(){
  // call octopus.getCatsNames() to grab dates from model
    octopus.getCatsNames(catNames);
    for (let i = 0;i<catNames.length;i++){
      $('.catList').append('<li>'+catNames[i]+'</li>');
    };
  },
  //display all properties values of catcliked, catclicked is an object with properties:"name","file,"clicks";
  renderClickedCatInfo:function(clickedCat){
    $('.imageContent').empty().append('<div><p class = "catNames">'+ clickedCat.name +'</p>' + '<p class="clickCounter">'+clickedCat.clicks+'</p> </div> <img class = "catImage" src='+ clickedCat.file +'>' );
    octopus.updateClickCounter(clickedCat);
  },
  updateClick:function(){
    $('.clickCounter').text(clickedCat.clicks);
    // model is not changed alert (model.catObject[0].clicks)
  },
  showAdminArea:function(){
    $('.input-admin').removeClass('hidden');
    octopus.getAdminData();
  }
}
octopus.init();
