"use strict";

const HashTable = require("../hashtable");

describe("hash table", () => {
  it("Adding a key/value to your hashtable ", () => {
    let hashtable = new HashTable(5);
    let expected = "qusai";
    hashtable.add("name", "qusai");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
  });

  it("Retrieving based on a key returns the value stored", () => {
    let hashtable = new HashTable(5);
    let expected = "qusai";
    hashtable.add("name", "qusai");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
    expect(hashtable.get("hi")).toEqual("not avaliable --");
  });

  it("Successfully handle a collision within the hashtable", () => {
    let hashtable = new HashTable(5);
    hashtable.add("name", "qusai");
    hashtable.add("mean", "thaer");

    let operation = hashtable.map[hashtable.hash("name")].head.next.value["mean"];
    expect(hashtable.contain("mean")).toBe(true);
    expect(operation).toEqual("thaer");
  });

  xit('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable = new HashTable(5);
    hashtable.add("name", "qusai");
    hashtable.add("mean", "thaer");

    let operation = hashtable.map[hashtable.hash("name")].head.next.value["mean"];
    expect(hashtable.get("mean")).toBe('thaer');
    expect(operation).toEqual("thaer");
  });

  it('Successfully hash a key to an in-range value',()=>{
    let hashtable = new HashTable(5);
    let min=0;
    let max=4;
    let key='qusai';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  })
});