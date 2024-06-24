"use strict";

// 1. Object Methods and this
const person = {
    name: "Omar",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  // 2. Event Handlers and this
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    // Use call() to explicitly bind this to the person object
    // this.greet.call(person);
    person.greet();
  
    // 3. Private Data with Closures and this
    const createCounter = (function() {
      let count = 0;
      return {
        increment: function() {
          count++;
          console.log(`New count: ${count}`);
        },
        getCount: function() {
          return count;
        }
      };
    })();
  
    createCounter.increment(); 
    createCounter.increment(); 
  
    // 4. Reusable Component with Closure and this
    const createTimer = (function() {
      const timerElement = document.getElementById('timer');
  
      return function(duration) {
        let remainingTime = duration;
  
        const timer = setInterval(() => {
          timerElement.textContent = remainingTime;
          remainingTime--;
  
          if (remainingTime === 0) {
            clearInterval(timer);
            console.log("Timer finished!");
          }
        }, 1000);
      };
    })();
  
    createTimer(5); 
  });