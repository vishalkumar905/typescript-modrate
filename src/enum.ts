enum Role { ADMIN = 'ADMIN', AUTHOR = 'AUTHOR', READ_ONLY_USER = 'READ_ONLY_USER'};

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Jhon',
  age: 29,
  hobbies: ['Cricket', 'Basketball'],
  role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
  console.log('Yes is admin');
}