import { BaseServiceModel } from "./base.model";
import { Color } from "./color.model";
import { Tags } from "./tags.model";

export class Tasks extends BaseServiceModel {
    public colorId?: number;
    public tagIds?: number[] = []

    public done: boolean;
    public title: string;
    public date: Date;
    public note: string;
    public color?: Color;
    public tags?: Tags[]

}
