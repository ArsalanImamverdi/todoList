import { ElementRef } from "@angular/core";
import { Builder } from "../models/builder.model";
import { Size } from "./size.model";

export class SizeCalculator {
    private calculatedSize: Size
    private parentWidth: number
    private parentHeight: number

    public get ratio(): number {
        return 1.61803398875;
    }
    public widthRatioCoef: Number;
    public heightRatioCoef: Number;

    constructor(parent: Window, ratioCoef?: ContainerRatioCoef);
    constructor(parent: HTMLElement, ratioCoef?: ContainerRatioCoef);
    constructor(public parent: HTMLElement | Window, public rationCoef?: ContainerRatioCoef) {
        if (parent instanceof HTMLElement) {
            this.parentHeight = parent.clientHeight;
            this.parentWidth = parent.clientWidth;
        }
        else {
            this.parentHeight = parent.innerHeight
            this.parentWidth = parent.innerWidth
        }
        // this.calculatedSize = this.calculate(this.rationCoef)
        ContainerRatioCoefBuilder.from(width => width.coef(9), height => height)
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
            'margin': this.margin.height + 'px ' + this.margin.width + 'px ' + this.margin.height + 'px ',
        }
    }
    public calculate(ratioCoef: number): Size {
        let counter = 0;
        let width = this.parentWidth;
        let hieght = this.parentHeight;
        while (counter <= ratioCoef) {
            hieght /= this.ratio;
            width /= this.ratio;
            counter += 1;
        }
        return new Size(this.parentWidth - width, this.parentHeight - hieght);;
    }
}
export class RationCoef {
    /**
     *
     */
    constructor();
    constructor(public rationCoef?: number, public as?: RationCoefType) {
        if (!as) as = RationCoefType.Container
    }

}
export class RatioCoefBuilder extends Builder<RationCoef> {

    constructor() {
        super();
        this.object = new RationCoef();
    }
    public coef(coef: number): this {
        this.object.rationCoef = coef;
        return this;
    }
    public as(as: RationCoefType): this {
        this.object.as = as;
        return this;
    }
    static from(builder: (builder: RatioCoefBuilder) => RatioCoefBuilder): RationCoef {
        let arg = new RatioCoefBuilder();
        return builder(arg).build();
    }
}
export class ContainerRatioCoef {
    public widthRadioCoef: RationCoef
    public heightRatioCoef: RationCoef
}
export class ContainerRatioCoefBuilder extends Builder<ContainerRatioCoef>{
    /**
     *
     */
    constructor() {
        super();
        this.object = new ContainerRatioCoef();
    }
    public width(width: RationCoef): ContainerRatioCoefBuilder {
        this.object.widthRadioCoef = width;
        return this;
    }

    public height(height: RationCoef): ContainerRatioCoefBuilder {
        this.object.heightRatioCoef = height;
        return this;
    }

    // public static from(builder: (builder: RatioCoefBuilder) => RatioCoefBuilder): ContainerRatioCoef;
    public static from(builder: (builder: RatioCoefBuilder) => RatioCoefBuilder, heightBuilder?: (builder: RatioCoefBuilder) => RatioCoefBuilder): ContainerRatioCoef {
        let widthRacioCoef: RationCoef
        let heightRatioCoef: RationCoef

        let widthBuilderArg = new RatioCoefBuilder();
        widthRacioCoef = builder(widthBuilderArg).build();
        if (!heightBuilder) {
            let heightBuilderArg = new RatioCoefBuilder();
            heightRatioCoef = heightBuilder(heightBuilderArg).build();
        }
        else
            heightRatioCoef = widthRacioCoef;

        return new ContainerRatioCoefBuilder().width(widthRacioCoef).height(heightRatioCoef).build();
    }
}

export enum RationCoefType {
    Margin,
    Container
}