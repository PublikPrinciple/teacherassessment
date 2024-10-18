import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const performanceData = [
  { month: 'Jan', emotional: 4.8, instructional: 4.2, gold: 80 },
  { month: 'Feb', emotional: 5.0, instructional: 4.5, gold: 82 },
  { month: 'Mar', emotional: 5.2, instructional: 4.7, gold: 85 },
  { month: 'Apr', emotional: 5.1, instructional: 4.6, gold: 84 },
  { month: 'May', emotional: 5.3, instructional: 4.8, gold: 87 },
  { month: 'Jun', emotional: 5.2, instructional: 4.7, gold: 85 },
];

const recommendedCourses = [
  { title: "Improving Emotional Support in the Classroom", duration: "3 hours", progress: 0 },
  { title: "Advanced Instructional Strategies", duration: "5 hours", progress: 25 },
  { title: "Integrating Technology in Early Childhood Education", duration: "4 hours", progress: 75 },
];

function Dashboard() {
  const [reflection, setReflection] = useState('');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">My Teaching Performance Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              CLASS Score (Emotional Support)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2/7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              CLASS Score (Instructional Support)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Teaching Strategies GOLD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              HSELOF Alignment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Progress Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Teaching Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="emotional" stroke="#8884d8" name="CLASS Emotional Support" />
              <Line yAxisId="left" type="monotone" dataKey="instructional" stroke="#82ca9d" name="CLASS Instructional Support" />
              <Line yAxisId="right" type="monotone" dataKey="gold" stroke="#ffc658" name="GOLD Proficiency" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Self-Reflection & Feedback Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>My Reflections</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="What went well this week? What challenges did you face?"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="min-h-[150px]"
            />
            <Button className="mt-4">Save Reflection</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback from Your Coach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Coach Nancy</p>
                  <p className="text-sm text-muted-foreground">Great job on implementing the new literacy activities! I noticed significant improvement in student engagement.</p>
                  <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Professional Development Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Professional Development Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedCourses.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{course.duration}</p>
                  <Progress value={course.progress} className="mb-2" />
                  <p className="text-sm text-muted-foreground">{course.progress}% complete</p>
                  <Button className="mt-4 w-full">
                    {course.progress === 0 ? 'Enroll Now' : 'Continue Course'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Child Outcomes Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Impact on Child Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">How your teaching practices are influencing children's progress</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Developmental Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">School Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Social-Emotional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.5/5</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default Dashboard;