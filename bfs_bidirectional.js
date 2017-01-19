const Person = function (name) {
  this.name = name;
  this.friends = [];
}

Person.prototype.addFriend = function (friend) {
  this.friends.push(friend);
}

const befriend = function (a, b) {
  a.addFriend(b);
  b.addFriend(a);
}

// push all friends of a person into a set
const getFriends = function (people) {
  const allFriends = new Set();
  people.forEach((person) => {
    person.friends.forEach((friend) => {
      allFriends.add(friend);
    })
  });
  return allFriends;
}

const intersection = function (setA, setB) {
  // set smaller set as Set A
  if (setA.size > setB.size) {
    let temp = setA;
    setA = setB;
    setB = temp;
  }

  for (var item of setA) {
    if (setB.has(item)) {
      return true;
    }
  }
  return false;
}

const getDegrees = function (a, b) {
  if (a === b) {
    return 0;
  }

  let friendsA = new Set([a]);
  let friendsB = new Set([b]);
  let depth = 1;

  while (friendsA.size > 0 && friendsB.size > 0) {
    friendsA = getFriends(friendsA);
    // if common friend found, return
    if (intersection(friendsA, friendsB)) {
      return depth;
    } 
    depth++;
    
    friendsB = getFriends(friendsB);
    if (intersection(friendsA, friendsB)) {
      return depth;
    } 
    depth++;
  }

  return -1;
}


let joe = new Person('joe');
let frank = new Person('frank'); 
let harry = new Person('harry'); 
let joanie = new Person('joanie');
let harriet = new Person('harriet');
let carrie = new Person('carrie');

befriend(joe, frank); // joe <--> frank
befriend(frank, joanie); // joe <--> frank <--> joanie
befriend(joanie, carrie); // joe <--> frank <--> joanie <--> carrie
befriend(carrie, harriet); // joe <--> frank <--> joanie <--> carrie <--> harriet

console.assert(getDegrees(joe, joe) === 0, 'should be no degrees of separation');
console.assert(getDegrees(joe, frank) === 1, 'should be 1 degree of separation');
console.assert(getDegrees(joe, joanie) === 2, 'should be 2 degrees of separation');
console.assert(getDegrees(joe, carrie) === 3, 'should be 3 degrees of separation');
console.assert(getDegrees(joe, harriet) === 4, 'should be 4 degrees of separation');
console.assert(getDegrees(frank, joe) === 1, 'should be 1 degree of separation');
console.assert(getDegrees(joanie, joe) === 2, 'should be 2 degrees of separation');
console.assert(getDegrees(carrie, joe) === 3, 'should be 3 degrees of separation');
console.assert(getDegrees(harriet, joe) === 4, 'should be 4 degrees of separation');

