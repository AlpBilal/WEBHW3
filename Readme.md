                 File Organization
models.js: Defines the Student class. It manages data structure and enforces ID immutability.

database.js: File that holds our data and sorta simulates a backend api. It uses setTimeout to mimic network latency and returns raw JSON data via a callback.

analytics.js: Contains functions for data analysis. It handles averaging grades, finding the top student using reduce, and filtering lists.

main.js: Allows to use each class and make the actual application. It orchestrates fetching data, instantiating classes, verifying security, and generating reports.

                  Challenges Faced
I had a hard time adapting to JavaScript, as it feels quite different from other programming languages I have used. specifically, I found implementing the logic in analytics class challenging because using higher-order array methods like "reduce()" was a new and difficult concept for me to grasp.