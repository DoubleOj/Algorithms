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

Head() Tail() and Length() are basically getters

Remove(elem):
to remove a element from the array you have to remove all the pointers that point to that element
first you have to create a loop that starts with current value equal to the head of the list and should be able to iterate the length of the list by using the next value of the current element and then comparing the chosen element to the current elements elem value then we have a if statement: if the the argument passed is equal to the current element then we set the next and previous elements to null and we set the element that precedes (unless it is the head then you keep it null)its next to the removed elements next and that ones previous to the removed elements previous lik so:
before removal:
~<--previous--elemntPrev--next--><--previous--element to be removed--next--><--previous--elementNext--next-->~
after removal:
~<--previous--elemntPrev--next--><--previous--elementNext--next-->~
null<--previous--element to be removed--next-->null
