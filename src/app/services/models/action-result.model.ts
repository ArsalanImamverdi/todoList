export class ActionResult<T>{
    data: T
    status: ActionResultStatus

    constructor() {
        this.status = new ActionResultStatus();
    }
}
export class ActionResultStatus {
    statusCode: number;
    message: string;
}

export class ActionResultBuilder<T>{
    private actionResult: ActionResult<T>
    constructor() {
        this.actionResult = new ActionResult<T>();
    }
    public data(data: T): ActionResultBuilder<T> {
        this.actionResult.data = data;
        return this;
    }
    public statusCode(statusCode: number): ActionResultBuilder<T> {
        this.actionResult.status.statusCode = statusCode;
        return this;
    }
    public message(message: string): ActionResultBuilder<T> {
        this.actionResult.status.message = message;
        return this;
    }
    public status(statusBuilder: (builder: ActionResultStatusBuilder) => ActionResultStatusBuilder): ActionResultBuilder<T> {
        let actionResultStatusBuilder = new ActionResultStatusBuilder();
        statusBuilder(actionResultStatusBuilder);
        this.actionResult.status = actionResultStatusBuilder.build();
        return this;
    }
    public build(): ActionResult<T> {
        return this.actionResult;
    }
}
export class ActionResultStatusBuilder {
    private actionResultStatus: ActionResultStatus
    /**
     *
     */
    constructor() {
        this.actionResultStatus = new ActionResultStatus();
    }
    public statusCode(statusCode: number): ActionResultStatusBuilder {
        this.actionResultStatus.statusCode = statusCode;
        return this;
    }
    public message(message: string): ActionResultStatusBuilder {
        this.actionResultStatus.message = message;
        return this;
    }
    public build(): ActionResultStatus {
        return this.actionResultStatus;
    }
}

