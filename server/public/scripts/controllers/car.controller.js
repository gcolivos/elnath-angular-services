app.controller('CarController', ['CarService', function(CarService){
    var self = this;
    self.message = 'What about them tacos??';
    self.cars = CarService.cars;

    self.addNewCar = CarService.addNewCar
    self.newCar = CarService.newCar
    console.log(self.cars);
}]);