
    /*
            given condition  lets say x is sender and y is reciever

            (invalid cases) sender cannot send requests to receiver if :
                receiver <= 0.5 * sender + 7
                receiver > sender
                receiver > 100 && sender < 100

            (valid cases) sender can only send requests to receiver if
                receiver > 0.5 * sender + 7                    // sender can send request to receiver if receivers age it atlease  (half the age + 7 ) of sender
                receiver <= sender                             // if receiver is younger or same age as sender
                receiver <= 100 || sender >= 100               // if both are under hundred or both 100 or older

     */


     // using first and last binary search to find the range of valid ages
    var numFriendRequests = function(ages) {
        function bs(nums, target, first) {
            let low = 0, high = nums.length - 1;
            let res = -1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (nums[mid] > target) {
                    high = mid - 1;
                } else if (nums[mid] < target) {
                    low = mid + 1;
                } else {
                    res = mid;
                    if (first) {
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                }
            }
            return first ? low : high;
        }

        ages.sort((a, b) => a - b);
        let count = 0;
        for (let i = 0; i < ages.length; i++) {
            let lower = Math.floor(0.5 * ages[i] + 7);
            let low = bs(ages, lower, false) + 1;
            let high = bs(ages, ages[i], false);
            if (high >= low) {
                count += high - low;
            }
        }

        return count;
    };