import React from 'react';
import { Header } from '@/components';
import ToastProvider from '@/providers/ToastProvider';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ToastProvider>{children}</ToastProvider>
    </>
  );
};

export default Layout;
