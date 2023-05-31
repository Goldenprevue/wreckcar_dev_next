import MainLayout from "./MainLayout";
import * as React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}