import { NgModule } from "@angular/core";
import { COMMON_PIPES } from "./pipes";
import { COMMON_DIRECTIVES } from "./directives";

@NgModule({
  imports: [COMMON_DIRECTIVES, COMMON_PIPES],
  exports: [COMMON_DIRECTIVES, COMMON_PIPES],
})
export class AppCommonModule {}
