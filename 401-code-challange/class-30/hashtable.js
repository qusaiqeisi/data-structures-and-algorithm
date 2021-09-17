"use strict";

const LinkedList = require("./linkedlist");

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, cur) => {
        return acc + cur.charCodeAt(0);
      }, 0) *
        21) %
      this.size
    );
  }

  add(key, value) {
    let hash = this.hash(key);
    console.log(hash);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let entry = { [key]: value };
    this.map[hash].append(entry);
  }

  get(key) {
    let hash = this.hash(key);

    if (!this.map[hash]) return "not avaliable --";

    let index = this.map[hash];
    let current = index.head;
    if (current.value[key]) return current.value[key];

    while (current.next) {
      current = current.next;
      if (current.value[key]) return current.value[key];
    }
  }

  contain(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;

    let index = this.map[hash];

    if (!index.head) {
      return false;
    } else {
      let current = index.head;
      if (current.value[key]) return true;

      while (current.next) {
        current = current.next;
        if (current.value[key]) return true;
      }
    }
  }
}

const hashmap = new HashTable(1024);
hashmap.add("name", "qusai");
hashmap.add("age", 23);
hashmap.add("cat", "Kitty");
hashmap.add("act", "Jonny Depp");
console.log("hashmap", hashmap);
console.log("name", hashmap.map[565]);
console.log("age", hashmap.map[177]);
console.log("cat", hashmap.map[408]);
console.log('act',hashmap.map[408].head.next);
console.log("get method", hashmap.get("act"));
console.log("get method", hashmap.contain("age"));

module.exports = HashTable;