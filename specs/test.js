module("Merge Sort");

test("Sort 5 numbers", function() {
  var d = new MergeSort();
  var result = d.sort([2,5,1,3,4]);
  same(result, [1,2,3,4,5]);
});
