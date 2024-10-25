// Find the Kth Smallest Sum of a Matrix With Sorted Rows

function kthSmallest(mat, k) {
    let n = mat.length;
    let m = mat[0].length;
    let pq = new PriorityQueue((a, b) => a[0] > b[0]);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += mat[i][0];
        pq.push([sum, i, 0]);
    }
    for (let i = 0; i < k - 1; i++) {
        let [sum, i, j] = pq.pop();
        if (j + 1 < m) {
            sum += mat[i][j + 1] - mat[i][j];
            pq.push([sum, i, j + 1]);
        }
    }
    return pq.top()[0];
}