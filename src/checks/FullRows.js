export default function fullRows(playField) {

    return playField.some((el) => {
        return el.every((elem) => {
            return [11,12,13,14,15,16,17].includes(elem)
        })
    })
}