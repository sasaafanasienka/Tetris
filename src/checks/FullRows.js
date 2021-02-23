export default function fullRows(playField) {

    return playField.some((el) => {
        return el.every((elem) => {
            return elem === 2
        })
    })
}