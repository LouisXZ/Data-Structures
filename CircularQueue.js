class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    if (this.queue[this.write] !== null) {
      console.log(
        'The write pointer should not be allowed to move past the read pointer'
      );
      return null;
    } else {
      this.queue[this.write] = item;
      if (this.write + 1 <= this.max) {
        this.write++;
      } else {
        this.write = 0;
      }
      return item;
    }
  }
  // Only change code above this line

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read] = null;
      if (this.read + 1 <= this.max) {
        this.read++;
      } else {
        this.read = 0;
      }
      return item;
    } else {
      console.log(
        'the read pointer should not be able to advance past data you have written.'
      );
      return null;
    }
    // Only change code above this line
  }
}
