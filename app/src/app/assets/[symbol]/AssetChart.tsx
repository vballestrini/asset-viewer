'use client';

import { AssetRow } from "@/app/components/AssetRow";
import { ChartView, ChartViewRef } from "@/app/components/ChartView";
import { Asset } from "@/model";
import { useRef } from "react";

export default function AssetChart(props: {asset: Asset}) {
    const chartRef = useRef<ChartViewRef>(null);
    return <ChartView ref={chartRef} header={<AssetRow asset={props.asset} />} />;
 }
