class Collection extends Array {
    mapBy(property) {
        return this.map(item => item[property]);
    }

    findBy(property, value) {
        return this.find(item => item[property] === value);
    }

    filterBy(property, value) {
        return this.filter(item => item[property] === value);
    }

    rejectBy(property, value) {
        return this.filter(item => item[property] !== value);
    }

    sortBy(property) {
        return this.slice().sort((a, b) => {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
        });
    }

    get firstObject() {
        return this[0];
    }

    get lastObject() {
        return this[this.length - 1];
    }
    Stack = class {
        constructor(initialElements = []) {
          this.stack = [...initialElements];
        }
      
        // 요소 추가
        push(element) {
          this.stack.push(element);
        }
      
        // 마지막 요소 꺼내기
        pop() {
          if (this.isEmpty()) {
            throw new Error('Stack is empty');
          }
          return this.stack.pop();
        }
      
        // 스택이 비었는지 확인
        isEmpty() {
          return this.stack.length === 0;
        }
    }
      
      
    Queue = class {
        constructor(initialElements = []) {
          this.queue = [...initialElements];
        }
      
        // 요소 추가
        enqueue(element) {
          this.queue.push(element);
        }
      
        // 가장 오래된 요소 꺼내기
        dequeue() {
          if (this.isEmpty()) {
            throw new Error('Queue is empty');
          }
          return this.queue.shift();
        }
      
        // 큐가 비었는지 확인
        isEmpty() {
          return this.queue.length === 0;
        }
    }
}