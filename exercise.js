/* LINEAR SEARCH */
// Best case O(1), Worst case O(n), Average case O(n)
var indexOf = function(array, value) {
    for (var i=0; i<array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};


/* BINARY SEARCH */
// Only wors on sorted arrays
// Best case O(1), Worst case O(log(n)), Average O(log(n))
var binarySearch = function(array, value, start, end) {
	var start = start === undefined ? 0 : start;
	var end = end === undefined ? array.length : end;

	if (start > end) {
		return -1;
	}

	var index = Math.floor((start + end) / 2);
	var item = array[index];

	console.log(start, end);
	if (item === value) {
		return index;
	} else if (item < value) {
		return binarySearch(array, value, index + 1, end);
	} else if (item > value) {
		return binarySearch(array, value, start, index - 1);
	}
};


/* DEPTH-FIRST SEARCH */
// One way to search through trees
// You travers as far as you can down the tree before back-tracking
var BinaryTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};

BinaryTree.prototype.dfs = function(values) {
	values = values || [];
	if (this.left) {
		values = this.left.dfs(values);
	}
	values.push(this.value);

	if (this.right) {
		values = this.right.dfs(values);
	}
	// Returns values to previous function 
	return values;
};

