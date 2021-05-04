import { BaseServiceModel } from "./base.model";
import { Color } from "./color.model";
import { Tasks } from "./tasks.model";

export class TaskListModel extends BaseServiceModel {
    public title: string;
    public taskIds: number[]
    public colorId: number;

    public tasks: Tasks[] = []
    public color: Color
}

