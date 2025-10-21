import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import ClientDashboard from "./client/clientDashboard";
import { SidebarProvider } from "./components/ui/sidebar";
import Drivers from "./client/drivers";
import Compliance from "./client/compliance";
import Billing from "./client/billing";
import Storage from "./client/storage";
import Calendar from "./client/calendar";
import Reminders from "./client/reminders";
import DriverLicense from "./client/driverLicense";
import Passport from "./client/passport";
import Layout from "./layout/layout"
import SignInPage from "./authentication/signin";
import SignUpPage from "./authentication/signup";
import LandingPage from "./pages/landingPage";

import Dashboard from "./pages/dashboard-sample";

import OnboardingDark from "./pages/onboardingPageDark";
import OnboardingLight from "./pages/onboardingPageLight";

const router = createBrowserRouter([
  // Public Routes
  {
    
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding-dark",
        element: <OnboardingDark />,
      },
      {
        path: "/onboarding-light",
        element: <OnboardingLight />,
      },{
        path:"/dashboard-sample",
        element:<Dashboard />
      }
    ],
  },
  {
    children: [
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      // you can add more public pages here
    ],
  },
  
  {
    element: <AppLayout />,
    children: [
      {
        path: "/client/dashboard",
        element: <ClientDashboard />,
      },
      {
        path: "/client/drivers",
        element: <Drivers />,
      },
      {
        path: "/client/compliance",
        element: <Compliance />,
      },
      {
        path: "/client/calendar",
        element: <Calendar />,
      },
      {
        path: "/client/storage",
        element: <Storage />,
      },
      {
        path: "/client/billing",
        element: <Billing />,
      },
      {
        path: "/client/reminders",
        element: <Reminders />,
      },
      {
        path: "/client/smart-upload-driver-license",
        element: <DriverLicense />,
      },
      {
        path: "/client/smart-upload-passport",
        element: <Passport />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </>
  );
}

export default App;
