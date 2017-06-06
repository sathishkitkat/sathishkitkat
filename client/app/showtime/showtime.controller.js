'use strict';

(function(){

class ShowtimeComponent {
  constructor($http,socket,$scope) {
    this.message = 'Hello';
    this.$http = $http;
    this.showtimeData = [];
    this.socket = socket;
    this.time = time;
    this.data ='';
    $scope.$on('$destory',function() {
      socket.unsyncupdates('thing');
    });
  }

  AddShowtime(){
      this.$http.post('/api/showtimeendpoints',{
      time:this.time,
    }).then(response => {
      console.log(response);
    });
}
  $onInit(){
       this.$http.get('/api/showtimeendpoints/').then(response => {
       this.showtimeDate = response.data;
       this.socket.syncUpdates('theatreendpoints', this.theatreDate);
    });
  }
};

angular.module('ticketbookingApp')
  .component('showtime', {
    templateUrl: 'app/showtime/showtime.html',
    controller: ShowtimeComponent,
    controllerAs: 'showtimeCtrl'
  });

})();
