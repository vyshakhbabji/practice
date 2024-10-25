/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

    let maxPoints = 2;

    for (let i = 0; i < points.length; i++) {
        let slopeMap = new Map();
        let duplicate = 1;

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let slope = calculateSlope(points[i], points[j]);
                if (slope === null) {
                    duplicate++;
                } else {
                    slopeMap.set(slope, (slopeMap.get(slope) || 1) + 1);
                }
            }
        }

        for (let count of slopeMap.values()) {
            maxPoints = Math.max(maxPoints, count);
        }
    }

    return maxPoints;
};

function calculateSlope(point1, point2) {
    let [x1, y1] = point1;
    let [x2, y2] = point2;

    if (x1 === x2 && y1 === y2) return null;
    if (x1 === x2) return 'Infinity';
    if (y1 === y2) return '0';

    let dx = x2 - x1;
    let dy = y2 - y1;
    let gcdVal = gcd(dx, dy);

    dx /= gcdVal;
    dy /= gcdVal;

    // To avoid precision issues and handle negative slopes consistently
    if (dy < 0) {
        dx = -dx;
        dy = -dy;
    }

    return `${dx}/${dy}`;
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
