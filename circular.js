
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // Append a node at the end
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
            return;
        }
        let last = this.head.prev;
        last.next = newNode;
        newNode.prev = last;
        newNode.next = this.head;
        this.head.prev = newNode;
    }

    // Display list forward
    displayForward() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let temp = this.head;
        do {
            process.stdout.write(temp.data + " <-> ");
            temp = temp.next;
        } while (temp !== this.head);
        console.log("(back to head)");
    }

    // Display list backward
    displayBackward() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let temp = this.head.prev;
        do {
            process.stdout.write(temp.data + " <-> ");
            temp = temp.prev;
        } while (temp !== this.head.prev);
        console.log("(back to tail)");
    }

    // Delete a node by value
    delete(data) {
        if (!this.head) return;

        let temp = this.head;
        do {
            if (temp.data === data) {
                if (temp.next === this.head && temp.prev === this.head) { // Only one node
                    this.head = null;
                    return;
                }

                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;

                if (temp === this.head) {
                    this.head = temp.next;
                }
                return;
            }
            temp = temp.next;
        } while (temp !== this.head);
    }

    // Detect Cycle (always true for circular lists)
    detectCycle() {
        return !!this.head;
    }
}
