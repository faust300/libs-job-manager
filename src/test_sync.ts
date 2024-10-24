import { Job, JobResult, JobRequest, Mode } from "./index";
import { JobManager } from "./index";

const Waait = async (ms: number): Promise<void> => {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, ms)
    })
}

interface NewJobRequest extends JobRequest {
    id: string,
}

interface NewJobResult extends JobResult {
    result: any
}

class NewJob extends Job<NewJobRequest, NewJobResult>{
    async execute(): Promise<NewJobResult> {
        await Waait(Math.random() * 1000);
        return {
            success: true,
            result: {
                jobId: this.request.id
            }
        }
    }
}

class NewJobManager extends JobManager<NewJobRequest, NewJobResult, NewJob> {
    onResult(jobResult: NewJobResult): void {
        console.log(jobResult)
    }
}

const jm = new NewJobManager().setMode(Mode.Sync);

jm.addJob(new NewJob({ id: "S-1" }))
jm.addJob(new NewJob({ id: "S-2" }))
jm.addJob(new NewJob({ id: "S-3" }))
jm.addJob(new NewJob({ id: "S-4" }))
jm.addJob(new NewJob({ id: "S-5" }))
jm.addJob(new NewJob({ id: "S-6" }))
jm.addJob(new NewJob({ id: "S-7" }))
jm.addJob(new NewJob({ id: "S-8" }))
jm.addJob(new NewJob({ id: "S-9" }))