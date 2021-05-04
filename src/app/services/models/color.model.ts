import { BaseServiceModel } from "./base.model";

export class Color extends BaseServiceModel {
    public red: string;
    public green: string;
    public blue: string;

    public get full(): string {
        return `#${this.red}${this.green}${this.blue}`
    }
}