let count = 0;
function increase() {
    count++;
}
function getCount() {
    return count;
}

module.exports.getCount = getCount;   // exports
module.exports.increase = increase;