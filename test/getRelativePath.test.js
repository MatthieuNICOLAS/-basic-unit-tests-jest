const getRelativePath = require("../src/getRelativepath");
const getAbsolutePath = require("../src/getRelativepath")

let elt1 = {id : 0, parent : -1, nom : "papa"};
let elt2 = {id : 1, parent : -1, nom : "Oncle"};
let elt3 = {id : 2, parent : 0, nom : "enfant"};
let elt4 = {id : 3, parent : 2, nom : "papa"};
let elt5 = {id : 4, parent : 2, nom : "papa"};
let elt6 = {id : 5, parent : 2, nom : "papa"};
let elt7 = {id : 6, parent : 0, nom : "papa"};
let elt8 = {id : 7, parent : 3, nom : "papa"};
let elt9 = {id : 8, parent : 7, nom : "papa"};

let tab1 = [elt1, elt2, elt3, elt4, elt5, elt6, elt7, elt8, elt9];
const resultMap = new Map()
resultMap.set(0,elt1);
resultMap.set(1,elt2);
resultMap.set(2,elt3);
resultMap.set(3,elt4);
resultMap.set(4,elt5);
resultMap.set(5,elt6);
resultMap.set(6,elt7);
resultMap.set(7,elt8);
resultMap.set(8,elt9);

test('getRelativePath returns ..5..2..3..7', () => {
    expect(getRelativePath(resultMap,5,7)).toEqual("..5..2..3..7");
})
test('getRelativePath returns ..5..2 ', () => {
    expect(getRelativePath(resultMap,5,2)).toEqual("..5..2");
})
test('getRelativePath returns Ils n\'ont pas d\' ancètres en commun  ', () => {
    expect(getRelativePath(resultMap,0,1)).toEqual("Ils n'ont pas d' ancètres en commun");
})
test('getRelativePath returns null ', () => {
    expect(getAbsolutePath(null, 5,2)).toBe("Une de vos valeurs d'entrée est nulle");
})
test('getRelativePath returns null ', () => {
    expect(getAbsolutePath(resultMap, 5,null)).toBe("Une de vos valeurs d'entrée est nulle");
})
test('getRelativePath returns null ', () => {
    expect(getAbsolutePath(resultMap, null, 7)).toBe("Une de vos valeurs d'entrée est nulle");
})