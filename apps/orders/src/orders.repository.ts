import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { CreateOrderRequest } from "./dto/create-order-request";
import { Order } from "./schemas/orders.schema";

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
     protected readonly logger = new Logger(OrdersRepository.name);
   
     constructor(
       @InjectModel(Order.name) orderModel: Model<Order>,
       @InjectConnection() connection: Connection,
     ) {
       super(orderModel, connection);
     }
}