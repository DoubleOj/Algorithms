note on Append in linkedList.mjs:

if there is no tail then you would have to use head as a pointer and it would go like this:
first you set a variable to equal this.head:
current = this.head
then you would iterate through every element of the list until you reach the element that has next = null like so:
let current;
while (current.next) {
current = current.next;} <--- here we are setting current to our currents next value and then looping again
once we find the last element that next is equal to null then we set the next of that elements next to our new elem:
current.next = newElem;
then we would increase size here:
this.size++
and this is why having a tail variable which makes life so much easier 😜
