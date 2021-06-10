import { boardInteractionInterface } from "./boardEntryInterface";

export default class implements boardInteractionInterface {
    context: CanvasRenderingContext2D | null

    constructor() {
        this.context = null;
    }

    setContext = (canvasElement: HTMLCanvasElement) => {
        this.context = canvasElement.getContext('2d');
    }


}