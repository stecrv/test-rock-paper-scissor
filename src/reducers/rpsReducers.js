"use strict"

export function rpsReducers(state = {
    player1: null,
    player2: null,
    played1: null,
    played2: null,
    win:null
}, action) {

    var played = '';
    switch (action.type) {
        case "GET_RPS":
            return {...state}
            break;
        case "PLAY_ROCK":
            played = 'rock';
            break;
        case "PLAY_SCISSORS":
            played = 'scissor';
            break;
        case "PLAY_PAPER":
            played = 'paper';
            break;
    }

    let winner = (action.payload==='player1') ?
        whoWin(played,state.player2) :
        whoWin(state.player1,played);

    if(winner===null){
        return(action.payload==='player1') ?
            {...state, player1:played, played1:played } :
            {...state, player2:played, played2:played };
    }else{
        return {...state, win:winner,player1:null,player2:null,played1:state.player1,played2:played}
    }

};

export function whoIsStronger(action1,action2){
    if(action1===action2) return 0;
    else if(action1==='rock' && action2==='scissor') return 1;
    else if(action1==='scissor' && action2==='paper') return 1;
    else if(action1==='paper' && action2==='rock') return 1;
    else return 2;
}
export function whoWin(player1Played,player2Played){
    if(player1Played && player2Played){
        let r = whoIsStronger(player1Played, player2Played);
        if(r === 0) return 'drawn';
        if(r === 1) return 'player1';
        if(r === 2) return 'player2';
    }
    return null;
}