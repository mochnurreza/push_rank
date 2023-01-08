function climbingLeaderBoard(player, ranked){
    const rankings = []
    const score = [...new Set(ranked)]
    

    for(let i = 0; i < player.length; i++){
        while(score.length && player[i] >= score[score.length - 1]){
            score.pop()
        }
        rankings.push(score.length + 1)
    }
    return rankings
}

console.log(climbingLeaderBoard(7, 4))