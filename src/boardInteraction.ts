import { boardInteractionInterface } from "./boardEntryInterface";

export default class implements boardInteractionInterface {
    context: CanvasRenderingContext2D | null;
    events: {};
    canvasWidth: number;
    canvasHeight: number;

    constructor() {
        this.context = null;
        this.events = {};
        this.canvasWidth = 0;
        this.canvasHeight = 0
    }

    setContext = (canvasElement: HTMLCanvasElement | null) => {
        if (canvasElement) {
            this.context = canvasElement.getContext('2d');
        }
    }

    setCanvasSize = () => {
        const { context } = this;
        if(context) {
            const { offsetWidth, offsetHeight } = context.canvas.parentNode as HTMLDivElement;
            this.canvasWidth = offsetWidth;
            this.canvasHeight = offsetHeight;
            context.canvas.width = offsetWidth;
            context.canvas.height = offsetHeight;
        }
    }

    painBackground = () => {

    }

    render = () => {
        this.painBackground();
        console.log(this.canvasWidth)
    }


}