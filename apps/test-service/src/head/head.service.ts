import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HeadServiceBase } from "./base/head.service.base";

@Injectable()
export class HeadService extends HeadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
