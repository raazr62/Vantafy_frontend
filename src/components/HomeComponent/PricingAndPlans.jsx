import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyBilling from "./MonthlyBilling";
import AnnualBilling from "./AnnualBilling";
import AgenciesBilling from "./AgenciesBilling";

const PricingAndPlans = () => {
  return (
    <CommonContainer>
      <CommonTitle title={"Pricing & Plan"} />

      {/* Tabs And Content */}
      <Tabs defaultValue="monthly-billing" className="w-full mt-8">
        <TabsList className={"min-w-lg mx-auto"}>
          <TabsTrigger value="monthly-billing">Monthly billing</TabsTrigger>
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
    </CommonContainer>
  );
};

export default PricingAndPlans;
