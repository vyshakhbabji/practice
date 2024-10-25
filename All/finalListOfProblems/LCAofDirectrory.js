class Directory {
    constructor(name, parent = null) {
        this.name = name;
        this.parent = parent;
    }
}

function lowestCommonAncestor(dir1, dir2) {
    let visited  = new Set()
    while(dir1!=null){
        visited.add(dir1)
        dir1 = dir1.parent
    }

    while(dir2!=null){
        if(visited.has(dir2))
            return dir2
        dir2 = dir2.parent
    }

    return null
}

// Example usage:
let root = new Directory("root");
let home = new Directory("home", root);
let user = new Directory("user", home);
let documents = new Directory("documents", user);
let photos = new Directory("photos", user);
let system = new Directory("system", root);
let logs = new Directory("logs", system);

console.log("LCA of documents and photos:", lowestCommonAncestor(documents, photos).name); // Output: user
console.log("LCA of documents and logs:", lowestCommonAncestor(documents, logs).name); // Output: root
