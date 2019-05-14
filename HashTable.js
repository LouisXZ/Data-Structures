var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = (key, value) => {
    let obj = {};
    let hashKey = hash(key);
    if (hashKey in this.collection === false) {
      obj[key] = value;
    } else {
      obj = this.collection[hashKey];
      obj[key] = value;
    }
    this.collection[hashKey] = obj;
  };

  this.remove = key => {
    let obj = {};
    let hashKey = hash(key);
    if (hashKey in this.collection) {
      obj = this.collection[hashKey];
      if (key in obj) {
        delete obj[key];
        this.collection[hashKey] = obj;
      }
    }
  };

  this.lookup = key => {
    let obj = {};
    let hashKey = hash(key);
    if (hashKey in this.collection) {
      obj = this.collection[hashKey];
      if (key in obj) {
        return obj[key];
      }
    }
    return null;
  };
  // change code above this line
};
