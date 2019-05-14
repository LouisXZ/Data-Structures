function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.head = function() {
    return head;
  };

  this.size = function() {
    return length;
  };

  this.add = function(element) {
    // Only change code below this line
    let node = new Node(element);
    let current = new Node();
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
    return;
    // Only change code above this line
  };
}
