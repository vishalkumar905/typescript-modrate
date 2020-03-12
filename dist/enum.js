"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role["READ_ONLY_USER"] = "READ_ONLY_USER";
})(Role || (Role = {}));
;
var person = {
    name: 'Jhon',
    age: 29,
    hobbies: ['Cricket', 'Basketball'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('Yes is admin');
}
