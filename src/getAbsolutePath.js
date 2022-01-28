function getAbsolutePath(tree, id){
    let tab = [id];
    let i = 1;
    let currentId = id;
    while(currentId != 0){
        currentId = tree.get(currentId).parent;
        tab[i] = currentId;
        i++
    }
    return tab;
}

module.exports = getAbsolutePath