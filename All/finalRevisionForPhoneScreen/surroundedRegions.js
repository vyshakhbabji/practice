var solve = function(board) {
  	
  let R = board.length
  if(R===0) return 
  let C= board[0].length

  /// temporarily mark the edges and cells surrounding edges as "T"
  for(let r = 0 ; r < R.length ;r++){
  	dfs(r,0)
  	dfs(r,C-1)
  }

  for(let c=0 ; c<C ; c++){
  	dfs(0,c)
  	dfs(R-1,c)
  }


  for(let r = 0 ; r < R ; r++){
  	for(let c= 0 ; c< C ; c++){
  		if(board[r][c]==='O'){
  			board[r][c]==="X"
  		}else if(board[r][c]==="T"{
  			board[r][c] === "O"
   		}
  	}
  }


  function dfs(r,c){
  	if(r<0 || r>=R || c<0 || c>=C || board[r][c]!=="O") return 
  	board[r][c] = "T"
  	dfs(r+1,c)
  	dfs(r,c+1)
  	dfs(r-1,c)
  	dfs(r,c-1)
  }

  return board
};