const getAbsolutePath = require("./getAbsolutepath")
const getLowestCommonAncestor = require("./getLowestCommonAncestor")

function getRelativePath(tree,id1,id2){
        try {
            Ancestor = getLowestCommonAncestor(tree,id1,id2)
        path1 = getAbsolutePath(tree,id1)
        console.log(path1)
        path2 = getAbsolutePath(tree,id2)
        console.log(path2)
        var path = ""

        if(path1 != "Vérifiez vos valeurs, l'une de vos valeurs d'entrée est nulle" 
        && path2 != "Vérifiez vos valeurs, l'une de vos valeurs d'entrée est nulle"
        ){
            for(let i = 0; i<path1.length; i++){
                path = path + ".." +path1[i]
                console.log(path)
                if(path1[i] == Ancestor)
                    break
            
            }
    

        for(let i = path2.indexOf(Ancestor) - 1; i >= 0; i--){
            path = path + ".." +path2[i]
            console.log(path)
            if(path2[i] == id2)
                break
        }
    } 
        else {path = "Une de vos valeurs d'entrée est nulle"}
        if(path == "..0"|| path =="..1")
        return "Ils n'ont pas d' ancètres en commun";
        else
        return path
        
        } catch (error) {
            return "Une de vos valeurs d'entrée est nulle"
        }
    }

module.exports = getRelativePath