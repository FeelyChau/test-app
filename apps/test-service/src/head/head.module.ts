import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HeadModuleBase } from "./base/head.module.base";
import { HeadService } from "./head.service";
import { HeadController } from "./head.controller";
import { HeadResolver } from "./head.resolver";

@Module({
  imports: [HeadModuleBase, forwardRef(() => AuthModule)],
  controllers: [HeadController],
  providers: [HeadService, HeadResolver],
  exports: [HeadService],
})
export class HeadModule {}
