const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

export function calcWinner(squares){
    for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return{
                winner: squares[a], lines: lines[i]
            }
        }
    }
    return null;
}


export function calcBestMove(squars, player){
    const getArrDuplicatedCount = (arr => {
        let count = 0
        arr.forEach(i => {
            if(squars[i] === player){
                count += 1
            }
        })
        return count
    })
    const sortedLines = lines.sort((a, b) => {
        const acount = getArrDuplicatedCount(a)
        const bcount = getArrDuplicatedCount(b)
        return bcount - acount
    })

    for(let i = 0; i < sortedLines.length; i++){
        let val = sortedLines[i].find(el => {
            if(squars[el] === ""){
                return el + ""
            }
            return null;
        })
        if(!val){
            continue
        }else{
            return +val
        }
    }
    return null
}