class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
    this.previous = null;
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
      //set the head ro be the new elm
      this.head = newElem;
      //set the tail to be the new elem
      this.tail = newElem;
      //increase length of the list
      this.length++;
    }
    // if not empty then first we have to have a constant which is head and then set it to a variable called current
    else {
      // first we set the current tails next variable to our new elem and then we set the tail to the new elme
      this.tail.next = newElem;
      //set the previous to equal the current final element in the array
      newElem.previous = this.tail;
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
    //set the current heads previous to be equal to the new element
    this.head.previous = newElem;
    //then set the head to the new elem
    this.head = newElem;
    //increase length to match current list length
    this.length++;
  }
  //remove a specific element by value
  Remove(arg) {
    let current = this.head;
    let previous = null;
    let next = current.next;
    let max = this.length;
    let i = 1;
    let message = `could not remove element: ${arg} because there is no such element in the list`;
    while (i < max) {
      console.log(`loop number ${i} of ${max}`);
      if (current.elem === arg) {
        message = `removed element: ${arg} at index: ${i}`;
        this.size = max - 1;
        if (i === 0) {
          next.previous = null;
          current.next = null;
          this.head = next;
          break;
        } else if (i === max) {
          current.previous = null;
          previous.next = null;
          this.tail = previous;
          break;
        } else {
          current.next = null;
          current.previous = null;
          next.previous = previous;
          previous.next = next;
          break;
        }
      } else {
        if (i < max) {
          i++;
          previous = current;
          console.log("OG current: ");
          console.log(current);
          current = current.next;
          console.log(i);
          console.log(max);
          console.log("new current: ");
          console.log(current);
          //next?current.next ? null;
        } else if (i === max) {
          break;
        }
      }
    }
    console.log(message);
  }

  LogAll() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(`element: ${i}`);
      console.log(current);
      current = current.next;
    }
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
    return this.length;
  }
}
