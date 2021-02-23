export default function youLose( playField ) {

    for (let i = 0; i < 4; i++ ) {
        if (playField[i].some((el) => { return el !== 0 })) {
            return true
        }
    }
    return false
}