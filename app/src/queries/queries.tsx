import { Asset, Wallet } from "@/model";

export async function getAsset(symbol: string): Promise<Asset> {
    const response = await fetch(`http://localhost:3000/assets/${symbol}`);
    return response.json();
}

export async function getAssets(): Promise<Asset[]> {
    const response = await fetch(`http://localhost:3000/assets`);
    return response.json();
}

export async function getWallet(walletId:string): Promise<Wallet> {
    const response = await fetch(`http://localhost:3000/wallets/${walletId}`);
    
    if(!response.ok) {
        return null;
    }

    return response.json();
}