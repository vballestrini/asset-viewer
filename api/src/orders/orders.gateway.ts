import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Order, OrderType } from './entities/order.entity';
import { OrdersService } from './orders.service';

@WebSocketGateway()
export class OrdersGateway {
  constructor(private ordersService: OrdersService) {}

  @SubscribeMessage('orders/create')
  async handleMessage(
    client: any,
    payload: {
      walletId: string;
      assetId: string;
      shares: number;
      price: number;
      type: OrderType;
    },
  ): Promise<Order> {
    const order = await this.ordersService.create({
      walletId: payload.walletId,
      assetId: payload.assetId,
      shares: payload.shares,
      price: payload.price,
      type: payload.type,
    });
    return order;
  }
}
