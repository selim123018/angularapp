var app=angular.module("myapp",[]);

app.controller("mycontroller",function($scope){
	console.log("app running");
	$scope.newuser={};
	$scope.clickeduser={};
    $scope.message="";

	$scope.users=[
    {username:"Selim Reza",email:"selimcse12st@gmail.com",phone:"01714415657"},
    {username:"kaka",email:"kaka@gmail.com",phone:"01738206144"}
	];
    
    $scope.saveuser=function(){
    	$scope.users.push($scope.newuser);
    	$scope.newuser={};
        $scope.message="New user added successfully";
    };

    $scope.selectuser=function(user){
    	console.log(user);
    	$scope.clickeduser=user;
    };

    $scope.updateuser=function()
    {
       $scope.message="User update successfully";
    };

    $scope.deleteuser=function(){
    	$scope.users.splice($scope.users.indexOf($scope.clickeduser), 1);
        $scope.message="User deleted successfully";
    };

    $scope.clearmessage=function(){
        $scope.message="";
    }

});