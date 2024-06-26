// <p>The <img src="img/cat.png" alt="Cat"> in the
//   <img src="img/hat.png" alt="Hat">.</p>
//
// <p><button onclick="replaceImages()">Replace</button></p>
//
// <script>
//   function replaceImages() {
//     let images = document.body.getElementsByTagName("img");
//     for (let i = images.length - 1; i >= 0; i--) {
//       let image = images[i];
//       if (image.alt) {
//         let text = document.createTextNode(image.alt);
//         image.parentNode.replaceChild(text, image);
//       }
//     }
//   }
// </script>

let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));
// → ["ONE", "TWO"]

// <blockquote id="quote">
//   No book can ever be finished. While working on it we learn
//   just enough to find it immature the moment we turn away
//   from it.
// </blockquote>
//
// <script>
//   function elt(type, ...children) {
//     let node = document.createElement(type);
//     for (let child of children) {
//       if (typeof child != "string") node.appendChild(child);
//       else node.appendChild(document.createTextNode(child));
//     }
//     return node;
//   }
//
//   document.getElementById("quote").appendChild(
//     elt("footer", "—",
//         elt("strong", "Karl Popper"),
//         ", preface to the second edition of ",
//         elt("em", "The Open Society and Its Enemies"),
//         ", 1950"));
// </script>
