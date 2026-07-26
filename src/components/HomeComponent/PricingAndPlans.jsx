import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyBilling from "./MonthlyBilling";
import AnnualBilling from "./AnnualBilling";
import AgenciesBilling from "./AgenciesBilling";

const PricingAndPlans = () => {
  return (
    <CommonContainer id={"pricing"}>
      <CommonTitle title={"Pricing & Plan"} />

      {/* Tabs And Content */}
      <Tabs defaultValue="monthly-billing" className="w-full mt-4">
        <TabsList className={"max-w-xs sm:max-w-full sm:min-w-lg mx-auto"}>
          <TabsTrigger value="monthly-billing">Monthly</TabsTrigger>
          <TabsTrigger value="annual-billing">Annual</TabsTrigger>
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
    </CommonContainer>
  );
};

export default PricingAndPlans;
