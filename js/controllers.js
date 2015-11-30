angular.module('FindMe.controllers', ['firebase'])


//Controllers

.controller('HomeCtrl', function($scope, $ionicActionSheet, $state, $ionicSideMenuDelegate, $ionicHistory){

<<<<<<< HEAD

	//Model
	$scope.model = { name: 'model' };	


	//Define Firebase collection
	var ref = new Firebase('https://fmdevice.firebaseio.com/users/finds');
	$scope.finds = $firebaseArray(ref);
=======
>>>>>>> parent of 2d305b2... maps and insert working

	//Back 
  	$scope.myGoBack = function() {
    $ionicHistory.goBack();
<<<<<<< HEAD
 	
	}

	  //Remove Rental
	$scope.remove = function(){
		
		//GET DB Instance
		var ref = new Firebase('https://fmdevice.firebaseio.com/users/finds/');
		ref.remove();
	}
}])



.controller('SideCtrl', function($scope, $ionicActionSheet,$ionicSideMenuDelegate, $state){
=======
 
}

	//Menu Toggle
    $scope.toggleMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
}

>>>>>>> parent of 2d305b2... maps and insert working


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
				var ref = new Firebase("https://fmdevice.firebaseio.com/");
				ref.unauth();
				$state.go('facebook-sign-in');
			}
		});

	};
})

<<<<<<< HEAD


.controller('AddCtrl', ['$scope', '$firebaseArray','$ionicPopup', '$state', function($scope, $firebaseArray, $ionicSideMenuDelegate, $state, $ionicPopup, $location, $authClientProvider){

	
	//Model
	$scope.model = { name: 'model' };	
=======
.controller('AddCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray, $ionicSideMenuDelegate){

>>>>>>> parent of 2d305b2... maps and insert working

	//Define Firebase collection
	var ref = new Firebase("https://fmdevice.firebaseio.com/users/finds");
	$scope.finds = $firebaseArray(ref);

<<<<<<< HEAD
	$scope.loc = {};


=======
>>>>>>> parent of 2d305b2... maps and insert working
	$scope.addFind = function(){
		console.log('Adding find');
<<<<<<< HEAD

		if ($scope.model.nombre) { var nombre = $scope.model.nombre; } else { var nombre = null; }
		if ($scope.model.notas) { var notas = $scope.model.notas; } else { var notas = ''; }
		if ($scope.model.choice) { var avatar = $scope.model.choice; } else { var avatar = 'default.png'; }
		if ($scope.loc.latitude) { var lat = $scope.loc.latitude; } else { var lat = '19.390858961426655'; }
		if ($scope.loc.longitude) { var lgt = $scope.loc.longitude; } else { var lgt = '-99.14361265000002'; }
=======
		if ($scope.nombre) { var nombre = $scope.nombre; } else { var nombre = 'NOMBRE NULL'; }
		if ($scope.notas) { var notas = $scope.notas; } else { var notas = null; }
		if ($scope.foto) { var foto = $scope.foto; } else { var foto = 'http://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg'; }
		if ($scope.lugar) { var lugar = $scope.lugar; } else { var lugar = null; }
>>>>>>> parent of 2d305b2... maps and insert working

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
}])

=======
		console.log('Clearing all fields...');

		$scope.nombre = '';
		$scope.notas = '';
	}
>>>>>>> parent of 2d305b2... maps and insert working


.controller('WelcomeCtrl', function($scope, $ionicModal, $state){
	$scope.bgs = ["http://lorempixel.com/640/1136", "https://dl.dropboxusercontent.com/u/30873364/envato/ionFB/ion-fb-feed.gif"];

	// $scope.facebookSignIn = function(){
	// 	console.log("doing facebbok sign in");
	// 	var ref = new Firebase("https://fmdevice.firebaseio.com/");
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
		
	// };
})



.controller('CreateAccountCtrl', ['$scope', '$state', function($scope, $state, $authClientProvider){

	//Define Firebase collection
	var ref = new Firebase('https://fmdevice.firebaseio.com/users');


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

	function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
  }
}

	function doLogin(email, password) {
	var isNewUser = true;
	var ref = new Firebase('https://fmdevice.firebaseio.com/');
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


.controller('WelcomeBackCtrl', ['$scope', '$state', function($scope, $state, $authClientProvider){

	//Model
	$scope.model = { name: 'model' };	

	$scope.doLogIn = function(email, password) {
	var ref = new Firebase('https://fmdevice.firebaseio.com/users');
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
