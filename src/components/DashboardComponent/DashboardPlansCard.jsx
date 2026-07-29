import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyBilling from "../HomeComponent/MonthlyBilling";
import AnnualBilling from "../HomeComponent/AnnualBilling";
import AgenciesBilling from "../HomeComponent/AgenciesBilling";
import { useSelector } from "react-redux";
import { selectUser } from "@/Redux/slices/authSlice";

const DashboardPlansCard = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {/* Tabs And Content */}
      {user.role === "agency" ? (
        <AgenciesBilling />
      ) : (
        <Tabs defaultValue="annual-billing" className="w-full mt-4">
          <TabsList className={"max-w-xs sm:max-w-full sm:min-w-lg mx-auto"}>
            <TabsTrigger value="monthly-billing">Monthly billing</TabsTrigger>
            <TabsTrigger value="annual-billing">Annual billing</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly-billing">
            <MonthlyBilling />
          </TabsContent>
          <TabsContent value="annual-billing">
            <AnnualBilling />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default DashboardPlansCard;
