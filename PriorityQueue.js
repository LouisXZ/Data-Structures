function PriorityQueue() {
    this.collection = [];
    this.printCollection = function() {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = arr => {
        const [a, b] = arr;

        if (this.collection.length === 0) {
            this.collection.push(arr);
            return;
        }
        if (b < this.collection[0][1]) {
            this.collection.unshift(arr);
            return;
        }
        for (let i = this.collection.length - 1; i >= 0; i--) {
            if (b >= this.collection[i][1]) {
                this.collection.splice(i + 1, 0, arr);
                return;
            }
        }
    };

    this.dequeue = () => this.collection.shift()[0];
    this.size = () => this.collection.length;
    this.front = () => this.collection[0];
    this.isEmpty = () => this.collection.length === 0;

    // Only change code above this line
}
  