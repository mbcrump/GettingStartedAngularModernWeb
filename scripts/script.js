(function(angular) {


    function MainController($scope, $http) {
        $scope.message = "Github User Lookup";

        var onUserComplete = function(response){
            $scope.user = response.data;
        };

        var onError = function(reason){
            $scope.error = "Could not reach the server";
        };

        $scope.search = function(username){
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        };
    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", MainController]);

})(angular);