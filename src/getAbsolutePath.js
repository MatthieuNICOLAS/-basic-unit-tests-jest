function getAbsolutePath(tree, id){
    let tab = [id];
    let i = 1;
    let currentId = id;
    if(tree.get(currentId).parent == -1)
        {
            return tab;
        }
    else{
        while(currentId != 0){
            currentId = tree.get(currentId).parent;
            tab[i] = currentId;
            console.log(currentId)
            i++
        }
    return tab;
    }
}

module.exports = getAbsolutePath