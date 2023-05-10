import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = ({ children }) => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#18181B',
              secondary: '#F6921E',
            },
          },
          style: {
            backgroundColor: '#F6921E',
            color: '#18181B',
            fontWeight: 'bold',
          },
        }}
      />
      {children}
    </>
  );
};

export default ToastProvider;
