let someNumbers = [13,5,2,6,3,8,9]

// I want to sort these in ascending

// function sortAscending(someNumbers:Array<number>):Array<number>{





// return []

// }

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      // Finding the smallest number in the unsorted portion
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      // Swapping the found minimum element with the first element
      if (min !== i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
    return arr;
  }
  // Example: selectionSort([29, 72, 98, 13, 87]);

  function bubbleSort(arr) {
    let n = arr.length;
    // Flag used to determine if a swap occurred
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap the elements
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  // Example: bubbleSort([29, 72, 98, 13, 87]);

  console.log(selectionSort(someNumbers))
  console.log(bubbleSort(someNumbers))