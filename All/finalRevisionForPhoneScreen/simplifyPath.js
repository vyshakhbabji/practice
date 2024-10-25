var simplifyPath = function (path) {

    let parts = path.split("/")
    let stack = []
    for (let p of parts) {
        if (p === "." || p === "") continue
        else if (p === "..") stack.pop()
        else stack.push(p)
    }

    console.log(stack)

    return "/" + stack.join("/")
};


Time complexity: O(n), where n is the length of the input path.
Space complexity: O(n), due to the space needed for the parts array and the stack.