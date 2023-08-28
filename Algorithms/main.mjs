import binarySearch from "./binarySearch.mjs";
import linSearch from "./LinearSearch.mjs";
import { linkedList } from "./linkedList.mjs";
let arr1 = [1, 2, 3, 4, 5]; //sorted odd easy
let arr2 = [15, 22, 43, 56, 62, 78, 89, 94, 107, 118]; //sorted even medium

console.log("-----linear search results-----");
console.log(linSearch(3, arr1));
console.log(linSearch(6, arr1));
console.log(linSearch(107, arr2));
console.log(linSearch(100, arr2));

console.log("-----binary search results-----");
console.log(binarySearch(5, arr1));
console.log(binarySearch(6, arr1));
console.log(binarySearch(62, arr2));
console.log(binarySearch(15, arr2));
console.log(binarySearch(107, arr2));
console.log(binarySearch(24, arr2));

console.log("-----linked list-----");
//let list1 = new linkedList("list1");
//let list2 = new linkedList("list2")
let list3 = new linkedList();
//list1.Head();
//list2.Head();
list3.Add("elem1");
list3.Add("elem2");
list3.Head();
list3.Tail();
list3.Size();
