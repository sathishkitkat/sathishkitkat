'use strict';

(function(){

class RatingComponent {
  constructor($scope) {
    this.message = 'Hello';
    this.$scope=$scope;
    this.hello=false;
  }
  show()
  {
    this.hello=true;
  }
}

angular.module('ticketbookingApp')
  .component('rating', {
    templateUrl: 'app/rating/rating.html',
    controller: RatingComponent,
    controllerAs: 'ratingCtrl'
  });

})();
