import { type ReactNode } from 'react';
import {Navigate} from "react-router";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: Readonly<ProtectedRouteProps>) {
  if (localStorage.getItem("JWT")){
    return (
      <>
        {children}
      </>
    )
  } else {
    return (
      <Navigate to="/" replace />
    )
  }
}

