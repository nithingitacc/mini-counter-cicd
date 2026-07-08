// Pure functions — no DOM, no browser needed — easy to unit test
function increment(count) {
  return count + 1;
}

function decrement(count) {
  return count - 1;
}

module.exports = { increment, decrement };
