import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let temp = this.head;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = new Node(value);
      this.tail = temp.nextNode;
    }
  }

  size() {
    let temp = this.head;
    let counter = 0;
    while (temp != null) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let temp = this.head;
    let counter = 0;
    while (temp !== null) {
      if (counter == index) return temp;
      temp = temp.nextNode;
      counter++;
    }
    return "There is no item for this index.";
  }

  // removes the last element from the list
  pop() {
    if (this.head == null) return null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      while (temp.nextNode.nextNode != null) temp = temp.nextNode;
      temp.nextNode = null;
      this.tail = temp;
    }
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let temp = this.head;
    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    let temp = this.head;
    let counter = 0;
    while (temp != null) {
      if (temp.value === value) return counter;
      temp = temp.nextNode;
      counter++;
    }
    return null;
  }

  // returns your LinkedList objects as strings in the format: `( value ) -> ( value ) -> ( value ) -> null`
  toString() {
    let temp = this.head;
    let result = "";
    while (temp !== null) {
      result += `(${temp.value}) -> `;
      temp = temp.nextNode;
    }
    result += "null"; // Append "null" after the loop ends
    return result;
  }

  // inserts a new node with the provided value at the given index or at the end of the list if index is bigger than list size
  insertAt(index, value) {
    if (index < 0) {
        throw new Error("Invalid index");
    }
    if (index === 0) {
        this.prepend(value);
    } else if (index >= this.size()) { 
        this.append(value);
    } else {
        const newNode = new Node(value);
        let temp = this.head;
        let counter = 0;
        while (counter < index - 1) {
            temp = temp.nextNode;
            counter++;
        }
        newNode.nextNode = temp.nextNode;
        temp.nextNode = newNode;
    }
}


  //  removes the node at the given index or error message if the list is empty or if the request index is bigger than list size
  removeAt(index) {
    if (this.head === null) throw new Error("List is empty");
    if (index < 0 || index >= this.size()) throw new Error("Invalid index");
    if (index === 0) this.head = this.head.nextNode;
    else {
      let temp = this.head;
      let counter = 0;
      while (counter < index - 1) {
        temp = temp.nextNode;
        counter++;
      }
      temp.nextNode = temp.nextNode.nextNode;
      if (temp.nextNode === null) this.tail = temp;
    }
  }
}

// Tests
const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(linkedList.size()); // 3
console.log(linkedList.getHead()); // return head Node
console.log(linkedList.getTail()); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(4)); // There is no item for this index
linkedList.pop();
console.log(linkedList.toString()); // (test1) -> (test2) -> null
console.log(linkedList.contains("test1")); // true
console.log(linkedList.find("test2")); // 1
linkedList.prepend("test3");
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null
linkedList.insertAt(2, "test4");
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> null
linkedList.insertAt(8, "test5");
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> (test5) -> null
linkedList.removeAt(2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null
