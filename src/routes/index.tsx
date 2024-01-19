import React from "react";

import { PublicRoute } from "./public.routes";
import { PrivateRoute } from "./private.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const { isLogged } = useAuth();

  return isLogged ? <PrivateRoute /> : <PublicRoute />;
}
