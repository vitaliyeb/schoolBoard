
interface boardInteractionInterface {
    context:  CanvasRenderingContext2D | null;
    canvasWidth: number;
    canvasHeight: number;
    events: {
        mouseDown?: () => void,
        mouseUp?: () => void,
        click?: () => void
    }
};

export {
    boardInteractionInterface
}