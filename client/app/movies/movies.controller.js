'use strict';

(function(){

class MoviesComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.moviesData = [];
    this.socket =socket;
    this.data ='';
    this.movieObj= {};
     this.key ='';
     this.arr=[];
     this.poster='';
     this.Obj=false;
    $scope.$on('$destory',function() {
      this.socket.unsyncupdates('moviesendpoint');
    });
  }
  getmovie(){
  //   this.$http.get('http://www.omdbapi.com/?t='+this.name+'&y='+this.year+'&plot=full&r=json').then (response =>{
  //   console.log(response.data);
  //
  //   for(var key in response.data)
  //   {
  //    if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors' || key== 'Plot' || key== 'Response')
  //        {
  //       this.movieObj[key] = response.data[key];
  //     }
  //      this.socket.syncUpdates('moviesendpoint', this.movieObj);
  //    console.log(this.movieObj);
  //    }
  //
  // });

  this.$http.get('https://api.themoviedb.org/3/search/movie?query='+this.name+'&api_key=585e2e0ebf8f161eea524634243e0f3a').then(response=>{

    console.log(response.data.results);
    this.arr=response.data.results;
for(var i=0;i<this.arr.length;i++){
  if(this.arr[i].title==this.name)
  {
    this.movieObj=this.arr[i];
    this.poster='https://image.tmdb.org/t/p/w300_and_h450_bestv2'+this.movieObj.poster_path;
    console.log(this.poster);
    this.movieObj.poster_path=this.poster;
  }
}
// this.Obj=true;
//  this.socket.syncUpdates('moviesendpoint', this.Obj);

console.log(this.movieObj);



    // for(var i=0;i<this.arr.length;i++){
    // for(var key in this.arr[i])
    //   {
    //    if(key=='this.arr[i].title'|| key=='this.arr[i].poster_path' || key== 'this.arr[i].original_language' || key== 'this.arr[i].overview')
    //        {
    //          console.log(key);
    //          console.log(this.arr[i]);
    //       this.movieObj[key] = this.arr[key];
    //     }
    //      this.socket.syncUpdates('moviesendpoint', this.movieObj);
    //    console.log(this.movieObj);
    //    }
    //  }
  })

}
  Addmovies() {
this.$http.post('/api/moviesendpoints', {
     poster: this.movieObj.poster_path,
     title: this.movieObj.title,
     overview:this.movieObj.overview


    // Status: false
   }).then (response=> {
   console.log(response);
  alert("Movie added successfully");

 });
}


$onInit() {
    this.$http.get('/api/moviesendpoints').then (response =>{
    this.moviesData = response.data;
    this.socket.syncUpdates('moviesendpoints', this.moviesData);
  });
 }

Delete(movies)
 {
 this.$http.delete('/api/moviesendpoints/' + movies._id).then(response => {
 console.log("delete");
   });
 }
};
angular.module('ticketbookingApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: '$moviesCtrl'
  });

})();
