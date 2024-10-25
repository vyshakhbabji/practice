class Codec {
    // Serializes an N-ary tree to a string.
    serialize(root) {
        let result = [];

        function serializeHelper(node) {
            if (!node) return;
            // Add current node value and number of children
            result.push(node.val);
            result.push(node.children.length);

            // Recursively serialize each child
            for (const child of node.children) {
                serializeHelper(child);
            }
        }

        serializeHelper(root);
        return result.join(' ');
    }

    // Deserializes a string to an N-ary tree.
    deserialize(data) {
        if (!data) return null;
        let values = data.split(' ');
        let index = 0;

        function deserializeHelper() {
            if (index >= values.length) return null;

            // Get the current node value and number of children
            const val = parseInt(values[index++]);
            const numChildren = parseInt(values[index++]);

            // Create the node
            let node = new Node(val, []);

            // Recursively deserialize each child
            for (let i = 0; i < numChildren; i++) {
                node.children.push(deserializeHelper());
            }

            return node;
        }

        return deserializeHelper();
    }
}
