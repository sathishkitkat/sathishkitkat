'use strict';

(function(){

class SeatbookingComponent {
  constructor($http, $scope, socket,$cookies,$location) {
    this.message = 'Hello';
   this.$http = $http;
   this.$cookies=$cookies;
   this.$scope=$scope;
   this.$location=$location;
   this.seatbooking = [];
   this.$socket = socket;
   this.scope =[];
   this.data = [];
   this.minfo=[];
   this.bktitle='';
   this.stime=[];
   this.sestbooked=[];
   this.uniquetime=[];
   this.mapDates=[];

   this.goCats = false;
   this.sn=[];
   this.bkdata=[];
   this.s=[];

//     this.d= function(){
//       var uniquetime=[];
//       var d,k;
//    for(var i=0;i<1;i++){
//      var date = new Date()
//   var month = date.getMonth() + 1
//  date.setDate(date.getDate()+i);
//  var day=date.getDate();
// var year = date.getFullYear()
// var curentDate=day + "/" + month + "/" + year;
//  d = new Date(new Date().getTime()).toLocaleTimeString();
//  this.mapDates[i] = curentDate;
// }
// if(this.theatrename[k].showTime>d)
//    {
//      if(this.uniquetime.indexOf(theatrename[k].showTime) === -1){
//     this.uniquetime.push(theatrename[k].showTime);
//      alert(uniquetime);
//    }}
//    else {
//        alert("pls select current machine time");
//      }
//  }
//  // else {
//    if(this.uniquetime.indexOf(theatrename[k].showTime) === -1){
//    this.uniquetime.push(theatrename[k].showTime);
//    alert(uniquetime);
//
//    }
 // }
  //  this.seat=false;
    // this.seatArray = [];
}

bkeddata()
{
  for(var i=0;i<this.bkdata.length;i++)
  {
    if(this.bkdata[i].moviename==this.bktitle&&this.bkdata[i].cityname==this.city&&this.bkdata[i].tname==this.Theatre&&this.bkdata[i].date==this.date&&this.bkdata[i].time==this.showtime)
    {
    this.s.push(this.bkdata[i].seatno);
    console.log(this.s);
    for(var a=0;a<this.s.length;a++){
for(var j=0;j<this.s[a].length;j++)
{
        var id=this.s[a][j];
        console.log(id);
        $('#'+id).attr('src','assets/Images/chair-2-512 (3).gif');
      }
    }

    }
  }
}
  $onInit(){
    var info = this.$cookies.getObject('info');
    console.log(info);
    if(info!=undefined){
    var minfo=info.movieinfo.bk;
     console.log(minfo);
     this.bktitle=info.movieinfo.tit;
     this.minfo=minfo;
     console.log(this.bktitle);
     console.log(this.minfo);
     document.getElementById("mname").innerHTML=this.bktitle;
     document.getElementById("mtit").innerHTML=this.bktitle;
}
this.$http.get('/api/paymentendpoints').then(response => {
this.bkdata = response.data;
console.log(this.bkdata);

});
 }
pay()
{
  this.sn=seats;
  console.log(seats);
  console.log(this.sn);
  this.$http.post('/api/seatbookingendpoints', {
    title:  document.getElementById("mtit").innerHTML,
Theatre:this.Theatre,
city: this.city,
date: this.date,
showtime: this.showtime,
amount: document.getElementById("subtotal").innerHTML,
seatnumber: this.sn
     }).then(response=> {
     console.log(response);
     var obj = {
       bkinfo:response.data};
         console.log(obj);
                         this.$cookies.putObject('bkinfo', obj);

                       this.$location.path('/payment');


   });
}
};


angular.module('ticketbookingApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
