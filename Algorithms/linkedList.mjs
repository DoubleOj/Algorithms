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
  Apend(elem) {
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

      //if there is no tail then you would have to use head as a pointer and it would go like this:
      //first you set a variable to equal this.head:
      // current = this.head
      //then you would iterate through every element of the list until you reach the element that has next = null
      //let current;
      //   while (current.next) {
      //     current = current.next; <--- here we are setting current to our currents next value and then looping again
      //   }
      //once we find the last element that next is equal to null then we set the next of that elements next to our new elem
      //current.next = newElem;
      //then we xould increase size here:
      //this.size++
      //and this is why having a tail variable makes life so much easier 😜
    }
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
