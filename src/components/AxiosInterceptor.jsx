import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { setupAxios } from "@/lib/axios";

const AxiosInterceptor = () => {
  const navigate = useNavigate();
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    setupAxios(navigate);
    setIsSet(true);
  }, [navigate]);

  if (!isSet) {
    return null; // or a loading spinner
  }

  return <Outlet />;
};

export default AxiosInterceptor;
