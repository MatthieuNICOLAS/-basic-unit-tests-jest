function createTree(arr){
    try {
        const tree = new Map();
        for(let i = 0; i<arr.length; i++){
            tree.set(arr[i].id, arr[i])
        }
        return tree;
        
    } catch (error) {
        return "Le tableau rentré est nul"
    }

}

module.exports = createTree
