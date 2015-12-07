angular.module('FindMe.controllers', [])

<<<<<<< HEAD
=======
// APP - RIGHT MENU
.controller('AppCtrl', function($scope){

})

>>>>>>> parent of fb4c10d... Login working!!!

//Controllers

.controller('HomeCtrl', function($scope, $ionicActionSheet, $state, $ionicSideMenuDelegate, $ionicHistory){

<<<<<<< HEAD

<<<<<<< HEAD
	//Model
	$scope.model = { name: 'model' };	

=======
//Model
	$scope.model = { name: 'model' };		
>>>>>>> parent of 81bd032... Login changes

	//Define Firebase collection
<<<<<<< HEAD
<<<<<<< HEAD
	var ref = new Firebase('https://fmdevice.firebaseio.com/users/finds');
=======
	var ref = new Firebase('https://findmedb.firebaseio.com/finds');
>>>>>>> parent of fb4c10d... Login working!!!
=======
	var ref = new Firebase('https://fmtrmp1.firebaseio.com/users/finds');
>>>>>>> parent of 9361fc1... Device ready
	$scope.finds = $firebaseArray(ref);
=======
>>>>>>> parent of 2d305b2... maps and insert working

	//Back 
  	$scope.myGoBack = function() {
    $ionicHistory.goBack();
<<<<<<< HEAD
 	
	}

<<<<<<< HEAD
	  //Remove Rental
	$scope.remove = function(){
		
		//GET DB Instance
		var ref = new Firebase('https://fmtrmp1.firebaseio.com/users/finds/');
		ref.remove();
	}
}])


<<<<<<< HEAD
=======
	//Menu Toggle
//     $scope.toggleMenu = function(){
//     $ionicSideMenuDelegate.toggleLeft();
// }

}])
>>>>>>> parent of fb4c10d... Login working!!!

.controller('SideCtrl', function($scope, $ionicActionSheet,$ionicSideMenuDelegate, $state){
=======
 
}

	//Menu Toggle
    $scope.toggleMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
}

>>>>>>> parent of 2d305b2... maps and insert working


=======
>>>>>>> parent of 81bd032... Login changes
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
				var ref = new Firebase("https://fmtrmp1.firebaseio.com/");
				ref.unauth();
				$state.go('facebook-sign-in');
			}
		});

	};
})

<<<<<<< HEAD
<<<<<<< HEAD


.controller('AddCtrl', ['$scope', '$firebaseArray','$ionicPopup', '$state', function($scope, $firebaseArray, $ionicSideMenuDelegate, $state, $ionicPopup, $location, $authClientProvider){
=======
.controller('AddCtrl', ['$scope', '$firebaseArray','$ionicPopup', '$state', function($scope, $firebaseArray, $ionicSideMenuDelegate, $state, $ionicPopup, $location){
>>>>>>> parent of fb4c10d... Login working!!!

	
	//Model
<<<<<<< HEAD
	$scope.model = { name: 'model' };	
=======
.controller('AddCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray, $ionicSideMenuDelegate){

>>>>>>> parent of 2d305b2... maps and insert working

	//Define Firebase collection
<<<<<<< HEAD
	var ref = new Firebase("https://fmdevice.firebaseio.com/users/finds");
=======
	$scope.model = { name: 'model' };		

	//Define Firebase collection
	var ref = new Firebase('https://findmedb.firebaseio.com/finds');
>>>>>>> parent of fb4c10d... Login working!!!
=======
	var ref = new Firebase("https://fmtrmp1.firebaseio.com/users/finds");
>>>>>>> parent of 9361fc1... Device ready
	$scope.finds = $firebaseArray(ref);

<<<<<<< HEAD
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



=======
>>>>>>> parent of 2d305b2... maps and insert working
	$scope.addFind = function(){
		console.log('Adding find');
<<<<<<< HEAD

		if ($scope.model.nombre) { var nombre = $scope.model.nombre; } else { var nombre = null; }
		if ($scope.model.notas) { var notas = $scope.model.notas; } else { var notas = ''; }
<<<<<<< HEAD
		if ($scope.model.choice) { var avatar = $scope.model.choice; } else { var avatar = 'default.png'; }
		if ($scope.loc.latitude) { var lat = $scope.loc.latitude; } else { var lat = '19.390858961426655'; }
		if ($scope.loc.longitude) { var lgt = $scope.loc.longitude; } else { var lgt = '-99.14361265000002'; }
=======
		if ($scope.nombre) { var nombre = $scope.nombre; } else { var nombre = 'NOMBRE NULL'; }
		if ($scope.notas) { var notas = $scope.notas; } else { var notas = null; }
		if ($scope.foto) { var foto = $scope.foto; } else { var foto = 'http://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg'; }
		if ($scope.lugar) { var lugar = $scope.lugar; } else { var lugar = null; }
>>>>>>> parent of 2d305b2... maps and insert working
=======
		if ($scope.foto) { var foto = $scope.foto; } else { var foto = 'http://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg'; }

		if ($scope.loc.latitude) { var lat = $scope.loc.latitude; } else { var lat = null; }
		if ($scope.loc.longitude) { var lgt = $scope.loc.longitude; } else { var lgt = null; }
		if ($scope.loc.desc) { var des = $scope.loc.desc; } else { var des = null; }
>>>>>>> parent of 81bd032... Login changes

		$scope.finds.$add({
			nombre : nombre,
			notas : notas,
<<<<<<< HEAD
			avatar : avatar, 
			lat : lat,
			lgt : lgt,
=======
			foto : foto, 
			lugar : lugar, 
>>>>>>> parent of 2d305b2... maps and insert working
			fecha : Firebase.ServerValue.TIMESTAMP
		}).then(function(ref){
			var id = ref.key();
			console.log('Find added with name: '+nombre);
			console.log('Find added with ID: '+id);
		});

		clearFields();

		$state.go('app.home');
		
		
	}

	function clearFields(){
<<<<<<< HEAD
		console.log('Clearing fields...');
		$scope.model.nombre = '';
		$scope.model.notas = '';
		$scope.model.choice = null;
	}

<<<<<<< HEAD
=======
		console.log('Clearing all fields...');

		$scope.nombre = '';
		$scope.notas = '';
	}
>>>>>>> parent of 2d305b2... maps and insert working
=======
	// $scope.showAlert = function() {
 //    $ionicPopup.alert({
 //        title: 'Find Me',
 //        template: '¡Se guardó tu nuevo Find!'
 //    });
	// }
>>>>>>> parent of fb4c10d... Login working!!!

}])

.controller('WelcomeCtrl', function($scope, $ionicModal, $state){
	$scope.bgs = ["http://lorempixel.com/640/1136", "https://dl.dropboxusercontent.com/u/30873364/envato/ionFB/ion-fb-feed.gif"];

<<<<<<< HEAD
<<<<<<< HEAD
	// $scope.facebookSignIn = function(){
	// 	console.log("doing facebbok sign in");
	// 	var ref = new Firebase("https://fmtrmp1.firebaseio.com/");
	// 	ref.authWithOAuthPopup("facebook", function(error, authData) {
	// 		if (error) {
	// 			console.log("Login Failed!", error);
	// 		} else {
	// 			console.log("Authenticated successfully with payload:", authData)
				

	// 			console.log("Logged in as:", authData.facebook.displayName);
	// 			console.log("Profile Pic URL:", authData.facebook.profileImageURL);
	// 			$state.go('app.home');
	// 		}
	// 	});
=======
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
>>>>>>> parent of fb4c10d... Login working!!!
		
	// };
})

.controller('CreateAccountCtrl', function($scope, $state){
	$scope.doSignUp = function(){
		console.log("doing sign up");
		alert('¡Listo! Tu cuenta ha sido creada');
		$state.go('app.home');
	};
})

<<<<<<< HEAD
=======
	$scope.facebookSignIn = function(){
		console.log("doing facebbok sign in");
		$state.go('app.home');
	};
>>>>>>> parent of 81bd032... Login changes

.controller('CreateAccountCtrl', ['$scope', '$state', function($scope, $state, $authClientProvider){

	//Define Firebase collection
	var ref = new Firebase('https://fmtrmp1.firebaseio.com/users');


<<<<<<< HEAD
	$scope.doSignUp = function(email, password){
		console.log("Creando cuenta...");
		var email = $("#register-email").val();
        var password = $("#register-password").val();
		ref.createUser({
			email    : email,
			password : password
		}, function(error, userData) {
			if (error) {
				console.log("Error al crear la cuenta:", error);
				alert(error);
			} else {
				console.log("Cuenta creada con uid:", userData.uid);
				doLogin(email, password);
			}
		})
	}
=======
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
>>>>>>> parent of 81bd032... Login changes

	function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
  }
}

	function doLogin(email, password) {
	var isNewUser = true;
	var ref = new Firebase('https://fmtrmp1.firebaseio.com/');
	ref.onAuth(function(authData) {
	  if (authData && isNewUser) {
	    // save the user's profile into the database so we can list users,
	    // use them in Security and Firebase Rules, and show profiles
	    ref.child("users").child(authData.uid).set({
	      provider: authData.provider,
	      name: getName(authData)
	    })
	  }
	})
	  ref.authWithPassword({
	  email    : email,
	  password : password
	}, function(error, authData) {
	  if (error) {
				switch (error.code) {
			      case "INVALID_EMAIL":
			        console.log("Los datos son incorrectos. Inténtalo nuevamente");
			        break;
			      case "INVALID_PASSWORD":
			        console.log("Los datos son incorrectos. Inténtalo nuevamente");
			        break;
			      case "INVALID_USER":
			        console.log("El usuario indicado no existe");
			        break;
			      default:
			        console.log("Algo salió mal...", error);
			    }
			console.log("Algo salió mal...", error); 
			} else {
	    console.log("Sesión iniciada correctamente:", authData);
	    alert("¡Bienvenido!");
	    $state.go('app.home');
	  }
	});
	}
}])
=======
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
>>>>>>> parent of fb4c10d... Login working!!!

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

<<<<<<< HEAD
	//Model
	$scope.model = { name: 'model' };	

	$scope.doLogIn = function(email, password) {
	var ref = new Firebase('https://fmtrmp1.firebaseio.com/users');
	var email = $("#login-email").val();
    var password = $("#login-password").val();

	  ref.authWithPassword({
	  email    : email,
	  password : password
	}, function(error, authData) {
	  if (error) {
				switch (error.code) {
			      case "INVALID_EMAIL":
			        console.log("Los datos son incorrectos. Inténtalo nuevamente");
			        alert("Los datos son incorrectos. Inténtalo nuevamente");
			        break;
			      case "INVALID_PASSWORD":
			        console.log("Los datos son incorrectos. Inténtalo nuevamente");
			        alert("Los datos son incorrectos. Inténtalo nuevamente");
			        break;
			      case "INVALID_USER":
			        console.log("El usuario indicado no existe");
			        alert("El email indicado no existe");
			        break;
			      default:
			        console.log("Algo salió mal...", error);
			        alert("Algo salió mal...", error);
			    }
			console.log("Algo salió mal...", error);    
			} else {
	    console.log("Sesión iniciada correctamente:", authData);
		alert("¡Bienvenido!");
	    $state.go('app.home');
	  }
	});
	}
}]);
=======
;
>>>>>>> parent of fb4c10d... Login working!!!
