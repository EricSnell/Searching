BinaryTree.prototype.bfs = function(values) {
    values = values || [];

    var queue = [this];
    console.log(queue);

    while (queue.length) {
        var node = queue.shift();
        console.log(node);
        values.push(node.value);
        console.log(node.value);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    return values;
};
