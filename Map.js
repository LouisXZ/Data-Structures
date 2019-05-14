var Map = function() {
  this.collection = {};
  // change code below this line
  this.add = (key, value) => (this.collection[key] = value);

  this.remove = key => delete this.collection[key];

  this.get = key => this.collection[key];

  this.has = key => (key in this.collection ? true : false);

  this.values = () => Object.values(this.collection);

  this.size = () => Object.keys(this.collection).length;

  this.clear = () => {
    for (let key in this.collection) {
      delete this.collection[key];
    }
  };

  // change code above this line
};
