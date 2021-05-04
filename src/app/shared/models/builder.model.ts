export abstract class Builder<T>{
    /**
     *
     */
    constructor() {
    }
    public object: T
    public build(): T {
        return this.object;
    }
    // abstract from<T extends Builder<U>, U>(builder: (builder: T) => T): U ;

}