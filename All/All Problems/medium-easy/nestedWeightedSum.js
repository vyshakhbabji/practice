class NestedInteger {
    constructor() {
        this.data = null; // Initially, it holds nothing
    }

    // Return true if this NestedInteger holds a single integer
    isInteger() {
        return typeof this.data === 'number';
    }

    // Return the single integer that this NestedInteger holds
    getInteger() {
        if (this.isInteger()) {
            return this.data;
        }
        return null;
    }

    // Set this NestedInteger to hold a single integer
    setInteger(value) {
        this.data = value;
    }

    // Return the list of NestedInteger elements that this holds
    getList() {
        if (!this.isInteger()) {
            return this.data;
        }
        return null;
    }

    // Set this NestedInteger to hold a list of NestedInteger elements
    setList() {
        this.data = [];
    }

    // Add a NestedInteger element to this list
    add(elem) {
        if (!this.isInteger()) {
            if (this.data === null) {
                this.setList();
            }
            this.data.push(elem);
        }
    }
}
