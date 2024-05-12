// Cheating
// When we defined if and while, you probably noticed that they were more or less trivial wrappers 
// around JavaScript’s own if and while. Similarly, the values in Egg are just regular old 
// JavaScript values. Bridging the gap to a more primitive system, such as the machine code the 
// processor understands, takes more effort—but the way it works resembles what we are doing here.
//
// Though the toy language in this chapter doesn’t do anything that couldn’t be done better in 
// JavaScript, there are situations where writing small languages helps get real work done.
//
// Such a language does not have to resemble a typical programming language. If JavaScript didn’t 
// come equippend with regular expressions, for example, you could write your own parser and 
// evaluator for regular expressions.
//
// Or imagine you are building a program that makes it possible to quickly create parsers by 
// providing a logical description of the language they need to parse. You could define a specific
// notation for that, and a compiler that compiles it to a parser program.
//
// expr = number | string | name | application
//
// number = digit+
//
// name = letter+
//
// string = '"' (! '"')* '"'
//
// application = expr '(' (expr (',' expr)*)? ')'
// This is what is usually called a domain-specific language, a language tailored to express a 
// narrow domain of knowledge. Such a language can be more expressive than a general-purpose 
// language because it is designed to describe exactly the things that need to be described in its
// domain and nothing else.
