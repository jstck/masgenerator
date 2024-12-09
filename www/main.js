const prefix_plain_probability = 0.4;
const prefix_advanced_probability = 0.3;

function pickRandom(a) {
    if (a.length === 0) {
      return null;
    } else if (a.length === 1) {
      return a[0];
    } else {
      i = Math.floor(Math.random() * a.length);
      return a[i];
    }
  }

function fågel() {
    r = pickRandom(part1) + pickRandom(part2)

    foo = Math.random()

    if (foo < prefix_plain_probability) {
        r = pickRandom(prefix) + " " + r
    }
    else if (foo < prefix_plain_probability+prefix_advanced_probability) {
      r = pickRandom(prefix1) + pickRandom(prefix2) + " " + r
    }
    return r;
}

function fågla() {
  let s = "";
  for(ii=0; ii<10; ii++) {
    s += fågel() + "<br/>\n";
  }
  document.getElementById("fågel").innerHTML = s;
}
