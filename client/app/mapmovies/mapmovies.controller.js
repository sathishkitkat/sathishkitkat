'use strict';

(function(){

class MapmoviesComponent {
  constructor($http,$scope,socket) {
      this.message = 'Hello';
      this.$http = $http;
      this.mapmovieDate = [];
      this.data = [];
      this.socket = socket;
      this.mapmovieid='';
      this.len='';
      this.i='';
      this.arr=[];
      this.tdata=[];
      this.mapDates=[];
      this.st='';
      this.datearr=[];
      this.datelen='';
      this.data1=[];
      this.dat= [];
      // var data1='';
      for(var i=0;i<4;i++){
        var date = new Date()
     var month = date.getMonth() + 1
    date.setDate(date.getDate()+i);
    var day=date.getDate();
   var year = date.getFullYear()
   var cvalue=day + "/" + month + "/" + year;
    // date.setDate(date.getDate() + i);
    this.mapDates[i] = cvalue;
    // alert(this.mapDates[i]);
    }
      $scope.$on('$destory',function() {
        socket.unsyncupdates('mapmovieendpoints');
      });
  }

Adddate()
{
  this.data1 = document.getElementById('selecteddata').value;
  // alert(this.data);
  $('#mydate').append("<option value='"+this.data1+"'>"+this.data1+"</option>");
}
  Addmapmovie() {
    this.len=$('#mySelect').children('option').length;
     for (this.i = 0; this.i < this.len; this.i++) {
      this.arr[this.i]=$('#mySelect option').eq(this.i).val();
    }
    this.datelen=$('#mydate').children('option').length;
     for (this.i = 0; this.i < this.datelen; this.i++) {
      this.datearr[this.i]=$('#mydate option').eq(this.i).val();
    }

    this.$http.post('/api/mapmovieendpoints',{
      poster:this.poster,
     location:this.location,
      tname:this.tname,
      title:this.title,
      showtime:this.arr,
      formdate:this.datearr

      // fromdate:this.fromdate,
      // todate:this.todate
    }).then (response => {
        console.log(response);

        //  console.log("mapmovies added");
      // this.mapmoviesDate = response.data;
      });
    }
    getshowtime(){
      var data1=  this.tdata;
    var uniqueNames = [];
                    var uniqueObj = [];
                    for(var i = 0; i< data1.length; i++){
                        if(data1[i].theatrename==this.tname &&data1[i].location==this.location){

                        if(uniqueNames.indexOf(data1[i].showtime) === -1){
                            uniqueObj.push(data1[i])
                            uniqueNames.push(data1[i].showtime);}}
                            console.log(uniqueNames);
                            this.st=uniqueNames;
}
  }
 $onInit() {
    this.$http.get('/api/moviesendpoints').then(response => {
    this.data = response.data;
    this.socket.syncUpdates('mapmovieendpoints', this.data);
   });
   this.$http.get('/api/theatreendpoints').then(response=> {
  this.tdata = response.data;
  console.log(response.data);
});
  // data1=  this.tdata;
  this.$http.get('/api/mapmovieendpoints').then(response => {
  this.mapmovieDate = response.data;
  console.log(this.mapmovieDate);
  this.socket.syncUpdates('mapmovieendpoints', this.mapmovieDate);
  });

}
getmovie()
{
  console.log(this.data);
  for(var i = 0; i< this.data.length; i++){
      if(this.title==this.data[i].title){
        console.log(this.data[i].poster);
        this.poster = this.data[i].poster;
      }
    }
}

Add() {
this.data = document.getElementById('UserSelector').value;
// alert(this.data);
$('#mySelect').append("<option value='"+this.data+"'>"+this.data+"</option>");
  }
  Remove(mapmovieDate)
  {
  this.$http.delete('/api/mapmovieendpoints/' + mapmovieDate._id).then(response=> {
  console.log("deleted");
  });
}
}

angular.module('ticketbookingApp')
  .component('mapmovies', {
    templateUrl: 'app/mapmovies/mapmovies.html',
    controller: MapmoviesComponent,
    controllerAs: 'mapmoviesCtrl'
  });

})();
