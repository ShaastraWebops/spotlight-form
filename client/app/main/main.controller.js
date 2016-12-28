'use strict';

angular.module('imgApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.submitForm = function(){
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
          alert("You filled successfully");
        }
        else if(response.status == "200" && response.data == "204"){
          alert("You already filled the form, bitch");
        }
      });
    }
  });
