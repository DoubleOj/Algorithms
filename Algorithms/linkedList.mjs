class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
  }
}

export class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  //this function adds a new element to our link list
  Append(elem) {
    // creating a new instant on Node
    let newElem = new Node(elem);
    //first check if the list is empty and if yes set the new elem to be the head and tail
    if (this.head === null) {
      this.head = newElem;
      this.tail = newElem;
      this.size++;
    }
    // if not empty then first we have to have a constant which is head and then set it to a variable called current
    else {
      // first we set the current tails next variable to our new elem and then we set the tail to the new elme
      this.tail.next = newElem;
      this.tail = newElem;
      this.size++;
    }
    //see README for some notes on Append()
  }
  //takes the new element and sets it to the head of the list
  Prepend(elem) {
    //make a new elem instance
    let newElem = new Node(elem);
    //first set the next of new elem equal to the current head
    newElem.next = this.head;
    //then set the head to the new elem
    this.head = newElem;
  }
  //prints out the heads elem
  Head() {
    console.log(this.head.elem);
  }
  //prints out the tails elem
  Tail() {
    console.log(this.tail.elem);
  }
  //prints out the
  Size() {
    console.log(this.size);
  }
}
