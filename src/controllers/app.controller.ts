import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { AppService } from "../app.service";

class Car {
    constructor(public readonly manufacturer, public readonly year) {}
}

// tslint:disable-next-line: max-classes-per-file
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    public getHello(@Req() request: Request) {
        const car = new Car("bmw", 2016);
        return car;
        return this.appService.getHello();
    }
}
