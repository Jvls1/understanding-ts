class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('1', 'Accounting');
accounting.addEmployee('João');
accounting.addEmployee('Vitor');

// accounting.employees[2] = 'JowJow';

accounting.describe();
accounting.printEmployeeInformation();

// console.log(accounting);

// const accountingCopy = { name: 'test', describe: accounting.describe };

// accountingCopy.describe();