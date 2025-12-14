import Logo from "@/shared/LandingShared/Logo";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyBilling from "@/components/HomeComponent/MonthlyBilling";
import AnnualBilling from "@/components/HomeComponent/AnnualBilling";
import AgenciesBilling from "@/components/HomeComponent/AgenciesBilling";

const PricingPlan = () => {
  return (
    <div className="container max-w-7xl mx-auto flex items-center justify-center mt-2 mb-5">
      <div className="w-full h-full flex flex-col">
        <Logo
          variant="grayFull"
          className={"mx-auto mb-3 w-40 shrink-0 sticky top-0"}
        />
        <div className="rounded-[12px] border border-[#EFE6FD] flex flex-col p-6 flex-1">
          <div className="shrink-0">
            <p className="text-2xl font-medium">Pricing & Plan</p>
            <p className="text-[#90A1B9] text-justify mt-1">
              Choose your perfect plan
            </p>
          </div>
          <div className="flex justify-center flex-1 w-full mt-4 pb-4">
            <Tabs defaultValue="monthly-billing" className="w-full mt-8">
              <TabsList className={"min-w-lg mx-auto"}>
                <TabsTrigger value="monthly-billing">
                  Monthly billing
                </TabsTrigger>
                <TabsTrigger value="annual-billing">Annual billing</TabsTrigger>
                <TabsTrigger value="agencies">Agencies</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly-billing">
                <MonthlyBilling />
              </TabsContent>
              <TabsContent value="annual-billing">
                <AnnualBilling />
              </TabsContent>
              <TabsContent value="agencies">
                <AgenciesBilling />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
