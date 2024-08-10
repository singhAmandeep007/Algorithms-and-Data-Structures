# Algorithms and Data Structures

This repository contains solution to many of the
popular algorithms and data structures related problems.

Each problem has explanations and multiple solutions.

## Data Structures

A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data.

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations.

## Solutions

<details>
	<summary> Miscellaneous Collection of Problems.
 </summary>

### Problems

| No. | Title                                                                                    | Difficulty | Topics             |
| --: | :--------------------------------------------------------------------------------------- | :--------- | :----------------- |
|   1 | [Reverse String](/js/excercises/reversestring/)                                          | Easy       |                    |
|   2 | [Palindromes](/js/excercises/palindrome)                                                 | Easy       |                    |
|   3 | [Reverse Integer](/js/excercises/reverseint)                                             | Easy       |                    |
|   4 | [Max Chars](/js/excercises/maxchar)                                                      | Easy       |                    |
|   5 | [Classic FizzBuzz](/js/excercises/fizzbuzz)                                              | Easy       |                    |
|   6 | [Array Chunk](/js/excercises/chunk)                                                      | Easy       |                    |
|   7 | [Anagrams](/js/excercises/anagrams)                                                      | Easy       |                    |
|   8 | [Sentence Capitalization](/js/excercises/capitalize)                                     | Easy       |                    |
|   9 | [Printing Steps](/js/excercises/steps)                                                   | Easy       |                    |
|  10 | [Two-Sided Steps- Pyramids](/js/excercises/pyramid)                                      | Medium     |                    |
|  11 | [Find The Vowels](/js/excercises/vowels)                                                 | Easy       |                    |
|  12 | [Matrix Spiral](/js/excercises/matrix)                                                   | Medium     |                    |
|  13 | [Events](/js/excercises/events)                                                          | Easy       |                    |
|  14 | [Fibonacci Series](/js/excercises/fib)                                                   | Easy       |                    |
|  15 | [Queue](/js/excercises/queue)                                                            | Easy       |                    |
|  16 | [Weaving Queue](/js/excercises/weave)                                                    | Easy       |                    |
|  17 | [Stack](/js/excercises/stack)                                                            | Easy       |                    |
|  18 | [Queue Using Stack](/js/excercises/qfroms)                                               | Easy       |                    |
|  19 | [Linked List](/js/excercises/linkedlist)                                                 | Medium     |                    |
|  20 | [Midpoint In Linked List](/js/excercises/midpointInLinkedList)                           | Easy       | 2 pointers         |
|  21 | [Check If Circular Linked List](/js/excercises/circularLinkedList)                       | Easy       | 2 pointers         |
|  22 | [Get Node from N position from Last Node Linked List](/js/excercises/fromLastLinkedList) | Easy       | 2 pointers         |
|  23 | [Building a Tree](/js/excercises/tree)                                                   | Easy       |                    |
|  24 | [Finding the width at each level in a tree](/js/excercises/levelWidth)                   | Medium     |                    |
|  25 | [Binary Search tree](/js/excercises/bst)                                                 | Medium     |                    |
|  26 | [Default Arguments](/js/excercises/defaultArgs)                                          | Medium     | closures           |
|  27 | [8 Queens](/js/excercises/8queens)                                                       | Medium     | backtracking       |
|  28 | [Stocks Profit](/js/excercises/profitsTarget)                                            | Medium     | hashing            |
|  29 | [Efficient Teams](/js/excercises/efficientTeams)                                         | Medium     | dp,pattern problem |

</details>

## Setup to run tests

### js

1. Setup the environment
   1. Install Node.js > 21.7.1
   2. `cd js`
   3. `npm install`
2. Run tests
   1. `npm test`

### python

1. Setup the environment and run tests
   1. Install Conda > 24.1.2
   2. `cd python`
   3. `conda env create -f environment.yml`
   4. `conda activate algoriths-and-data-structures`
   5. `pytest -vv -s`
2. Run tests
   1. `pytest -vv -s --html=report.html --self-contained-html`
3. Update environment.yml
   1. `conda env export > environment.yml`
