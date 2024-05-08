import { anagrams1, anagrams2 } from "./index";

describe("Anagrams", () => {
  [anagrams1, anagrams2].forEach((anagram) => {
    it("anagrams function exists", () => {
      expect(typeof anagram).toEqual("function");
    });

    it('"hello" is an anagram of "llohe"', () => {
      expect(anagram("hello", "llohe")).toBeTruthy();
    });

    it('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
      expect(anagram("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
    });

    it('"One One" is not an anagram of "Two two two"', () => {
      expect(anagram("One One", "Two two two")).toBeFalsy();
    });

    it('"One one" is not an anagram of "One one c"', () => {
      expect(anagram("One one", "One one c")).toBeFalsy();
    });

    it('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
      expect(anagram("A tree, a life, a bench", "A tree, a fence, a yard")).toBeFalsy();
    });
  });
});
