import { Size } from "./size.model";

export class SizeCalculator {
    private calculatedSize: Size
    public get ratio(): number {
        return 1.61803398875;
    }
    /**
     *
     */
    constructor(public parentWidth: number, public parentHeight: number, public rationCoef?: number) {
        this.calculatedSize = this.calculate(this.rationCoef)
    }

    public get container(): Size {
        return this.calculatedSize;
    }
    public get margin(): Size {
        return new Size((this.parentWidth - this.calculatedSize.width) / 2, (this.parentHeight - this.calculatedSize.height) / 2)
    }
    public get style(): object {
        return {
            'width': this.container.width + 'px',
            'height': this.container.height + 'px',
            'margin-top': this.margin.height + 'px',
            'margin-bottom': this.margin.height + 'px',
            'margin-left': this.margin.width + 'px',
            'margin-right': this.margin.width + 'px'
        }
    }
    public calculate(ratioCoef: number): Size {
        let counter = 0;
        let width = this.parentWidth;
        let hieght = this.parentHeight;
        while (counter < ratioCoef) {
            hieght /= this.ratio;
            width /= this.ratio;
            counter += 1;
        }
        return new Size(this.parentWidth - width, this.parentHeight - hieght);;
    }
}