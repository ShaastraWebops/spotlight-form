'use strict';

angular.module('imgApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, FileSaver, Blob) {
    $http.get('/api/imgs').then(function(response){
      $scope.allUsers = response.data;
    });

    $scope.exportData = function () {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      FileSaver.saveAs(blob, "attendance.xls");
    };
  });
