import { Injectable } from "@nestjs/common";
import { CreateOrderRequest } from "./dto/create-order-request";
import { OrdersRepository } from "./orders.repository";
@Injectable()
export class OrdersService {
 
  constructor( 
    private readonly ordersRepository: OrdersRepository
  ){ }

  getHello(): string {
    return 'Hello people';
  }

  async createOrder(data: CreateOrderRequest) {
    try {
      return this.ordersRepository.create(data);
    } catch (error) {
      throw error
    }
  }

  async getOrders(){
    try {
      return this.ordersRepository.findMany()
    } catch (error) {
      throw error
    }
  }
}