import { fromLast1, fromLast2 } from "./index";

import { LinkedList as List, Node, TNode } from "./linkedlist";

describe("from last linked list", () => {
  [fromLast1, fromLast2].forEach((fromLast) => {
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

      expect((fromLast(l, 3) as TNode).data).toEqual("b");
    });
  });
});
