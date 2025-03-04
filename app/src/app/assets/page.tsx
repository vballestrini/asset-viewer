import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { AssetRow } from "../components/AssetRow";
import Link from "next/link";
import { WalletList } from "../components/WalletList";
import { getAssets } from "@/queries/queries";

export default async function AssetsListPage({ searchParams }: { searchParams: Promise<{wallet_id: string}> }) {
  const assets = await getAssets();
  const { wallet_id }  = await searchParams;

  if(!wallet_id) {
    return <WalletList />;
  }

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Assets</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Asset</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Buy/Sell</TableHeadCell>
          </TableHead>
          <TableBody>
            { assets.map((asset, key) => (
              <TableRow key={key}>
                <TableCell>
                  <AssetRow asset={asset} />
                </TableCell>
                <TableCell>R$ { asset.price }</TableCell>
                <TableCell>
                <Button color="light" as={Link} href={`/assets/${asset.symbol}?wallet_id=${wallet_id}`}>Buy/Sell</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
