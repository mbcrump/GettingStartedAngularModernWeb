(function(angular) {


    function MainController($scope, $http) {
        $scope.message = "DuckDuckGo Lookup";

        var onUserComplete = function(response){
            $scope.user = response.data;
        };

        var onError = function(reason){
            $scope.error = "Could not reach the server";
        };

        $scope.search = function(username){
            $http.get("http://api.duckduckgo.com/?q=" + username + "&format=json&pretty=1")
                .then(onUserComplete, onError);
        };


    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", MainController]);

})(angular);