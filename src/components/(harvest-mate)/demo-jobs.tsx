import React from "react";
import { Plus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OptionsList, Option } from "@/components/ui/options";

import { SidebarInset, SidebarProvider } from "./(sidebar)/sidebar";
import { JobsTable } from "./job-table";
import { AppSidebar } from "./sidebar";
import { Navbar } from "./navbar";
import {
  jobsCardDescriptionStyle,
  jobsCardHeaderStyle,
  jobsCardStyle,
  jobsTabsStyle,
  jobsTabsTriggerStyle,
} from "@/config/harvest-mate";

export function DemoJobs() {
  return (
    <SidebarProvider className="h-full w-full">
      <AppSidebar />
      <SidebarInset className="w-full h-full rounded-r-md">
        <Navbar />
        <div className="w-full h-full px-1 2xl:px-2">
          <Tabs defaultValue="overview" className="py-5 md:py-7 gap-0 lg:gap-1">
            <div className="w-full flex justify-between">
              <TabsList className={jobsTabsStyle}>
                <TabsTrigger value="overview" className={jobsTabsTriggerStyle}>
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className={jobsTabsTriggerStyle}
                  disabled
                >
                  Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className={jobsTabsTriggerStyle}
                  disabled
                >
                  Reports
                </TabsTrigger>
              </TabsList>

              <OptionsList className={jobsTabsStyle}>
                <React.Fragment>
                  <Option
                    active
                    className={jobsTabsTriggerStyle}
                    onClick={() => {}}
                  >
                    <Plus className="h-2 lg:h-3 w-auto" />
                  </Option>
                  <Option
                    active={true}
                    className={jobsTabsTriggerStyle}
                    onClick={() => {}}
                  >
                    Corn
                  </Option>
                </React.Fragment>
              </OptionsList>
            </div>

            <div className="py-1 grid gap-1 2xl:gap-2 grid-cols-4">
              <Card className={jobsCardStyle}>
                <CardHeader className={jobsCardHeaderStyle}>
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
                  <p className={jobsCardDescriptionStyle}>
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className={jobsCardStyle}>
                <CardHeader className={jobsCardHeaderStyle}>
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
                  <p className={jobsCardDescriptionStyle}>
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className={jobsCardStyle}>
                <CardHeader className={jobsCardHeaderStyle}>
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
                  <p className={jobsCardDescriptionStyle}>
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className={jobsCardStyle}>
                <CardHeader className={jobsCardHeaderStyle}>
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
                  <p className={jobsCardDescriptionStyle}>+12% this week</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-7 p-[0.15rem] md:p-1 xl:p-2 gap-[0.1rem] md:gap-1 xl:gap-2 rounded-sm md:rounded-lg border-sidebar-border">
                <CardHeader className={jobsCardHeaderStyle}>
                  <CardTitle className="text-3xs md:text-2xs">
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
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
  cardTitle: "text-4xs lg:text-2xs font-medium",
  cardInfo: "text-3xs lg:text-2xs font-bold",
  cardContent: "p-0",
};
