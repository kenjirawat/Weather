moment.locale('th')

angular.module('app', [])
  .controller('AppController', function ($scope, $http) {
    $scope.data = {}

    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0')
      .then(function (response) {
        console.log(response.data)
        $scope.data = response.data
      })

    $scope.formatDate = function (timestamp) {
      var day = moment.unix(timestamp)
      return day.format('ll')
    }

    $scope.formatTemp = function (temp) {
      return parseInt(temp)
    }
  })
