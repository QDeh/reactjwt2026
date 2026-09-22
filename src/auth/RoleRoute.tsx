import { type ReactNode } from 'react';
import {hasRole} from "./auth.service";
import {Navigate} from "react-router";

type RoleRouteProps = {
  children: ReactNode;
  roles: string[];
};

export function RoleRoute({ children, roles }: Readonly<RoleRouteProps>) {
  for (let role of roles){
    if (hasRole(role)){
      return (
        <>
          {children}
        </>
      )
    }
  }
  return (
    <Navigate to="/" replace />
  )
}
