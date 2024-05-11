// NPM is two things: an online service where you can download (and upload) packages, and a program
// (bundled with Node.js) that helps you install and manage them.
//
//:: -> Software is cheap to copy, so once someone has written it, distributing it to other people is an
// efficient process. Writing it in the first place is work, though, and responding to people who 
// have found problems in the code or who want to propose new features is even more work.
import {parse} from 'ini';
console.log(parse("x = 10\ny = 20"))
// -> [Object: null prototype] { x: '10', y: '20' }

