import { Order } from "@/model";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { AssetRow } from "../components/AssetRow";
import { OrderTypeBadge } from "../components/OrderTypeBadge";
import { OrderStatusBadge } from "../components/OrderStatusBadge";
import { WalletList } from "../components/WalletList";

export async function getOrders(walletId:string): Promise<Order[]> {
  const response = await fetch(`http://localhost:3000/orders?walletId=${walletId}`);
  return response.json();
}

export default async function OrdersListPage({ searchParams }: { searchParams: Promise<{ wallet_id: string }> }) {
  const { wallet_id }  = await searchParams;
  const orders = await getOrders(wallet_id);

  if(!wallet_id) {
    return <WalletList />;
  }
  
  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Orders</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Asset</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Buy/Sell</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableHead>
          <TableBody>
            { orders.map((order, key) => (
              <TableRow key={key}>
                <TableCell>
                  <AssetRow asset={order.asset} />
                </TableCell>
                <TableCell>R$ { order.price }</TableCell>
                <TableCell>{ order.shares }</TableCell>
                <TableCell>
                  <OrderTypeBadge type={order.type} />
                </TableCell>
                <TableCell>
                  <OrderStatusBadge status={order.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
