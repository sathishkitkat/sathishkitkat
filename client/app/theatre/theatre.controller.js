'use strict';

(function(){

class TheatreComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.theatreDate = [];
    this.socket = socket;
    this.theatreid='';
    this.data = [];
    this.len= '';
    this.i='';
    this.arr=[];
    $scope.$on('$destory',function() {
      socket.unsyncupdates('thing');
    });
  }
  Addtheatre() {
    this.len=$('#mySelect').children('option').length;
    // alert(this.len);
     for (this.i = 0; this.i < this.len; this.i++) {
      this.arr[this.i]=$('#mySelect option').eq(this.i).val();
   }
    this.$http.post('/api/theatreendpoints',{
      theatrename:this.theatrename,
      location:this.location,
      showtime:this.arr
    }).then (response => {
      console.log(response);
        console.log("theater added");
  });
}

$onInit() {
     this.$http.get('/api/theatreendpoints').then(response => {
     this.theatreDate = response.data;
     this.socket.syncUpdates('theatreendpointsendpoint', this.theatreDate);
  });
}

Add() {
this.data = document.getElementById('UserSelector').value;
// alert(this.data);
$('#mySelect').append("<option value='"+this.data+"'>"+this.data+"</option>");
}

Edit(theatreDate) {
 this.$http.get('/api/theatreendpoints/' + theatreDate._id).then(response=>{
                                this.theatrename = response.data.theatrename;
                                this.location=response.data.location;
                                this.showtime=response.data.showtime;
 this.theatreid=theatreDate._id;
                             });
}

Remove(theatreDate)
{
this.$http.delete('/api/theatreendpoints/' + theatreDate._id).then(response=>{
console.log("deleted");
});
}


// update(){
//  this.$http.put('/api/theatreendpoints/'+this.theatre._id, this.theatre{
//    theatrename:this.theatrename,
//    location:this.location,
//    showtime:this.showtime
//  }).then (response=> {
//    console.log(response);
// // console.log("theater added");
//      });
//    }
};


angular.module('ticketbookingApp')
  .component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
    controllerAs: 'theatreCtrl'
  });

})();
