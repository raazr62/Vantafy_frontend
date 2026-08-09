import Logo from "@/shared/LandingShared/Logo";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyBilling from "@/components/HomeComponent/MonthlyBilling";
import AnnualBilling from "@/components/HomeComponent/AnnualBilling";
import AgenciesBilling from "@/components/HomeComponent/AgenciesBilling";
import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";

const PricingPlan = () => {
  const user = useSelector(selectUser);
  return (
    <div className="container max-w-7xl mx-auto flex items-center justify-center mt-2 mb-5">
      <div className="w-full h-full flex flex-col">
        <div className="bg-white/90 backdrop-blur-xs mb-3 shrink-0 sticky top-0 w-full">
          <Logo variant="grayFull" className={"mx-auto"} />
        </div>
        <div className="rounded-[12px] border border-[#EFE6FD] flex flex-col py-4 sm:py-6 sm:px-4 flex-1 sm:mx-4">
          <div className="flex justify-center flex-1 w-full">
            {user.role === "agency" ? (
              <AgenciesBilling />
            ) : (
              <Tabs
                defaultValue={"annual-billing"}
                className="w-full px-4 sm:px-6"
              >
                <TabsList
                  className={"max-w-xs sm:max-w-full sm:min-w-lg mx-auto"}
                >
                  <TabsTrigger value="monthly-billing">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="annual-billing">
                    Annual
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="monthly-billing">
                  <MonthlyBilling fromAuthPage={true} />
                </TabsContent>
                <TabsContent value="annual-billing">
                  <AnnualBilling fromAuthPage={true} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
