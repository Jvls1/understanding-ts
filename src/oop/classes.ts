abstract class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(): void {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.lastReport = value;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('2', []);
    return this.instance;
  }

  describe(): void {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === 'João') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('João');

const itDepartment = new ITDepartment('1', ['João']);
itDepartment.addEmployee('João');
itDepartment.addEmployee('Vitor');

// itDepartment.employees[2] = 'JowJow';

itDepartment.describe();
itDepartment.printEmployeeInformation();

console.log(itDepartment);

const accounting = AccountingDepartment.getInstance();

accounting.addReport('Somenthing went wrong...');

accounting.addEmployee('João');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
// const accountingCopy = { name: 'test', describe: accounting.describe };

// accountingCopy.describe();