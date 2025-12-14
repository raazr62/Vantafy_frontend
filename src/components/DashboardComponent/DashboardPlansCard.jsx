import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyBilling from "../HomeComponent/MonthlyBilling";
import AnnualBilling from "../HomeComponent/AnnualBilling";
import AgenciesBilling from "../HomeComponent/AgenciesBilling";

const DashboardPlansCard = () => {
  return (
    <div>
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
    </div>
  );
};

export default DashboardPlansCard;
