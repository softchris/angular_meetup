angular
	.module('app')
	.controller("ChatCtrl", ChatCtrl);
	
function ChatCtrl($scope, $firebaseObject, $firebaseArray) {
		
	var chatInstance = new Firebase("https://incandescent-inferno-9878.firebaseio.com/chatMessages");
	
	$scope.user = "Unknown";
	$scope.chatMessages = $firebaseArray(chatInstance);
	
	$scope.addChatMessage = function(message){
		var newMessage = { from : $scope.user, message : message, created : new Date().getTime() };
		
		$scope.chatMessages.$add(newMessage);
		$scope.message = "";
	}
	
	var list = [];    
}
	
	
  