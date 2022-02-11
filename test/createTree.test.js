const createTree = require("../src/createTree")

let elt1 = {id : 0, parent : -1, nom : "papa"};
let elt2 = {id : 1, parent : -1, nom : "Oncle"};
let elt3 = {id : 2, parent : 0, nom : "enfant"};
let tab1 = [elt1, elt2, elt3];
const resultMap = new Map()
resultMap.set(0,elt1);
resultMap.set(1,elt2);
resultMap.set(2,elt3);

test('createTree returns 2 noeuds ', () => {
    expect(createTree(tab1)).toEqual(resultMap);
})
test('createTree returns Le tableau rentré est nul ', () => {
        expect(createTree(null)).toBe("Le tableau rentré est nul");
})