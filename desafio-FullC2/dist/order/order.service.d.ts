import { PrismaService } from "../prisma/prisma/prisma.service";
import { CreateOrderDto } from "./dto/create-order.dto";
export declare class OrderService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): any;
    create(createOrderDto: CreateOrderDto): any;
}
