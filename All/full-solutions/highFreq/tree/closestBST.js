var closestValue = function(root, target) {


    let closest  = root.val

    while(root!=null){
        // Update the closest value if the current node is closer to the target

        if (Math.abs(root.val - target) < Math.abs(closest - target) ||
            (Math.abs(root.val - target) === Math.abs(closest - target) && root.val < closest)) {
            closest = root.val;
        }
        if(target<root.val) {root = root.left}
        else {root = root.right}

    }

    return closest


};