const Player = (name) =>{
    const name = name;
    let wins = 0;

    const RandomPlay = (cells) =>{
        while(true){
            let x = Math.random() * 10;
            let y = Math.random() * 10;

            if(cells[x][y] == 'E'){
                break;
            }
        }
        return {x: x, y: y};
    }

    return {name, wins, RandomPlay}
}

export default Player;