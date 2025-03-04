"use client";

import { Asset, Order, OrderType } from "@/model";
import { Button, Label, TextInput } from "flowbite-react";
import { FormEvent } from "react";
// import { socket } from "../socket-io";
// import { toast } from "react-toastify";

//server component vs client component;

export function OrderForm(props: {
  asset: Asset;
  walletId: string;
  type: OrderType;
}) {
  const color = props.type == OrderType.BUY ? "text-blue-700" : "text-red-700";
  const translatedType = props.type == OrderType.BUY ? "buy" : "sell";

//   async function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const data = Object.fromEntries(formData.entries());
//     socket.connect();
//     const newOrder: Order = await socket.emitWithAck("orders/create", data);
//     toast(
//       `${translatedType} ${newOrder.shares} shares of ${props.asset.symbol} order submited with sucess`,
//       { type: "success", position: "top-right" }
//     );
//   }

  return (
    <form>
      <input type="hidden" name="assetId" defaultValue={props.asset._id} />
      <input type="hidden" name="walletId" defaultValue={props.walletId} />
      <input type="hidden" name="type" defaultValue={props.type} />
      <div>
        <div className="mb-2">
          <Label htmlFor="shares" value="Quantity" className={color} />
        </div>
        <TextInput
          id="shares"
          name="shares"
          required
          type="number"
          min={1}
          step={1}
          defaultValue={1}
          color={props.type == OrderType.BUY ? "info" : "failure"}
        />
      </div>
      <br />
      <div>
        <div className="mb-2">
          <Label htmlFor="price" value="Price R$" className={color} />
        </div>
        <TextInput
          id="price"
          name="price"
          required
          type="number"
          min={1}
          step={1}
          defaultValue={1}
          color={props.type == OrderType.BUY ? "info" : "failure"}
        />
      </div>
      <br />
      <Button
        type="submit"
        color={props.type == OrderType.BUY ? "blue" : "failure"}
      >
        Submit {translatedType} order
      </Button>
    </form>
  );
}