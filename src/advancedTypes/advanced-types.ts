type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'João',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable1 = string | number;
type Numeric = number | boolean;

type Universal = Combinable1 & Numeric;

function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: Combinable1, b: Combinable1) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add1('João', 'Vitor');
// result.split(' ');

const fetchedUserDate = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserDate?.job?.title);

const userInput1 = null;

const storedDate = userInput1 ?? 'DEFAULT';

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name' > emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement> document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email'
}

const error2: ErrorContainer = {
  name: 'Not a valid name'
}
