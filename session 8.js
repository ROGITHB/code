//? Day 8: Stacks & Queues
//? Session Overview:
//* Cover stack and queue operations, with applications in string and array problems.
//! Session Practice Questions (5-7):
//! Implement a stack using an array.
class Stack {
    constructor(size = +Infinity) {
      this.stack = [];
      this.top = -1;
      this.size = size;
    }
    isEmpty() {
      return this.top == -1;
    }
    isFull() {
      return this.top == this.size - 1;
    }
    push(value) {
      if (this.isFull()) {
        console.error("Stack Overflow");
        return;
      }
      this.top++;
      this.stack.push(value);
      return this.top;
    }
    pop() {
      if (this.isEmpty()) {
        console.error("Stack Underflow");
        return;
      }
      this.top--;
      return this.stack.pop();
    }
    peek() {
      if (this.isEmpty()) {
        console.warn("Stack is empty");
        return;
      }
      return this.stack[this.top];
    }
  }
  
  //! Check for balanced parentheses in an expression.
  function isBalanced(str) {
    console.log(str);
  
    const stack = [];
    const match = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (let ind = 0; ind < str.length; ind++) {
      let char = str[ind];
      if (char == "{" || char == "[" || char == "(") {
        stack.push(char);
      } else if (char == "}" || char == "]" || char == ")") {
        const shouldBe = match[char];
        if (stack.pop() !== shouldBe) {
          return false;
        }
      }
    }
    return stack.length == 0;
  }
  
   console.log(isBalanced(`(){}()[]}`));
  
  //! Reverse a string using a stack.
  function reverse(str) {
    const stack = new Stack();
    for (let ind = 0; ind < str.length; ind++) {
      stack.push(str[ind]);
    }
    let reversed = "";
    while (!stack.isEmpty()) {
      reversed += stack.pop();
    }
    return reversed;
  }
  
   console.log(reverse("Hello World!"));
  //! Implement a queue using two stacks.
  
  function getQueue() {
    const stack1 = new Stack();
    const stack2 = new Stack();
  
    return {
      enqueue: (value) => stack1.push(value),
      dequeue: () => {
        while (!stack1.isEmpty()) {
          stack2.push(stack1.pop());
        }
        const value = stack2.pop();
        while (!stack2.isEmpty()) {
          stack1.push(stack2.pop());
        }
        return value;
      },
      peek: () => {
        while (!stack1.isEmpty()) {
          stack2.push(stack1.pop());
        }
        const value = stack2.peek();
        while (!stack2.isEmpty()) {
          stack1.push(stack2.pop());
        }
        return value;
      },
    };
  }
  
  //! Find the next greater element for each array element.
  // [4,2,3,5,6,1,1,7,4] => [5,3,5,6,7,7,-1,-1]
  
  function nextGreaterElement(arr) {
    const res = Array(arr.length).fill(-1);
       for (let ind = 0; ind < arr.length; ind++) {
         for (let i = ind + 1; i < arr.length; i++) {
           if (arr[i] > arr[ind]) {
             res[ind] = arr[i];
             break;
           }
         }
       }
    const stack = new Stack();
    for (let ind = arr.length - 1; ind >= 0; ind--) {
      while (!stack.isEmpty() && stack.peek() <= arr[ind]) {
        stack.pop();
      }
      if (!stack.isEmpty()) res[ind] = stack.peek();
      stack.push(arr[ind]);
    }
  
    console.log(res);
  }
  
   console.log(nextGreaterElement([4, 2, 3, 5, 6, 1, 1, 7, 4]));
  
  //! Evaluate a postfix expression using a stack.
  
  function evaluatePostfix(str) {
    const stack = new Stack();
  
    for (let val of str.split(" ")) {
      if (Number.isNaN(+val)) {
        let x = stack.pop();
        let y = stack.pop();
        let res;
        switch (val) {
          case "+":
            res = y + x;
            break;
          case "-":
            res = y - x;
            break;
          case "*":
            res = y * x;
            break;
          case "/":
            res = y / x;
            break;
          default:
            res = 0;
            throw new Error("Invalid operator");
        }
        stack.push(res);
      } else {
        stack.push(+val);
      }
      }
      return stack.pop();
  }
   console.log(evaluatePostfix("1 2 3 4 + - +"));
  
  