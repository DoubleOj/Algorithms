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
    this.length = 0;
  }
  //this function adds a new element to our link list
  Append(elem) {
    // creating a new instant on Node
    let newElem = new Node(elem);
    //first check if the list is empty and if yes set the new elem to be the head and tail
    if (this.head === null) {
      this.head = newElem;
      this.tail = newElem;
      this.length++;
    }
    // if not empty then first we have to have a constant which is head and then set it to a variable called current
    else {
      // first we set the current tails next variable to our new elem and then we set the tail to the new elme
      this.tail.next = newElem;
      //then we set tail to be our new element
      this.tail = newElem;
      //then increase list length
      this.length++;
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
    //increase length to match current list length
    this.length++;
  }
  //gets the local head and returns that value
  Head() {
    return this.head.elem;
  }
  //gets the local tail and returns that value
  Tail() {
    return this.tail.elem;
  }
  //gets the local size and returns that value
  Length() {
    return this.size;
  }
}
