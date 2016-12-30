'use strict';

angular.module('imgApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.submitForm = function(form){
      var data = {
        name: $scope.user.name,
        festId: $scope.user.festId,
        phoneNumber: $scope.user.phoneNumber,
        question: $scope.user.question,
        q1: $scope.user.q1,
        q2: $scope.user.q2,
        q3: $scope.user.q3,
        q4: $scope.user.q4,
        q5: $scope.user.q5
      }
      console.log(data);
      $http.post('/api/imgs', data).then(function(response){
        console.log(response);
        if(response.status == "201"){
          // 1st form
          alert("Thank you! Please fill the form after 30 minutes to ensure your attendance and to send questions for the speaker. All those who attend 6 or more lectures get official Shaastra certificates! The best audience lecture questions get exclusive signed goodies from the speakers!");
          // 2nd form
          // alert("Thank you for attending the lecture. That's not all! All those who attend 6 or more lectures get official Shaastra certificates! Don't miss this wonderful opportunity!");
          $scope.user.name="";
          $scope.user.festId="";
          $scope.user.phoneNumber="";
          $scope.user.question="";
          $scope.user.q1="";
          $scope.user.q2="";
          $scope.user.q3="";
          $scope.user.q4="";
          $scope.user.q5="";
        }
        else if(response.status == "200" && response.data == "204"){
          alert("You have already filled the form");
          $scope.user.name="";
          $scope.user.festId="";
          $scope.user.phoneNumber="";
          $scope.user.question="";
          $scope.user.q1="";
          $scope.user.q2="";
          $scope.user.q3="";
          $scope.user.q4="";
          $scope.user.q5="";
        }
      });
    }
  });
