# Firebase Asynchronous Data Retrieval Bug
This repository demonstrates a common error encountered when working with Firebase's asynchronous data retrieval methods.  The bug stems from attempting to access data before it has been fully fetched from the database. This example showcases the problem and provides a corrected solution.

## Bug Description
The original code attempts to directly access the data from a Firebase query's `onSnapshot` listener without considering the asynchronous nature of the operation. This can lead to undefined values or unexpected behavior.

## Solution
The corrected code uses the data fetched from the query snapshot inside the callback of `onSnapshot`, ensuring the data is available before attempting to access it.

## How to reproduce
1. Clone this repository.
2. Set up a Firebase project and configure the `firebase.initializeApp()` settings in `bug.js` with your own credentials.
3. Run `bug.js`. Observe the error. 
4. Run `bugSolution.js`. Observe the correct output.
