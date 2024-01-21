"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ConnectKitButton, useModal } from "connectkit";
import { useAccount, useDisconnect } from "wagmi";

export default function CallToActionSection() {

    const { isConnected, address, isConnecting } = useAccount();
    const { setOpen } = useModal();
    const { disconnect } = useDisconnect();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2">
       Vegen protocol
      </div>
    </section>
  )
}

