import { AssetPresenter } from 'src/assets/asset.presenter';
import { Wallet } from './entities/wallet.entity';
import { WalletAsset } from './entities/wallet-asset.entity';
import { Asset } from 'src/assets/entities/asset.entity';

export class WalletPresenter {
  constructor(
    private wallet: Wallet & { assets: (WalletAsset & { asset: Asset })[] },
  ) {}

  toJSON() {
    return {
      _id: this.wallet._id,
      assets: this.wallet.assets.map((walletAsset) => {
        const asset = new AssetPresenter(walletAsset.asset);
        return {
          asset: asset.toJSON(),
          shares: walletAsset.shares,
        };
      }),
    };
  }
}
