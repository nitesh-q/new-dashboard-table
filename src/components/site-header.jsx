"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Home</Link>
          </Button>
        </div>

        <div className="flex items-center">
          <Button
            variant="destructive"
            onClick={() => console.log("Logout logic here")}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
