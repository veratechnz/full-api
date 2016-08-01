(function(){
        var theApp = angular.module('apiTime', []);
        theApp.controller('mainController', mainController);


        function mainController($scope, $http) {
            $http({
              method: 'GET',
              url: '/userlist'
            })
            .then(function successCallback(data) {
                console.log(data);
            }, function errorCallback(response) {
                console.log(response + 'an error');
            });

            // when landing on the page, get all todos and show them
            // $http.get('/api/todos')
            //     .success(function(data) {
            //         $scope.todos = data;
            //         console.log(data);
            //     })
            //     .error(function(data) {
            //         console.log('Error: ' + data);
            //     });

            // when submitting the add form, send the text to the node API
            // $scope.createTodo = function() {
            //     $http.post('/api/todos', $scope.formData)
            //         .success(function(data) {
            //             $scope.formData = {}; // clear the form so our user is ready to enter another
            //             $scope.todos = data;
            //             console.log(data);
            //         })
            //         .error(function(data) {
            //             console.log('Error: ' + data);
            //         });
            // };

            // delete a todo after checking it
            // $scope.deleteTodo = function(id) {
            //     $http.delete('/api/todos/' + id)
            //         .success(function(data) {
            //             $scope.todos = data;
            //             console.log(data);
            //         })
            //         .error(function(data) {
            //             console.log('Error: ' + data);
            //         });
            // };

        } 
}());
