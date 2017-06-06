'use strict';

angular.module('ticketbookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seatbooking', {
        template: '<seatbooking></seatbooking>'
      });
  });
//   angular.directive("datepicker", function () {
//   return {
//     restrict: "A",
//     require: "ngModel",
//     link: function (scope, elem, attrs, ngModelCtrl) {
//       var updateModel = function (dateText) {
//         scope.$apply(function () {
//           ngModelCtrl.$setViewValue(dateText);
//         });
//       };
//       var options = {
//         dateFormat: "dd/mm/yy",
//         onSelect: function (dateText) {
//           updateModel(dateText);
//         }
//       };
//       elem.datepicker(options);
//     }
//   }
// });
