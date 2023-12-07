// const person: {
//   name: string,
//   age: number
// } = {
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'João',
//   age: 20,
//   hobbies: ['Games', 'Animes'],
//   role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };
const person = {
  name: 'João',
  age: 20,
  hobbies: ['Games', 'Animes'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Games'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.ADMIN) {
  console.log('is Admin');
}