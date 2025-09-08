import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DashboardSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className=" px-2 text-2xl font-bold tracking-wide text-gray-800 underline decoration-slate-400 underline-offset-[12px]">
          Profile Settings
        </h1>

        {/* Profile Settings */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="mb-2" htmlFor="name">
                  Full Name
                </Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label className="mb-2" htmlFor="email">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label className="mb-2" htmlFor="username">
                  Username
                </Label>
                <Input id="username" placeholder="johndoe" />
              </div>
              <div>
                <Label className="mb-2" htmlFor="phone">
                  Phone
                </Label>
                <Input id="phone" placeholder="+1 234 567 890" />
              </div>
            </div>
            <Button className="mt-4">Save Profile</Button>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Account</h2>
            <div className="space-y-3">
              <div>
                <Label className="mb-2" htmlFor="password">
                  Change Password
                </Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
              <div>
                <Label className="mb-2" htmlFor="confirm-password">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>
            <Button className="mt-4 bg-red-500 hover:bg-red-600">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Preferences</h2>
            <div className="flex items-center justify-between">
              <Label className="mb-2" htmlFor="dark-mode">
                Dark Mode
              </Label>
              <Switch id="dark-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label className="mb-2" htmlFor="notifications">
                Email Notifications
              </Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label className="mb-2" htmlFor="two-factor">
                Two-Factor Authentication
              </Label>
              <Switch id="two-factor" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSettings;
