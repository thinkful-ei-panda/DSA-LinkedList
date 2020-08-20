class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};
class LinkedList {
    constructor() {
        this.head = null;
    };
    // Value/Item
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    };
    insertLast(item) {
        if(this.head === null) {
            this.head = new _Node(item, null);
        }
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new _Node(item, null);
        };
    };
    // Check if head is null
    // Start from head
    // Move through the linked list until you find the next node with the value
    insertBefore(item, value) {
        if(this.head === null) {
            this.head = new _Node(item, null);
        };
        // else if(this.head.value === value) {
        //     let insertNode = new _Node(item, this.head);
        // }
        let currentNode = this.head;
        while((currentNode.next !== null) && (currentNode.next.value !== value)) {
            currentNode = currentNode.next;
        };
        if (currentNode.next === null) {
            return 'Item not found'
        };
        if (currentNode.next.value === value) {
            let tempNode = new _Node(item, currentNode.next);
            currentNode.next = tempNode;
        };
    };
    insertAfter(item, value) {
        if(this.head === null) {
            this.head = new _Node(item, null);
        };
        let currentNode = this.head;
        let tempNode = new _Node(item, null);
        if(this.head.value === value) {
            tempNode.next = this.head.next;
            this.head.next = tempNode;
        }
        while((currentNode.value !== value)) {
            currentNode = currentNode.next;
        };
        if (currentNode.value === null) {
            return 'Item not found'
        };
        if (currentNode.value === value) {
            tempNode.next = currentNode.next;
            currentNode.next = tempNode;
        };
    };
    insertAt(item, position) {
        if(this.head === null) {
            this.head = new _Node(item, null);
        };
        let currentNode = this.head;
        let previousNode = this.head;
        let tempNode = new _Node(item, null);
                            // 3
        for (let i = 1; i < position; i++) {
            if(currentNode === null) {
                throw new Error('Invalid position')
            }
            else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            };
        };
        previousNode.next = tempNode;
        tempNode.next = currentNode;
    };
    find(item) {
        let currentNode = this.head;
        if(this.head === null) {
            return null;
        };
        while(currentNode.value !== item) {
            if(currentNode.next === null) {
                return null;
            }
            else {
                currentNode = currentNode.next;
            };
        };
        return currentNode;
    };
    remove(item) {
        if(this.head === null) {
            return null;
        };
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        };
        let currentNode = this.head;
        let previousNode = this.head;
        while((currentNode !== null) && (currentNode.value !== item)) {
            currentNode = currentNode.next;
            previousNode = currentNode;
        }
        if(currentNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currentNode.next;
    };
};
module.exports = LinkedList;