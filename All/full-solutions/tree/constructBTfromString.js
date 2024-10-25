class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function str2tree(s) {
    if (!s || s.length === 0) return null;

    // Helper function to parse a substring into a TreeNode
    function parseSubtree(start) {
        let i = start;

        // Find the root value
        while (i < s.length && (s[i] === '-' || !isNaN(s[i]))) i++;
        const rootVal = parseInt(s.substring(start, i));
        const root = new TreeNode(rootVal);

        // Process the left and right subtrees if present
        if (i < s.length && s[i] === '(') {
            let leftStart = i + 1;
            let balance = 1;

            // Find the full range of the left subtree
            while (i < s.length && balance > 0) {
                i++;
                if (s[i] === '(') balance++;
                if (s[i] === ')') balance--;
            }

            root.left = parseSubtree(leftStart);

            // Process right subtree if it exists
            if (i + 1 < s.length && s[i + 1] === '(') {
                root.right = parseSubtree(i + 2);
            }
        }

        return root;
    }

    return parseSubtree(0);
}
