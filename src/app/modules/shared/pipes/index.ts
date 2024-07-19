import { JoinPipe } from "./join/join.pipe";
import { SafePipe } from "./safe/safe.pipe";

export * from "./join/join.pipe";
export * from "./safe/safe.pipe";

export const COMMON_PIPES = [JoinPipe, SafePipe];
