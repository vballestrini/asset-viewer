import { AssetRow } from "@/app/components/AssetRow";
import { OrderForm } from "@/app/components/OrderForm";
import { TabsItem } from "@/app/components/Tabs";
import { OrderType } from "@/model";
import { Card, Tabs } from "flowbite-react";
import AssetChart from "./AssetChart";
import { WalletList } from "@/app/components/WalletList";
import { getAsset } from "node:sea";

export default async function AssetView(
    { params,
      searchParams
    }: 
    { params: Promise<{symbol: string}>, 
      searchParams: Promise<{wallet_id: string}>
    }) {
    const {symbol} = await params;
    const asset = await getAsset(symbol);
    const { wallet_id }  = await searchParams;

    if(!wallet_id) {
        return <WalletList />;
    }

    return (
        <div className="flex flex-col space-y-5 flex-grow">
            <div className="flex flex-col space-y-2">
                <AssetRow asset={asset}/>
                <div className="ml-2 font-bold text-2xl">
                    R$ {asset.price}
                </div>
                <div className="grid grid-cols-5 flex-grow gap-2">
                    <div className="col-span-2">
                        <Card>
                            <Tabs>
                                <TabsItem active title={<div className="text-blue-700">Buy</div>}>
                                    <OrderForm asset={asset} walletId={wallet_id} type={OrderType.BUY}/>
                                </TabsItem>
                                <TabsItem title={<div className="text-red-700">Sell</div>}>
                                    <OrderForm asset={asset} walletId={wallet_id} type={OrderType.SELL}/>
                                </TabsItem>
                            </Tabs>
                        </Card>
                    </div>
                    <div className="col-span-3 flex flex-grow">
                        <AssetChart asset={asset}/>
                    </div>
                </div>
            </div>
        </div>
    );
}