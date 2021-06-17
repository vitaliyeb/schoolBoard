export default interface boardState {
    size: {
        width: number,
        height: number
    },
    properties: {
        color: string,
        weight: number
    },
    events: {
        mouseDown?: () => void,
        mouseUp?: () => void,
        click?: () => void
    }
}