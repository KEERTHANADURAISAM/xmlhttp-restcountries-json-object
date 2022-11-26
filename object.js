const object1 = {
  name: "person 1",
  age: "25",
};

const object2 = {
 age: "25",
 name: "person 1"
};

JSON.stringify(object1) ===
  JSON.stringify(object2)
    // false

    .isEqual(object1, object2);
// true
//   If sequence is not going to change than JSON.stringify()
//  will be fast as compared to Lodash isEqual() method
