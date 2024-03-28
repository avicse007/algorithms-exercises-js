/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function findLongestNumber(nums) {
  let max = nums.reduce((acc, current) => {
    if (current > acc) acc = current;
    return acc;
  }, 0);
  return String(max).split("").length;
}

function radixSort(array) {
  let longestNumber = findLongestNumber(array);
  //let bucket = new Array(10).fill([], 0, 10);
  const bucket = new Array(10).fill().map(() => []);
  //for (let i = 0; i < longestNumber; i++) {
  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      let current = array.shift();
      bucket[getDigit(current, i, longestNumber)].push(current);
    }
    for (let j = 0; j < 10; j++) {
      while (bucket[j].length) {
        array.push(bucket[j].shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
