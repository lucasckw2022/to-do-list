# Offsite Test
* Please answer ONE question from section A and ONE question from section B.

* You must use javascript to complete this test.

* Please send back the full project source code, including the required framework,
that could demonstrate the function.

* Please provide the steps to execute the program, if there is any special procedures.

* We are expecting the candidates could return their solutions 1 week after receiving this test, feel free to let us know if it is not feasible.

# Section A - Brain Teasers

### Question 1 - Compute recursive digits sum of X
**Examples**

When X = 23935198273,
```
23935198273
-> 2 + 3 + 9 + 3 + 5 + 1 + 9 + 8 + 2 + 7 + 3
-> 52
-> 5 + 2
-> 7
```

### Question 2 - Compute to N

Given the digits 123456789, build an expression by inserting "+" or "-" anywhere BETWEEN the digits so that it results to N.
Your answer should return all possible combinations.

**Examples**

When N = 50,
```
1 + 2 + 3 + 4 - 56 + 7 + 89
1 + 2 + 3 - 4 + 56 - 7 + 8 - 9
1 + 2 + 34 - 5 - 6 + 7 + 8 + 9
1 + 2 + 34 - 56 + 78 - 9
1 + 2 - 3 + 4 + 56 + 7 - 8 - 9
1 + 2 - 34 + 5 - 6 - 7 + 89
1 - 2 - 3 - 4 - 5 - 6 + 78 - 9
1 - 2 - 3 + 4 + 56 - 7 - 8 + 9
1 - 2 - 34 - 5 - 6 + 7 + 89
1 - 2 + 3 - 45 + 6 + 78 + 9
1 - 2 + 34 + 5 + 6 + 7 + 8 - 9
1 - 2 + 34 - 5 - 67 + 89
1 - 23 - 4 - 5 - 6 + 78 + 9
1 - 23 + 4 + 5 - 6 + 78 - 9
12 + 3 + 4 - 56 + 78 + 9
12 - 3 - 4 - 5 + 67 - 8 - 9
12 - 3 + 45 + 6 + 7 - 8 - 9
```

When N = 100,
```
1 + 2 + 3 - 4 + 5 + 6 + 78 + 9
1 + 2 + 34 - 5 + 67 - 8 + 9
1 + 23 - 4 + 5 + 6 + 78 - 9
1 + 23 - 4 + 56 + 7 + 8 + 9
12 + 3 + 4 + 5 - 6 - 7 + 89
12 + 3 - 4 + 5 + 67 + 8 + 9
12 - 3 - 4 + 5 - 6 + 7 + 89
123 + 4 - 5 + 67 - 89
123 + 45 - 67 + 8 - 9
123 - 4 - 5 - 6 - 7 + 8 - 9
123 - 45 - 67 + 89
```

*We'll run the provided solutions in Node.js v10+*

### Hints for Bonus in Section A
* Show functional programming technique


# Section B - UI Application Crafting

### Question 1 - TODO List

**Requirements**
* Able to run in both desktop & mobile browser
* Able to add/delete/modify the todo tasks
* Each todo task should have content input and due date input
* Able to drag & drop to modify todo tasks's order
* Persist todo task in local database and restore after browser refresh
* Support multiple delete/complete operation


### Question 2 - Simple Web Calculator

**Requirements**
* Able to run in both desktop & mobile browser
* At least 16 commands (0-9 digits, '+', '-', '\*', '/', 'clear', '=')
* Able to view commands input history on the left/right panel, e.g.

```
// User click '1', '+', '3', '=', the input history panel should show
=
3
+
1
```

### Hints for Bonus in Section B
* Use one of React/Vue for DOM Rendering
* Use one of Reflux/Redux/RxJS/Vuex for state management
* Use Webpack for bundling production build
* Show architectural pattern
* Exception handling
* Any interesting feature and animation that can show your skills
