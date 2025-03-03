import { AssetPresenter } from 'src/assets/asset.presenter';
import { Asset } from 'src/assets/entities/asset.entity';
import { Order } from './entities/order.entity';

export class OrderPresenter {
  constructor(private order: Order & { asset: Asset }) {}

  toJSON() {
    console.log(this.order.price);
    return {
      _id: this.order._id,
      shares: this.order.shares,
      partial: this.order.partial,
      price: this.order.price,
      type: this.order.type,
      status: this.order.status,
      asset: new AssetPresenter(this.order.asset).toJSON(),
    };
  }
}
