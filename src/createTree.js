function createTree(arr){
    const tree = new Map();
    for(let i = 0; i<arr.length; i++){
        tree.set(arr[i].id, arr[i])
    }
    return tree;
}

module.exports = createTree
