//? Day 9: Linked Lists
//? Session Overview:
//* Introduce linked lists and basic operations like insertion, deletion, and traversal.
//! Session Practice Questions (5-7):
//* Insert a node at the beginning of a linked list.
//* Delete the last node in a linked list.

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    }
    insertLast(data) {
      if (this.head == null) {
        this.head = new Node(data);
      } else {
        let curr = this.head;
  
        while (curr.next != null) {
          curr = curr.next;
        }
        curr.next = new Node(data);
      }
    }
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    insert(data, posFirst = false) {
      if (posFirst) {
        this.insertFirst(data);
      } else {
        this.insertLast(data);
      }
    }
  
    traverse() {
      let arr = [];
      let curr = this.head;
      while (curr != null) {
        arr.push(curr.data);
        curr = curr.next;
      }
      console.log(arr);
      return arr;
    }
  
    deleteLast() {
      if (this.head == null) return;
      if (this.head.next == null) {
        this.head = null;
        return;
      }
      let curr = this.head;
      while (curr.next.next != null) {
        curr = curr.next;
      }
      curr.next = null;
    }
  
    reverse() {
      let curr = this.head;
  
      let prev = null;
      let x = null;
  
      while (curr != null) {
        x = curr.next;
        curr.next = prev;
        prev = curr;
        curr = x;
      }
      this.head = prev;
    }
  
    middleElement() {
      let fast = this.head;
      let slow = this.head;
      while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
      }
      return slow;
    }
  
    makeCycle(ind = Math.floor(Math.random() * 10)) {
      let curr = this.head;
      let x = null;
      let i = 0;
      while (curr.next != null) {
        i++;
        if (i == ind) x = curr;
        curr = curr.next;
      }
      curr.next = x;
    }
  
    detectCycle() {
      let fast = this.head;
      let slow = this.head;
  
      while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
          return true;
        }
      }
      return false;
    }
  
    removeDuplicates() {
      let fast = this.head;
      let slow = this.head;
      while (fast != null) {
        if (fast.data != slow.data) {
          slow = slow.next;
          slow.data = fast.data;
        }
        fast = fast.next;
      }
      slow.next = null;
    }
  }
  
  function merge(list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;
    const combinedList = new LinkedList();
    while (list1 != null && list2 != null) {
      if (list1.data < list2.data) {
        combinedList.insert(list1.data);
        list1 = list1.next;
      } else {
        combinedList.insert(list2.data);
        list2 = list2.next;
      }
    }
    while (list2 != null) {
      combinedList.insert(list2.data);
      list2 = list2.next;
    }
    while (list1 != null) {
      combinedList.insert(list1.data);
      list1 = list1.next;
    }
    return combinedList;
  }
  
  const myList2 = new LinkedList();
  let last = 0;
  for (let ind = 0; ind < 10; ind++) {
    last = last + (Math.random() < 0.5 ? 0 : +Math.floor(Math.random() * 100));
    myList2.insert(last);
  }
  last = 0;
  const myList1 = new LinkedList();
  for (let ind = 0; ind < 10; ind++) {
    last = last + (Math.random() < 0.5 ? 0 : +Math.floor(Math.random() * 100));
    myList1.insert(last);
  }
  
  myList1.traverse();
  myList2.traverse();
  const combined = merge(myList1.head, myList2.head);
  combined.traverse();
  
  //* Reverse a linked list iteratively.
  //* Find the middle node of a linked list.
  //* Detect a cycle in a linked list using fast and slow pointers.
  //* Merge two sorted linked lists.
  //* Remove duplicates from a sorted linked list.
  // todo Post-Session Practice Questions (10):
  // todo Reverse a linked list recursively.
  // todo Check if a linked list is a palindrome.
  // todo Remove the n-th node from the end of a linked list.
  // todo Find the intersection point of two linked lists.
  // todo Flatten a multilevel doubly linked list.
  // todo Add two numbers represented by linked lists.
  // todo Partition a linked list around a value x.
  // todo Clone a linked list with random pointers.
  // todo Split a linked list into two halves.
  // todo Sort a linked list using merge sort.
  
  // ? Additional Resource (Doubly Linked List)
  
  // class Node {
  //   constructor(data, prev = null, next = null) {
  //     this.data = data;
  //     this.prev = prev;
  //     this.next = next;
  //   }
  // }
  // class DoublyLinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //   }
  //   insertLast(data) {
  //     if (this.head == null) {
  //       this.tail = this.head = new Node(data);
  //     } else {
  //       let curr = this.tail;
  //       curr.next = new Node(data, curr);
  //       curr.next.prev = curr;
  //       this.tail = curr.next;
  //     }
  //   }
  //   insertFirst(data) {
  //     let newNode = new Node(data, null, this.head);
  //     this.head.prev = newNode;
  //     this.head = newNode;
  //   }
  
  //   insert(data, posFirst = false) {
  //     if (posFirst) {
  //       this.insertFirst(data);
  //     } else {
  //       this.insertLast(data);
  //     }
  //   }
  
  //   traverse(fromTail = false) {
  //     let curr = fromTail ? this.tail : this.head;
  //     while (curr != null) {
  //       console.log(curr.data);
  //       curr = fromTail ? curr.prev : curr.next;
  //     }
  //   }
  // }