import { OrderType } from "@/model";
import { Badge } from "flowbite-react";

export function OrderTypeBadge(props: { type: OrderType }) {
  return (
    <Badge
      color={props.type === OrderType.BUY ? "blue" : "red"}
      className="w-fit"
    >
      {props.type === OrderType.BUY ? "Buy" : "Sell"}
    </Badge>
  );
}