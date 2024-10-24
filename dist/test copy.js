"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const index_2 = require("./index");
const Waait = (ms) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, ms);
    });
});
class NewJob extends index_1.Job {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Waait(Math.random() * 1000);
            return {
                success: true,
                result: {
                    jobId: this.jobRequest.id
                }
            };
        });
    }
}
class NewJobManager extends index_2.JobManager {
    onResult(jobResult) {
        console.log(jobResult);
    }
}
const jm = new NewJobManager().setMode(index_1.Mode.Async);
jm.addJob(new NewJob({ id: "S-1" }));
jm.addJob(new NewJob({ id: "S-2" }));
jm.addJob(new NewJob({ id: "S-3" }));
jm.addJob(new NewJob({ id: "S-4" }));
jm.addJob(new NewJob({ id: "S-5" }));
jm.addJob(new NewJob({ id: "S-6" }));
jm.addJob(new NewJob({ id: "S-7" }));
jm.addJob(new NewJob({ id: "S-8" }));
jm.addJob(new NewJob({ id: "S-9" }));
jm.addJob(new NewJob({ id: "A-1" }));
jm.addJob(new NewJob({ id: "A-2" }));
jm.addJob(new NewJob({ id: "A-3" }));
jm.addJob(new NewJob({ id: "A-4" }));
jm.addJob(new NewJob({ id: "A-5" }));
jm.addJob(new NewJob({ id: "A-6" }));
jm.addJob(new NewJob({ id: "A-7" }));
jm.addJob(new NewJob({ id: "A-8" }));
jm.addJob(new NewJob({ id: "A-9" }));
