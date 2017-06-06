'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket,$location,$cookies) {
      this.$http = $http;
      this.socket = socket;
      this.$location=$location;
      this.$cookies=$cookies;
      this.uniqueArray='';
      this.movies=[];
      this.newdata=[];
      this.bkmovie=[];
      // this.awesomeThings = [];
      this.mapmovieDate= [];
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }



 removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      // return newArray;
      this.newdata=newArray;
      // for(var i=0;i<this.newdata.length;i++){
      //   if(this.newdata[i].title==this.movies.title){
      //     this.dt=
      //   }
      // }



      console.log(this.newdata);
 }

    $onInit() {
      this.$http.get('/api/mapmovieendpoints').then(response => {
      this.mapmovieDate = response.data;
      console.log(this.mapmovieDate);
this.removeDuplicates(this.mapmovieDate, "title");
        this.$http.get('/api/moviesendpoints').then(response => {
           this.movies = response.data;
           console.log(this.movies);


      this.socket.syncUpdates('mapmovieendpoints', this.mapmovieDate);
      console.log("this.mapmovieDate: " + JSON.stringify(this.mapmovieDate));
      });
    });
}
Review(){
  this.$location.path('/review');
}
  Booking(moviess){
    for(var i=0;i<this.mapmovieDate.length;i++)
    {
      if(moviess.title==this.mapmovieDate[i].title)
      {
        this.bkmovie.push(this.mapmovieDate[i]);

       }

    }
console.log(this.bkmovie);
  var obj = {
    movieinfo:{
      bk:this.bkmovie,
      tit:moviess.title}};
      console.log(obj);
                      this.$cookies.putObject('info', obj);

                    this.$location.path('/seatbooking');

  //  review()
  //    for(var i=0;i<this.mapmovieDate.length;i++)
  //        {
  //          if(movi.title==this.mapmovieDate.length[i].title)
  //        }

                    // this.$location.path('/review');
}

};

  angular.module('ticketbookingApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
