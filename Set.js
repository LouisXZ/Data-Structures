function Set() {
  // the var collection will hold our set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };
  // this method will add an element to the set
  this.add = element => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = elem => {
    let idx = collection.indexOf(elem);
    if (idx !== -1) {
      collection.splice(idx, 1);
      return true;
    }
    return false;
  };

  this.size = () => collection.length;

  this.union = setB => {
    setB.values().forEach(element => {
      this.add(element);
    });
    return this;
  };

  this.intersection = setB => {
    let common = new Set();
    setB.values().forEach(element => {
      if (this.has(element)) {
        common.add(element);
      }
    });
    return common;
  };

  this.difference = setB => {
    let diffSet = new Set();
    this.values().forEach(element => {
      if (!setB.has(element)) {
        diffSet.add(element);
      }
    });
    return diffSet;
  };

  this.subset = setB => {
    return this.difference(setB).size() === 0;
  };
}
