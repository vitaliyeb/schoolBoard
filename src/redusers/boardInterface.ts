export default interface boardState {
    size: {
        width: number,
        height: number
    },
    context: CanvasRenderingContext2D | null | {}
}