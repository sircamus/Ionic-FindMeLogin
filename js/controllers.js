angular.module('FindMe.controllers', [])

// APP - RIGHT MENU
.controller('AppCtrl', function($scope){

})


//Controllers

.controller('HomeCtrl', function($scope, $ionicActionSheet, $state, $ionicSideMenuDelegate, $ionicHistory){


	//Back 
  	$scope.myGoBack = function() {
    $ionicHistory.goBack();
 
}

	//Menu Toggle
    $scope.toggleMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
}


	$scope.showLogOutMenu = function() {
		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			// buttons: [
			// { text: '<b>Share</b> This' },
			// { text: 'Move' }
			// ],
			destructiveText: 'Salir',
			titleText: '¿Seguro que quieres salir?',
			cancelText: 'Cancelar',
			cancel: function() {
				// add cancel code..
			},
			buttonClicked: function(index) {
				//Called when one of the non-destructive buttons is clicked,
				//with the index of the button that was clicked and the button object.
				//Return true to close the action sheet, or false to keep it opened.
				return true;
			},
			destructiveButtonClicked: function(){
				//Called when the destructive button is clicked.
				//Return true to close the action sheet, or false to keep it opened.
				$state.go('facebook-sign-in');
			}
		});

	};
})

.controller('AddCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray, $ionicSideMenuDelegate){


	//Define Firebase collection
	var ref = new Firebase('https://findmedb.firebaseio.com/finds');
	$scope.finds = $firebaseArray(ref);

	$scope.addFind = function(){
		console.log('Adding find');
		if ($scope.nombre) { var nombre = $scope.nombre; } else { var nombre = 'NOMBRE NULL'; }
		if ($scope.notas) { var notas = $scope.notas; } else { var notas = null; }
		if ($scope.foto) { var foto = $scope.foto; } else { var foto = 'http://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg'; }
		if ($scope.lugar) { var lugar = $scope.lugar; } else { var lugar = null; }

		$scope.finds.$add({
			nombre : nombre,
			notas : notas,
			foto : foto, 
			lugar : lugar, 
			fecha : Firebase.ServerValue.TIMESTAMP
		}).then(function(ref){
			var id = ref.key();
			console.log('Find added with name: '+nombre);
			console.log('Find added with ID: '+id);
		});

		clearFields();
		
		
	}

	function clearFields(){
		console.log('Clearing all fields...');

		$scope.nombre = '';
		$scope.notas = '';
	}

}])

.controller('WelcomeCtrl', function($scope, $ionicModal, $state){
	$scope.bgs = ["http://lorempixel.com/640/1136", "https://dl.dropboxusercontent.com/u/30873364/envato/ionFB/ion-fb-feed.gif"];

	$scope.facebookSignIn = function(){
		console.log("doing facebbok sign in");
		$state.go('app.home');
	};

	$ionicModal.fromTemplateUrl('views/partials/privacy-policy.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.privacy_policy_modal = modal;
  });

	$ionicModal.fromTemplateUrl('views/partials/terms-of-service.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.terms_of_service_modal = modal;
  });

  $scope.showPrivacyPolicy = function() {
    $scope.privacy_policy_modal.show();
  };

	$scope.showTerms = function() {
    $scope.terms_of_service_modal.show();
  };
})

.controller('CreateAccountCtrl', function($scope, $state){
	$scope.doSignUp = function(){
		console.log("doing sign up");
		$state.go('app.home');
	};
})

.controller('WelcomeBackCtrl', function($scope, $ionicModal, $state){
	$scope.doLogIn = function(){
		console.log("doing log in");
		$state.go('app.home');
	};

	$ionicModal.fromTemplateUrl('views/partials/forgot-password.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.forgot_password_modal = modal;
  });

  $scope.showForgotPassword = function() {
    $scope.forgot_password_modal.show();
  };

	$scope.requestNewPassword = function() {
    console.log("requesting new password");
		$state.go('app.home');
  };

  // //Cleanup the modal when we're done with it!
  // $scope.$on('$destroy', function() {
  //   $scope.modal.remove();
  // });
  // // Execute action on hide modal
  // $scope.$on('modal.hidden', function() {
  //   // Execute action
  // });
  // // Execute action on remove modal
  // $scope.$on('modal.removed', function() {
  //   // Execute action
  // });
})

;
