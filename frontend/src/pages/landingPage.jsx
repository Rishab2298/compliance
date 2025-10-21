import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  Users,
  FileText,
  Bell,
  BarChart3,
  Lock,
  Upload,
  Mail,
  MessageSquare,
  Award,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered OCR",
      description:
        "Automatically extract expiry dates from licenses, IDs, and insurance docs with AWS Textract + GPT-4o refinement",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Reminders",
      description:
        "Customizable email & SMS alerts keep your drivers compliant before documents expire",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Audit-Ready",
      description:
        "Complete audit logs, encrypted storage, and compliance reports for US & Canada regulations",
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Frictionless Upload",
      description:
        "Drivers upload documents via email link—no login required, making onboarding effortless",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Tenant Ready",
      description:
        "Secure isolation for multiple DSPs with role-based access control and tenant management",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Dashboard",
      description:
        "Track document status, upcoming expiries, and compliance metrics at a glance",
    },
  ];

  const benefits = [
    {
      icon: <Clock />,
      title: "Save 15+ Hours/Week",
      desc: "Automate manual document tracking",
    },
    {
      icon: <TrendingUp />,
      title: "99% Compliance Rate",
      desc: "Never miss a renewal deadline",
    },
    {
      icon: <Lock />,
      title: "Enterprise Security",
      desc: "Bank-grade encryption & access controls",
    },
    {
      icon: <Award />,
      title: "Audit Confidence",
      desc: "Complete paper trail for inspections",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Invite Drivers",
      desc: "Send secure email invites with one-time upload links",
      icon: <Mail />,
    },
    {
      step: "2",
      title: "Auto-Extract",
      desc: "AI reads documents and captures expiry dates instantly",
      icon: <FileText />,
    },
    {
      step: "3",
      title: "Verify & Track",
      desc: "Review extracted data and monitor compliance status",
      icon: <CheckCircle />,
    },
    {
      step: "4",
      title: "Auto-Remind",
      desc: "System sends timely alerts before documents expire",
      icon: <MessageSquare />,
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "49",
      features: [
        "Up to 25 drivers",
        "500 AI scans/month",
        "Email reminders",
        "Basic dashboard",
        "Email support",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "149",
      features: [
        "Up to 100 drivers",
        "2,000 AI scans/month",
        "Email + SMS reminders",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited drivers",
        "Unlimited AI scans",
        "Multi-location support",
        "SSO integration",
        "Dedicated account manager",
        "Custom integrations",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white w-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Compliance Manager
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-blue-400 transition-colors">
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-blue-400 transition-colors">
                How It Works
              </a>
              <a
                href="#pricing"
                className="hover:text-blue-400 transition-colors">
                Pricing
              </a>
              <SignedOut>
                <SignInButton>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    Get Started
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block hover:text-blue-400">
                Features
              </a>
              <a href="#how-it-works" className="block hover:text-blue-400">
                How It Works
              </a>
              <a href="#pricing" className="block hover:text-blue-400">
                Pricing
              </a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  Automated Compliance for DSPs
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Never Miss a
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Document Expiry
                </span>{" "}
                Again
              </h1>
              <p className="text-xl text-slate-300">
                Centralized driver document management with AI-powered
                extraction, smart reminders, and audit-ready compliance
                tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <div className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`bg-slate-800/50 p-4 rounded-lg border border-slate-700 transition-all duration-500 ${
                        activeFeature === i
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : ""
                      }`}>
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-lg ${
                            activeFeature === i
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-slate-700 text-slate-400"
                          }`}>
                          {features[i].icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{features[i].title}</h4>
                          <p className="text-sm text-slate-400 mt-1">
                            {features[i].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="inline-block p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-3">
                  {React.cloneElement(benefit.icon, {
                    className: "w-6 h-6 text-blue-400",
                  })}
                </div>
                <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need for
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Compliance Excellence
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Powerful features designed for modern delivery service providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon, {
                    className: "text-blue-400",
                  })}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Compliant in
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Four Simple Steps
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              From onboarding to compliance in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent -translate-x-8"></div>
                )}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg inline-block mb-4">
                    {React.cloneElement(step.icon, {
                      className: "w-6 h-6 text-blue-400",
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Flexible pricing that grows with your fleet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-blue-500 shadow-2xl shadow-blue-500/20 scale-105"
                    : "border-slate-700"
                } relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-slate-400">/month</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 mt-12">
            All plans include 14-day free trial • No credit card required •
            Cancel anytime
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Eliminate Compliance Headaches?
              </h2>
              <p className="text-xl mb-8 text-blue-50">
                Join forward-thinking DSPs already saving time and reducing risk
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">DSP ComplianceManager</span>
              </div>
              <p className="text-slate-400 text-sm">
                Automated driver document compliance for modern delivery service
                providers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 DSP ComplianceManager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
