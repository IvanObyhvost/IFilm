import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "join",
})
export class JoinPipe implements PipeTransform {
  transform(values: any[], separator: string = ""): string {
    if (!Array.isArray(values)) {
      throw new Error("JoinPipe: Invalid values. It should be Array");
    }
    if (typeof separator !== "string") {
      throw new Error("JoinPipe: not a string");
    }
    return values.join(separator);
  }
}
