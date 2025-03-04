"use client";

import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParams = useSearchParams();
  const wallet_id = searchParams.get("wallet_id");
  return (
    <FlowbiteNavbar fluid rounded>
      <NavbarBrand href="/">
        <Image
          className="mr-3"
          alt="Full Cycle Invest"
          src="/logo.jpg"
          width={90}
          height={90}
        />
        <span className="text-xl">Homebroker</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="content-center">
          Hello {wallet_id?.substring(0, 5)}...
        </div>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link href={`/?wallet_id=${wallet_id}`} passHref legacyBehavior>
          <NavbarLink className="text-xl">My wallet</NavbarLink>
        </Link>
        <Link href={`/assets/?wallet_id=${wallet_id}`} passHref legacyBehavior>
          <NavbarLink className="text-xl">Assets</NavbarLink>
        </Link>
        <Link href={`/orders?wallet_id=${wallet_id}`} passHref legacyBehavior>
          <NavbarLink href="#" className="text-xl">
            Orders
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}