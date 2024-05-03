function findExit(maze) {
    const rows = maze.length;
    const cols = maze[0].length;
    
    // Find Kate's initial position
    let startX = -1;
    let startY = -1;
    for (let i = 0; i < rows; i++) {
        const index = maze[i].indexOf('k');
        if (index !== -1) {
            startX = i;
            startY = index;
            break;
        }
    }
    
    if (startX === -1 || startY === -1) {
        console.log("Kate's initial position not found.");
        return;
    }
    
    // Define possible movements: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // Queue for BFS
    const queue = [{x: startX, y: startY, moves: 0}];
    
    let maxMoves = 0;
    
    while (queue.length > 0) {
        const current = queue.shift();
        const {x, y, moves} = current;
        
        // Update maxMoves if Kate reaches a space at the edge of the maze
        if (x === 0 || x === rows - 1 || y === 0 || y === cols - 1) {
            maxMoves = Math.max(maxMoves, moves);
        }
        
        // Explore all possible directions
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            
            // Check if the new position is valid and unvisited
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === ' ') {
                // Mark the position as visited
                maze[newX] = maze[newX].substring(0, newY) + '#' + maze[newX].substring(newY + 1);
                
                // Add the new position to the queue
                queue.push({x: newX, y: newY, moves: moves + 1});
            }
        }
    }
    
    if (maxMoves > 0) {
        console.log(`Kate got out in ${maxMoves} moves`);
    } else {
        console.log("Kate cannot get out");
    }
}

// Example usage:
const maze1 = [
    "######",
    "##  k#",
    "## ###",
    "## ###"
];
findExit(maze1);
