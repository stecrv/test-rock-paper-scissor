"use strict"

export function getRps(){
    return {
        type: "GET_RPS"
    }
}


export function playRock(player){
    return {
        type: "PLAY_ROCK",
        payload: player
    }
}
export function playScissors(player){
    return {
        type: "PLAY_SCISSORS",
        payload: player
    }
}
export function playPaper(player){
    return {
        type: "PLAY_PAPER",
        payload: player
    }
}

