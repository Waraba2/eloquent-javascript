require("./08_journal");

// Old way
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something
}

// Another way of doing the above.
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
