interface AddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class PersonOOP implements Greetable {
  name?: string;

  constructor(name: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1 = new PersonOOP('João');