"use strict";

class Human {
    constructor() {
      this.decision = 'Human'
    }
}

class User {
  constructor(name, surname  ){
    this.name = '- ' + name;
    this.surname = '- ' + surname;
  }
  get fullName(){
    return this.surname +" "+ this.name;
  }

  test (){
    return 'test' +
  }

};

let user1 = new User('вася', 'наумов');
let user2 = new User('дима', 'чкалов');
let user3 = new User('саша', 'сидоров');

console.log(user1.fullName)
console.log(user2.fullName)
console.log(user3.fullName)
console.log(user3.test())
