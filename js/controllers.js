angular.module('FindMe.controllers', ['firebase'])

// APP - RIGHT MENU
.controller('AppCtrl', function($scope){

})


//Controllers

.controller('HomeCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray, $ionicActionSheet, $ionicSideMenuDelegate, $state, $ionicHistory){

	//Model
	$scope.model = { name: 'model' };		

	//Define Firebase collection
	var ref = new Firebase('https://findmedb.firebaseio.com/finds');
	$scope.finds = $firebaseArray(ref);

	//Back 
  	$scope.myGoBack = function() {
    $ionicHistory.goBack();
 
	}
  

	//Menu Toggle
//     $scope.toggleMenu = function(){
//     $ionicSideMenuDelegate.toggleLeft();
// }

}])

.controller('SideCtrl', function($scope, $ionicActionSheet,$ionicSideMenuDelegate, $state){


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

.controller('AddCtrl', ['$scope', '$firebaseArray','$ionicPopup', '$state', function($scope, $firebaseArray, $ionicSideMenuDelegate, $state, $ionicPopup, $location){

	//Model
	$scope.model = { name: 'model' };		

	//Define Firebase collection
	var ref = new Firebase('https://findmedb.firebaseio.com/finds');
	$scope.finds = $firebaseArray(ref);

	$scope.loc = {};

	// $scope.positions = [];

	// $scope.$on('mapInitialized', function(event, map) {
	// $scope.map = map;
	// });

	// $scope.centerOnMe= function(){
	// $scope.positions = [];
	   

 //    navigator.geolocation.getCurrentPosition(function(position) {
 //    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

 //    $scope.positions.push({lat: pos.k,lng: pos.B});
 //    console.log(pos);

 //    $scope.map.setCenter(pos);
 //    });

 //  }



	$scope.addFind = function(){

		console.log('Adding find');

		if ($scope.model.nombre) { var nombre = $scope.model.nombre; } else { var nombre = null; }
		if ($scope.model.notas) { var notas = $scope.model.notas; } else { var notas = ''; }
		if ($scope.model.choice) { var avatar = $scope.model.choice; } else { var avatar = 'default.png'; }
		if ($scope.loc.latitude) { var lat = $scope.loc.latitude; } else { var lat = '19.390858961426655'; }
		if ($scope.loc.longitude) { var lgt = $scope.loc.longitude; } else { var lgt = '-99.14361265000002'; }

		$scope.finds.$add({
			nombre : nombre,
			notas : notas,
			avatar : avatar, 
			lat : lat,
			lgt : lgt,
			fecha : Firebase.ServerValue.TIMESTAMP

		}).then(function(ref){
			var id = ref.key();
			$scope.loc = {};
			// $scope.showAlert();
			console.log('Find added with name: '+nombre);
			console.log('Find added with ID: '+id);
		}, function(error) {
			console.log("Error:", error);
		})

		alert('¡Se guardó tu nuevo Find!');
		clearFields();

		$state.go('app.home');
		
	
	}

	function clearFields(){
		console.log('Clearing fields...');
		$scope.model.nombre = '';
		$scope.model.notas = '';
		$scope.model.choice = null;
	}

	// $scope.showAlert = function() {
 //    $ionicPopup.alert({
 //        title: 'Find Me',
 //        template: '¡Se guardó tu nuevo Find!'
 //    });
	// }

}])

.controller('WelcomeCtrl', function($scope, $ionicModal, $state){
	$scope.bgs = ["http://lorempixel.com/640/1136", "https://dl.dropboxusercontent.com/u/30873364/envato/ionFB/ion-fb-feed.gif"];

	$scope.facebookSignIn = function(){
		console.log("doing facebbok sign in");
		var ref = new Firebase("https://findmedb.firebaseio.com/");
		ref.authWithOAuthPopup("facebook", function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData)
				$state.go('app.home');

				console.log("Logged in as:", authData.facebook.displayName);
				console.log("Profile Pic URL:", authData.facebook.profileImageURL);

				var FBconn = $scope.userName = authData.facebook.displayName;
			}
		});
		
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
		alert('¡Listo! Tu cuenta ha sido creada');
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
