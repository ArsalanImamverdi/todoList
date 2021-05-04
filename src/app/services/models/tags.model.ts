import { BaseServiceModel } from "./base.model";
import { Color } from "./color.model";

export class Tags extends BaseServiceModel {
    public colorId: number;

    public title: string;
    public color: Color
}