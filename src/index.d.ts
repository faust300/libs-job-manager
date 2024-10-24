export declare interface JobRequest { }

export declare interface JobResult {
    success: boolean;
}

export declare abstract class Job<Q extends JobRequest, R extends JobResult> {
    public readonly request: Q;
    constructor(request: Q);
    abstract execute(): Promise<R>;
}

export declare enum Mode {
    Sync,
    Async
}

export declare abstract class JobManager<Q extends JobRequest, R extends JobResult, J extends Job<Q, R>> {
    private jobList: Array<J>;
    private isRunning: boolean;

    getJob(index:number):Job<Q, R>;
    getJobSize():number;
    setMode(mode: Mode): JobManager<Q, R, J>;
    addJob(job: J): void;
    immediateExecute(): Promise<void>;
    abstract onResult(jobResult: R, jobRequest?:Q): void
}