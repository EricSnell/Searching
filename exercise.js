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
	//refer to Eric's beautiful copyrighted drawing of this workflow
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


/* BREADTH-FIRST SEARCH */
//across the rows of a tree
//top row, second row, etc
BinaryTree.prototype.bfs = function(values) {
    values = values || [];

    var queue = [this];

    while (queue.length) {
        var node = queue.shift();
        values.push(node.value);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    return values;
};

// 1. values is empty array
// 2. queue = [{A}] 
// 3. while queue is populated:
// 4. node = {A}
// 5. push {A} into [values]
// 6. values = [A]
// 7. if node has left, add {B} to queue
// 8. queue = [{B}]
// 9. if node has right, add {C} to queue
// 10. queue = [{B}, {C}]
// --back to top
// 11. node = {B}
// 12. values = [A, B]
// 13. if node has left, add {D} to queue
// 14. queue = [{C}, {D}]
// 15. if node has right, add {E} to queue
// 16. queue = [{C}, {D}, {E}]
// --back to top
// 17. node = {C}
// 18. values = [A, B, C]
// 19. if node has left, add {F} to queue
// 20. queue = [{D}, {E}, {F}]
// 21. if node has right, add {G} to queue
// 22. queue = [{D}. {E}, {F}, {G}]
// 23. ---back to top
// 24. node = {D}
// 25. values = [A, B, C, D]
// 26. if node has left, add null to queue
// 27. no right, null
// 28. queue = [{E}, {F}, {G}]
// 	-- back to top
// 	node = {E}
// 29. values = [A, B, C, D, E]
// 30. --back to top
// 31. node = {F}
// 32. values = [A, B, C, D, E, F]
// 33. if node has left, add null
// 34. if node has right, add null
// 35.	queue = [{G}]
// 	--back to top
// 	node = {G}
// 	values = [A, B, C, D, E, F, G]
// 	if node has left, add null
// 	if node has right, add null
// 	queue = null
// 		return values



 

