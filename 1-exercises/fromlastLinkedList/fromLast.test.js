const solutions = require("./index");
const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

for (let sol of solutions) {
  let fromLast = sol;

  test("fromLast is a function", () => {
    expect(typeof fromLast).toEqual("function");
  });

  test("fromLast returns the node n elements from the end", () => {
    const l = new List();

    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    l.insertLast("e");

    expect(fromLast(l, 3).data).toEqual("b");
  });
}
