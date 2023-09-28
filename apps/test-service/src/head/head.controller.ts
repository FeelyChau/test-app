import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HeadService } from "./head.service";
import { HeadControllerBase } from "./base/head.controller.base";

@swagger.ApiTags("heads")
@common.Controller("heads")
export class HeadController extends HeadControllerBase {
  constructor(
    protected readonly service: HeadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
