'use strict';

(function(){

class PaymentComponent {
  constructor($http, $scope, socket,$cookies,$location) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket =socket;
    this.scope=$scope;
    this.$cookies= $cookies;
    this.$location =$location;
    this.seatno=[];
  }
  $onInit(){
  var info = this.$cookies.getObject('bkinfo');
  console.log(info);
  if(info!=undefined){
  var bkinfo=info.bkinfo;
   console.log(bkinfo);
   console.log(bkinfo.Theatre);
   document.getElementById("mname").innerHTML=bkinfo.title;
   document.getElementById("cnam").innerHTML=bkinfo.city;
   document.getElementById("tr1").innerHTML=bkinfo.Theatre;
   document.getElementById("time").innerHTML=bkinfo.showtime;
   document.getElementById("tdate").innerHTML=bkinfo.date;
   document.getElementById("amount").innerHTML=bkinfo.amount;
  document.getElementById("sno").innerHTML=bkinfo.seatnumber;
  //  document.getElementById("no").innerHTML;
  this.seatno=bkinfo.seatnumber;

 }
 }
 Addpayment()
 {
   this.$http.post('/api/paymentendpoints', {
     uname: this.uname,
     contact: this.contact,
     mailid: this.mailid,
     moviename: document.getElementById("mname").innerHTML,
     tname: document.getElementById("tr1").innerHTML,
     date: document.getElementById("tdate").innerHTML,
     time: document.getElementById("time").innerHTML,
     seatno: this.seatno,
     cityname: document.getElementById("cnam").innerHTML,
     amount: document.getElementById("amount").innerHTML
    //  noofticket: String
      }).then(response=> {
        console.log(response);
        alert("Booked Successfully");
this.$location.path('/');
      });
    }

     validateForm() {
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Not a valid e-mail address");
            this.$location.path('/');
            return false;
        }
    }
 }


angular.module('ticketbookingApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
