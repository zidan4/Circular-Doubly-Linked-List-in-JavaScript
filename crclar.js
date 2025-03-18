
const cdll = new CircularDoublyLinkedList();

cdll.append(10);
cdll.append(20);
cdll.append(30);
cdll.append(40);

console.log("Forward Traversal:");
cdll.displayForward();  // Output: 10 <-> 20 <-> 30 <-> 40 <-> (back to head)

console.log("\nBackward Traversal:");
cdll.displayBackward();  // Output: 40 <-> 30 <-> 20 <-> 10 <-> (back to tail)

console.log("\nDeleting node 20...");
cdll.delete(20);
cdll.displayForward();  // Output: 10 <-> 30 <-> 40 <-> (back to head)

console.log("\nCycle detected:", cdll.detectCycle()); // Output: true
