"use client"

import 'src/styles/globals.css';
import { SidebarTemplate } from 'src/atomic/template/SidebarTemplate';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarTemplate>
      {children}
    </SidebarTemplate>
  );
}




