// <p style="border: 3px solid red">
//   I'm boxed in
// </p>
//
// <script>
//   let para = document.body.getElementsByTagName("p")[0];
//   console.log("clientHeight:", para.clientHeight);
//   // → 19
//   console.log("offsetHeight:", para.offsetHeight);
//   // → 25
// </script>


// <p><span id="one"></span></p>
// <p><span id="two"></span></p>
//
// <script>
//   function time(name, action) {
//     let start = Date.now(); // Current time in milliseconds
//     action();
//     console.log(name, "took", Date.now() - start, "ms");
//   }
//
//   time("naive", () => {
//     let target = document.getElementById("one");
//     while (target.offsetWidth < 2000) {
//       target.appendChild(document.createTextNode("X"));
//     }
//   });
//   // → naive took 32 ms
//
//   time("clever", function() {
//     let target = document.getElementById("two");
//     target.appendChild(document.createTextNode("XXXXX"));
//     let total = Math.ceil(2000 / (target.offsetWidth / 5));
//     target.firstChild.nodeValue = "X".repeat(total);
//   });
//   // → clever took 1 ms
// </script>
