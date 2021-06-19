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

    setContext = (canvasElement: HTMLCanvasElement) => {
        this.context = canvasElement.getContext('2d');
    }

    setSize = ({ width, height }: {width: number, height: number}) => {
        this.canvasHeight = height;
        this.canvasWidth = width;
    }

    painBackground = () => {
        const { context } = this;
        console.log(context)

    }

    render = () => {
        this.painBackground();
        console.log(this.canvasWidth)
    }


}