import { Color } from "../models/color.model";
import { Controller } from "./controller";

export class ColorsController extends Controller<Color>{
    public get name(): string {
        return 'colors'
    }

    constructor() {
        super();
    }
}