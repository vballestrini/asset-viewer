import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { AssetRow } from "./components/AssetRow";
import { WalletList } from "./components/WalletList";
import Link from "next/link";
import { getWallet } from "@/queries/queries";

export default async function WalletListPage({ searchParams }: { searchParams: Promise<{ wallet_id: string }> }) {
  const { wallet_id }  = await searchParams;

  if(!wallet_id) {
    return <WalletList />;
  }

  const wallet = await getWallet(wallet_id);

  if(!wallet) {
    return <WalletList />;
  }
  
  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>My wallet</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Asset</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Buy/Sell</TableHeadCell>
          </TableHead>
          <TableBody>
            { wallet.assets.map((walletAsset, key) => (
              <TableRow key={key}>
                <TableCell>
                  <AssetRow asset={walletAsset.asset} />
                </TableCell>
                <TableCell>R$ { walletAsset.asset.price }</TableCell>
                <TableCell>{ walletAsset.shares }</TableCell>
                <TableCell>
                  <Button color="light" as={Link} href={`/assets/${walletAsset.asset.symbol}?wallet_id=${wallet._id}`}>Buy/Sell</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
