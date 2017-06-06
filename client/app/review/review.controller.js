'use strict';

(function(){

class ReviewComponent {
  constructor($http,socket,$scope, $cookies,$location) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket =socket;
    this.$location=$location;
    this.$cookies=$cookies;
    this.moviesData =[];
    this.bookmovie =[];
    this.Data=[];
    this.ratecount='';
    // this.$cookies =[];
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('reviewendpoint');
    });
  }

  Addrating() {
this.$http.post('/api/reviewendpoints', {
     username: this.username,
     movietitle:document.getElementById("mname").innerHTML,
     comment:this.comment,
     rating: this.rating
   }).then(response=> {
   console.log(response);
   this.$http.get('/api/reviewendpoints').then(response => {
   this.Data = response.data;
   var count=0;
   var cnt=0;
                              var i;
                              try
                             {
                                 for(i=0;i<=this.Data.length;i++)
                                 {
                                   var name=document.getElementById("mname").innerHTML;
                                   if(this.Data[i].movietitle==name)
                                   {
                                     cnt++;
                                   count+=parseInt(this.Data[i].rating);
                                   console.log(count);
                                 }

                                 }

                               }
                              catch(e){}

                               if(count>0)
                               {
                                 this.ratecount=Math.round(count*100/(cnt*5));
                                 console.log(this.ratecount);

                               }

 });

 });
 }
 postavg()
 {
   console.log(this.moviesData);
   for(var i=0;i<this.moviesData.length;i++)
   {
     var name=document.getElementById("mname").innerHTML;
     if(this.moviesData[i].title==name)
     {
       console.log(this.moviesData[i]._id);

                              this.moviesData[i].Avg=this.ratecount;
                              console.log(this.moviesData[i]);
                              this.$http.put('/api/moviesendpoints/' + this.moviesData[i]._id, this.moviesData[i]).then(response =>{
                                  console.log(response);
                                console.log("updated");
                              });


     }
   }
 }
  $onInit() {
    this.$http.get('/api/moviesendpoints').then(response => {
    this.moviesData = response.data;
      console.log(this.moviesData);

});

}
review(m)
{
  // console.log(m.Title);console.log(this.m.Title);
  document.getElementById("mname").innerHTML=m.title;
  // var obj = {
  //   rwinfo:response.data};
  //     console.log(obj);
  //                     this.$cookies.putObject('rwinfo', obj);

}
  // Booking(mov){
  //   for(var i=0;i<this.moviesData.length;i++)
  //   {
  //     if(mov.title ==this.moviesData[i].title)
  //     {
  //       this.bookmovie.push(this.moviesData[i]);
  //
  //      }
  //
  //   }
  //  console.log(this.bookmovie);
//   var obj = {
//     movieinfo:{
//       book:this.bookmovie,
//       tit:moviess.title}};
//       console.log(obj);
//                       this.$cookies.putObject('info', obj);

                    // this.$location.path('/seatbooking');



};
angular.module('ticketbookingApp')
  .component('review', {
    templateUrl: 'app/review/review.html',
    controller: ReviewComponent,
    controllerAs: 'reviewCtrl'
  });

})();
