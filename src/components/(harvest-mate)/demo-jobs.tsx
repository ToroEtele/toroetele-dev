import React from "react";
import { Plus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OptionsList, Option } from "@/components/ui/options";

import { SidebarInset, SidebarProvider } from "./(sidebar)/sidebar";
import { JobsTable } from "./job-table";
import { AppSidebar } from "./sidebar";
import { Navbar } from "./navbar";

export function DemoJobs() {
  return (
    <SidebarProvider className="h-full w-full">
      <AppSidebar />
      <SidebarInset className="w-full h-full rounded-r-md">
        <div className="w-full h-full">
          <Navbar />

          <Tabs defaultValue="overview" className="py-[36px] px-[8px]">
            <div className="w-full flex justify-between">
              <TabsList className="h-6 xl:h-8">
                <TabsTrigger value="overview" className={styles.tabsTrigger}>
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className={styles.tabsTrigger}
                  disabled
                >
                  Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className={styles.tabsTrigger}
                  disabled
                >
                  Reports
                </TabsTrigger>
              </TabsList>

              <OptionsList className="h-6 xl:h-8 gap-2">
                <React.Fragment>
                  <Option active className="h-4 xl:h-6 p-1" onClick={() => {}}>
                    <Plus className="h-3" />
                  </Option>
                  <Option
                    active={true}
                    className={styles.tabsTrigger}
                    onClick={() => {}}
                  >
                    Corn
                  </Option>
                </React.Fragment>
              </OptionsList>
            </div>

            <div className="p-1 grid gap-4 grid-cols-4">
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>Expenses</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-2 w-2 xl:h-3 xl:w-3 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardInfo}>13.000 RON</div>
                  <p className={styles.cardDescription}>
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>Time</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-2 w-2 xl:h-3 xl:w-3 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardInfo}>12 Hours</div>
                  <p className={styles.cardDescription}>
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>Area</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-2 w-2 xl:h-3 xl:w-3 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardInfo}>18 Ha</div>
                  <p className={styles.cardDescription}>+19% from last month</p>
                </CardContent>
              </Card>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>Income</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-2 w-2 xl:h-3 xl:w-3 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardInfo}>+45.000 RON</div>
                  <p className={styles.cardDescription}>+12% this week</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-7 gap-1 md:gap-2 p-1 md:p-2 rounded-sm md:rounded-lg border-sidebar-border">
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className="text-3xs md:text-2xs">
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-1">
                  <JobsTable />
                </CardContent>
              </Card>
            </div>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const styles = {
  tabsTrigger: "h-4 xl:h-6 p-1 text-3xs md:text-2xs xl:text-2xs",
  card: "p-1 lg:p-2 gap-1 lg:gap-2 rounded-sm lg:rounded-md border-sidebar-border",
  cardHeader:
    "w-full flex flex-row items-center justify-between space-y-0 p-0 px-1 lg:px-2",
  cardTitle: "text-4xs lg:text-2xs font-medium",
  cardInfo: "text-3xs lg:text-2xs font-bold",
  cardDescription: "text-4xs lg:text-2xs text-muted-foreground",
  cardContent: "p-0",
};
