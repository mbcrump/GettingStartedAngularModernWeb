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
            $http.get("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=m6gxza56e93phvnt7mw32jbg&q=" + username + "&page_limit=1")
                .then(onUserComplete, onError);
        };


    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", MainController]);

})(angular);