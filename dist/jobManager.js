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
exports.JobManager = exports.Mode = void 0;
var Mode;
(function (Mode) {
    Mode[Mode["Sync"] = 0] = "Sync";
    Mode[Mode["Async"] = 1] = "Async";
})(Mode = exports.Mode || (exports.Mode = {}));
class JobManager {
    constructor(mode = Mode.Sync) {
        this.mode = mode;
        this.jobList = new Array();
        this.isRunning = false;
    }
    setMode(mode) {
        this.mode = mode;
        return this;
    }
    addJob(job) {
        if (this.mode == Mode.Sync) {
            this.jobList.push(job);
            if (this.isRunning === false) {
                this.immediateExecute();
            }
        }
        else {
            job.execute().then(jobResult => {
                this.onResult(jobResult);
            });
        }
    }
    immediateExecute() {
        return __awaiter(this, void 0, void 0, function* () {
            const job = this.jobList.shift();
            if (job) {
                this.isRunning = true;
                const jobResult = yield job.execute();
                this.onResult(jobResult);
                this.immediateExecute();
            }
        });
    }
}
exports.JobManager = JobManager;
