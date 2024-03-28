/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  // code
  array = createMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swapPlace(0, i, array);
    heapify(array, 0, i);
  }
  return array;
};

const swapPlace = (index1, index2, array) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

const createMaxHeap = (array) => {
  // code
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  // code
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  // make the largestValueIndex as currentIndex;
  let largestValueIndex = index;
  if (
    heapSize > leftChildIndex &&
    array[leftChildIndex] > array[largestValueIndex]
  ) {
    largestValueIndex = leftChildIndex;
  }
  if (
    heapSize > rightChildIndex &&
    array[rightChildIndex] > array[largestValueIndex]
  ) {
    largestValueIndex = rightChildIndex;
  }
  if (largestValueIndex !== index) {
    swapPlace(index, largestValueIndex, array);
    heapify(array, largestValueIndex, heapSize);
  }
};

describe("heap sort", function () {
  // only one of these can run at a time due to how I implemented it D:
  // the first one is the real test, the second is just to see what it looks like on a large scale

  test("should sort correctly", () => {
    const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
    heapSort(nums);
    console.log("nums is ======>", nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
