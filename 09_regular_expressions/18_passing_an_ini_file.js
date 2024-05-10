// configuration file
//
// searchengine=https://duckduckgo.com/?q=$1
// spitefulness=9.7
//
// ; comments are preceded by a semicolon...
// ; each section concerns an individual enemy
// [larry]
// fullname=Larry Doe
// type=kindergarten bully
// website=http://www.geocities.com/CapeCanaveral/11451
//
// [davaeorn]
// fullname=Davaeorn
// type=evil wizard
// outputdir=/home/marijn/enemies/davaeorn
//
// Rules:
// Blank lines and lines starting with semicolons are ignored.
//
// Lines wrapped in [ and ] start a new section.
//
// Lines containing an alphanumeric identifier followed by an = character add a setting to the current section.
//
// Anything else is invalid.
//
// Goal:
// Our task is to convert a string like this into an object whose properties hold strings for 
// settings written before the first section header and subobjects for sections, with those 
// subobjects holding the section’s settings.
// two ways for newline: \n, "\r\n". the regext to get both using split is as follows /\r?\n/
function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  for (line of string.split(/\r?\n/)) {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;|$)/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.")
    }
  };
  return result;
}
console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// -> { name: 'Vasilis', address: { city: 'Tessaloniki' } }
