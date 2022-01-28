const getAbsolutePath = require("../src/getAbsolutepath")

function getLowestCommonAncestor(tree, id1, id2){
    let tab1 = getAbsolutePath(tree, id1) ;
    let tab2 = getAbsolutePath(tree, id2);
    let found = 0;
    for(let i =0; i < tab1.length; i++){
        found = tab2.find(ancestor1 => ancestor1 == tab1[i]);
    }
    if(found == undefined)
        return "Ils n'ont pas d' ancètres en commun";
    else
        return found;
}

module.exports = getLowestCommonAncestor