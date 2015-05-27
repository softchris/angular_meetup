angular
	.module('app')
	.controller("CarCtrl", CarCtrl);

function CarCtrl($scope, $firebaseArray){
	var ref = new Firebase("https://incandescent-inferno-9878.firebaseio.com/cars");
    $scope.cars = $firebaseArray(ref);

	function addCarsToFirebaseArray(){
		$scope.cars.$add({ name : 'Ferrari', year : 1990 });
	    $scope.cars.$add({ name : 'rosche', year : 2001 });
	    $scope.cars.$add({ name : 'BMW', year : 1997 });	
	}
	
	function addCarsToArrayByRef(){
		var keyToAddedRecord =  ref.push({
				volvo : {
					name : 'V70',
					year : 2010
				}
		}).key();
		
		ref
			.child(keyToAddedRecord)
			.on('value', function(snapshot){
				var myAddedCar = snapshot.val();
			});
	}
	
    function replaceContent(){
		ref.set({
			ferrari : { name : 'Ferrari', year : 1990 },
			ferrariF40 : { name : 'FerrariF40', year : 1989 },
			lamborghini : { name : 'Lamborghi Diablo', year : 2001 }
		});
	}
	
	function updateRecord(){
		ref.child('ferrariF40')
			.update({ color : "Red", year : 1991 });			
	}
		
	function queries(){
		ref.on('value', function(snapshot){
				// all data
				console.log('-- ALL DATA --');
				snapshot.forEach(function(car){
					console.log(car.val());
				});
			});
		
		    var queryRef = ref.orderByChild('year').limitToLast(2);
			
			queryRef.on('value', function (snapshot) {
				console.log('-- TWO ENTITIES, BY YEAR --'); 
		        snapshot.forEach(function(car){
					console.log(car.val());
				});
		    });
			
			// one call to this for every record... tedious
			queryRef.on('child_added', function (snapshot) {
				console.log('-- TWO ENTITIES, BY YEAR --'); 
		        snapshot.forEach(function(car){
					console.log(car.val());
				});
		    });
	}					   
}
