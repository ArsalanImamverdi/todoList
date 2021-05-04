import { BaseServiceModel } from "./base.model";

export class Users extends BaseServiceModel {
    name: string;
    username: string;
    password: string;
}