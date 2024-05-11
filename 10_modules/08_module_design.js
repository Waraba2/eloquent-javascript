// Structuring programs is one of the subtler aspects of programming. Any nontrivial piece of 
// functionality can be organized in various ways.
//
// Good program design is subjective—there are trade-offs involved, and matters of taste. The best 
// way to learn the value of well-structured design is to read or work on a lot of programs and 
// notice what works and what doesn’t. Don’t assume that a painful mess is “just the way it is”. 
// You can improve the structure of almost everything by putting more thought into it.
// ijkstral Dijkstra 
// const {find_path} = require("dijkstrajs");
import pkg from "dijkstrajs";
const {find_path} = pkg; 
import {roadGraph} from "../07_project_a_robot/01_meadowfield.js";
let graph = {};
for (let node of Object.keys(roadGraph)) {
  let edges = graph[node] = {};
  for (let dest of roadGraph[node]) {
    edges[dest] = 1;
  }
}
// -> [ 'Post Office', "Alice's House", 'Cabin' ]


console.log(find_path(graph, "Post Office", "Cabin"));
