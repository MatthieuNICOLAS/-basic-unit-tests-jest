function getAbsolutePath(tree, id){

    try {
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
    } catch (error) {
        return "Vérifiez vos valeurs, l'une de vos valeurs d'entrée est nulle";
        
    }

}

module.exports = getAbsolutePath