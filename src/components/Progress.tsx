import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, GraduationCapIcon, CheckCircleIcon, BarChartIcon } from 'lucide-react';

const performanceData = [
  { month: 'Jan', emotional: 4.8, instructional: 4.2, classroom: 4.5, gold: 80 },
  { month: 'Feb', emotional: 5.0, instructional: 4.5, classroom: 4.6, gold: 82 },
  { month: 'Mar', emotional: 5.2, instructional: 4.7, classroom: 4.8, gold: 85 },
  { month: 'Apr', emotional: 5.1, instructional: 4.6, classroom: 4.7, gold: 84 },
  { month: 'May', emotional: 5.3, instructional: 4.8, classroom: 4.9, gold: 87 },
  { month: 'Jun', emotional: 5.2, instructional: 4.7, classroom: 4.8, gold: 85 },
];

const detailedMetrics = [
  { date: '2024-06-15', metric: 'Emotional Support', score: 5.2, change: 0.1 },
  { date: '2024-06-15', metric: 'Classroom Organization', score: 4.8, change: 0.0 },
  { date: '2024-06-15', metric: 'Instructional Support', score: 4.7, change: -0.1 },
  { date: '2024-05-15', metric: 'Emotional Support', score: 5.1, change: 0.2 },
  { date: '2024-05-15', metric: 'Classroom Organization', score: 4.8, change: 0.1 },
  { date: '2024-05-15', metric: 'Instructional Support', score: 4.8, change: 0.2 },
];

function Progress() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('6months');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <a href="/" className="text-blue-500">Home</a>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li>
            <a href="#" className="text-gray-500" aria-current="page">My Progress</a>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Progress Overview</h1>
      <p className="text-gray-600 mb-8">Track your performance and see how your teaching practices are improving over time.</p>

      {/* Progress Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall CLASS Score Change
            </CardTitle>
            <BarChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center">
              +1.2
              <ArrowUpIcon className="h-4 w-4 text-green-500 ml-2" />
            </div>
            <p className="text-xs text-muted-foreground">
              Last 3 months
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              GOLD Proficiency
            </CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center">
              +5%
              <ArrowUpIcon className="h-4 w-4 text-green-500 ml-2" />
            </div>
            <p className="text-xs text-muted-foreground">
              Increase in proficiency
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Professional Development
            </CardTitle>
            <CheckCircleIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Courses completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Child Outcome Impact
            </CardTitle>
            <GraduationCapIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
            <p className="text-xs text-muted-foreground">
              Overall child readiness
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Performance Graphs */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Performance Trends</CardTitle>
            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">Last 3 months</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overall" className="w-full">
            <TabsList>
              <TabsTrigger value="overall">Overall CLASS Performance</TabsTrigger>
              <TabsTrigger value="instructional">Instructional Support Trends</TabsTrigger>
              <TabsTrigger value="gold">GOLD Proficiency Progress</TabsTrigger>
              <TabsTrigger value="child">Child Outcome Indicators</TabsTrigger>
            </TabsList>
            <TabsContent value="overall">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="emotional" stroke="#8884d8" name="Emotional Support" />
                  <Line type="monotone" dataKey="instructional" stroke="#82ca9d" name="Instructional Support" />
                  <Line type="monotone" dataKey="classroom" stroke="#ffc658" name="Classroom Organization" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            {/* Add other TabsContent for different graph views */}
          </Tabs>
        </CardContent>
      </Card>

      {/* Detailed Metric Breakdown Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Detailed Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Metric</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {detailedMetrics.map((metric, index) => (
                <TableRow key={index}>
                  <TableCell>{metric.date}</TableCell>
                  <TableCell>{metric.metric}</TableCell>
                  <TableCell>{metric.score.toFixed(1)}</TableCell>
                  <TableCell>
                    <span className={`flex items-center ${metric.change > 0 ? 'text-green-500' : metric.change < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                      {metric.change > 0 ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : metric.change < 0 ? <ArrowDownIcon className="h-4 w-4 mr-1" /> : null}
                      {metric.change.toFixed(1)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Progress Insights & Recommendations */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Strength Identified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">You consistently excel in Emotional Support, scoring above the program average.</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700">Area for Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-600">Instructional Support shows fluctuating scores. Consider revisiting your training module on Interactive Teaching.</p>
                <Button className="mt-4" variant="outline">Review Module</Button>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">Recommended Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600">Enroll in the "Advanced Strategies for Classroom Organization" course to further improve your skills.</p>
                <Button className="mt-4" variant="outline">Enroll Now</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Goals & Progress Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Goals & Progress Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-start">
            <div className="w-2/3 pr-4">
              <h3 className="text-lg font-semibold mb-2">Current Goals</h3>
              <ul className="space-y-2">
                <li>
                  <p className="font-medium">Increase CLASS Instructional Support score by 1.0</p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">70%</span>
                  </div>
                </li>
                {/* Add more goals here */}
              </ul>
              <Button className="mt-4">Add New Goal</Button>
            </div>
            <div className="w-1/3">
              <h3 className="text-lg font-semibold mb-2">Upcoming Milestones</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                  <span>Coaching Session - July 15</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span>CLASS Assessment - August 1</span>
                </li>
                {/* Add more milestones here */}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default Progress;