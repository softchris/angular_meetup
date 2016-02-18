(function(){
	'use strict';

	angular.module('BlankApp', [
		'ngMaterial',
		'ngMessages'
	])
	.controller('DialogController', DialogController)
	.controller('AppCtrl', AppCtrl);

	function AppCtrl($scope, $mdDialog, $mdMedia) {
  		$scope.status = '  ';
  		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

  		$scope.showAlert = showAlert;
  		$scope.showConfirm = showConfirm;
  		$scope.showAdvanced = showAdvanced;
  		$scope.showTabDialog = showTabDialog;

  		function showAlert(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
		    // Modal dialogs should fully cover application
		    // to prevent interaction outside of dialog
		    $mdDialog.show(
		      $mdDialog.alert()
		        .parent(angular.element(document.querySelector('#popupContainer')))
		        .clickOutsideToClose(true)
		        .title('This is an alert title')
		        .textContent('You can specify some description text in here.')
		        .ariaLabel('Alert Dialog Demo')
		        .ok('Got it!')
		        .targetEvent(ev)
		    );
	  	}

	  	function showConfirm(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.confirm()
		          .title('Would you like to delete your debt?')
		          .textContent('All of the banks have agreed to forgive you your debts.')
		          .ariaLabel('Lucky day')
		          .targetEvent(ev)
		          .ok('Please do it!')
		          .cancel('Sounds like a scam');

		    $mdDialog.show(confirm).then(function() {
		      $scope.status = 'You decided to get rid of your debt.';
		    }, function() {
		      $scope.status = 'You decided to keep your debt.';
		    });
	    }

	  

		  function showAdvanced(ev) {
		    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

		    $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'dialog1.tmpl.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true,
		      fullscreen: useFullScreen
		    })
		    .then(function(answer) {
		      $scope.status = 'You said the information was "' + answer + '".';
		    }, function() {
		      $scope.status = 'You cancelled the dialog.';
		    });
		  }


		  $scope.$watch(function() {
		      return $mdMedia('xs') || $mdMedia('sm');
		    }, function(wantsFullScreen) {
		      $scope.customFullscreen = (wantsFullScreen === true);
		  });


	  function showTabDialog(ev) {
		    $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'tabDialog.tmpl.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true
		    })
	        .then(function(answer) {
	          $scope.status = 'You said the information was "' + answer + '".';
	        }, function() {
	          $scope.status = 'You cancelled the dialog.';
	        });
	  }

	 }

	function DialogController($scope, $mdDialog) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };

	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };

	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };
	}
})();