import { OrderService } from './order.service';
import { CreateOrderDto } from "./dto/create-order.dto";
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto): any;
    listOrders(): any;
}
