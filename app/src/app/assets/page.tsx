import { Asset } from "@/model";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Image from "next/image";

export async function getAssets(): Promise<Asset[]> {
  const response = await fetch(`http://localhost:3000/assets`);
  return response.json();
}

export default async function AssetsListPage() {
  const assets = await getAssets();

  
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
                  <div className="flex space-x-1">
                    <div className="content-center">
                      <Image src={ asset.image_url } alt={ asset.symbol } width={30} height={30}/>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span>{ asset.name }</span>
                      <span>{ asset.symbol }</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>R$ { asset.price }</TableCell>
                <TableCell>
                  <Button color="light">Buy/Sell</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
