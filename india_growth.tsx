'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sectors = [
  { name: "Manufacturing", progress: 65, key: "manufacturing" },
  { name: "Exports", progress: 70, key: "exports" },
  { name: "Skilling", progress: 60, key: "skilling" },
  { name: "Tech", progress: 55, key: "tech" },
  { name: "Urbanization", progress: 50, key: "urban" },
  { name: "Finance", progress: 60, key: "finance" },
  { name: "Green Growth", progress: 45, key: "green" },
  { name: "Agriculture", progress: 58, key: "agri" },
  { name: "Governance", progress: 52, key: "gov" },
];

const barData = [
  { sector: "Manufacturing", GDP_Impact: 3.2 },
  { sector: "Exports", GDP_Impact: 2.4 },
  { sector: "Skilling", GDP_Impact: 1.1 },
  { sector: "Tech", GDP_Impact: 1.4 },
  { sector: "Urbanization", GDP_Impact: 0.8 },
  { sector: "Green Growth", GDP_Impact: 0.6 },
];

export default function IndiaGrowthDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {sectors.map((sector) => (
        <Card key={sector.key}>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">{sector.name}</h2>
            <Progress value={sector.progress} className="h-3" />
            <p className="text-xs mt-1">Progress toward reform & impact goal</p>
          </CardContent>
        </Card>
      ))}

      <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
        <Tabs defaultValue="gdp">
          <TabsList>
            <TabsTrigger value="gdp">GDP Impact Projection</TabsTrigger>
            <TabsTrigger value="details">Key Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="gdp">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="sector" />
                  <YAxis label={{ value: "% Contribution", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Bar dataKey="GDP_Impact" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card><CardContent className="p-4"><strong>Manufacturing:</strong> Land/labor reform, China+1 strategy, MSME incentives</CardContent></Card>
              <Card><CardContent className="p-4"><strong>Exports:</strong> FTAs, port upgrades, trade finance</CardContent></Card>
              <Card><CardContent className="p-4"><strong>Tech:</strong> AI adoption, UPI expansion, public digital infra</CardContent></Card>
              <Card><CardContent className="p-4"><strong>Green Growth:</strong> Green hydrogen, EV infra, ESG policies</CardContent></Card>
              <Card><CardContent className="p-4"><strong>Agri:</strong> FPOs, MSP reform, cold storage chains</CardContent></Card>
              <Card><CardContent className="p-4"><strong>Governance:</strong> Digital delivery, federal funding reform</CardContent></Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
