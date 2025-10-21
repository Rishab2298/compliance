import React, { useState } from 'react';
import { Shield, Building2, FileText, Bell, Users, Rocket, ArrowRight, ArrowLeft, Check, Upload, Mail, Phone, MapPin } from 'lucide-react';

export default function OnboardingDark() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    companySize: '',
    operatingRegion: '',
    statesProvinces: [],
    industryType: '',
    documents: ['drivers_license'],
    reminderDays: { drivers_license: [90, 30, 7] },
    notificationMethod: 'both',
    notificationRecipients: ['admin'],
    adminEmail: '',
    adminPhone: '',
    teamMembers: [],
    firstDriverName: '',
    firstDriverContact: '',
    firstDriverDocuments: []
  });

  const totalSteps = 5;

  const companySizes = [
    '1-10 drivers',
    '11-50 drivers',
    '51-200 drivers',
    '200+ drivers'
  ];

  const regions = ['United States', 'Canada', 'Both US & Canada'];

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
    'Wisconsin', 'Wyoming'
  ];

  const canadianProvinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'
  ];

  const industries = [
    'Amazon DSP',
    'FedEx Ground Contractor',
    'UPS Contractor',
    'Independent Delivery Service',
    'Food Delivery',
    'Other'
  ];

  const documentTypes = [
    { id: 'drivers_license', label: "Driver's License", mandatory: true },
    { id: 'vehicle_insurance', label: 'Vehicle Insurance', mandatory: false },
    { id: 'cdl', label: 'Commercial Driver\'s License (CDL)', mandatory: false },
    { id: 'dot_medical', label: 'DOT Medical Certificate', mandatory: false },
    { id: 'background_check', label: 'Background Check', mandatory: false },
    { id: 'drug_test', label: 'Drug Test Results', mandatory: false },
    { id: 'vehicle_registration', label: 'Vehicle Registration', mandatory: false },
    { id: 'proof_of_address', label: 'Proof of Address', mandatory: false }
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleDocument = (docId) => {
    if (docId === 'drivers_license') return; // Can't uncheck mandatory
    
    setFormData(prev => {
      const newDocs = prev.documents.includes(docId)
        ? prev.documents.filter(d => d !== docId)
        : [...prev.documents, docId];
      return { ...prev, documents: newDocs };
    });
  };

  const toggleStateProvince = (location) => {
    setFormData(prev => {
      const newLocations = prev.statesProvinces.includes(location)
        ? prev.statesProvinces.filter(l => l !== location)
        : [...prev.statesProvinces, location];
      return { ...prev, statesProvinces: newLocations };
    });
  };

  const toggleRecipient = (recipient) => {
    setFormData(prev => {
      const newRecipients = prev.notificationRecipients.includes(recipient)
        ? prev.notificationRecipients.filter(r => r !== recipient)
        : [...prev.notificationRecipients, recipient];
      return { ...prev, notificationRecipients: newRecipients };
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleComplete = () => {
    console.log('Onboarding completed:', formData);
    // Here you would send data to your API
    alert('Onboarding completed! Redirecting to dashboard...');
  };

  const getLocationOptions = () => {
    if (formData.operatingRegion === 'United States') return usStates;
    if (formData.operatingRegion === 'Canada') return canadianProvinces;
    return [...usStates, ...canadianProvinces];
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="mb-8 space-y-2 text-center">
              <div className="inline-block p-3 mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Company Information</h2>
              <p className="text-slate-400">Let's start with the basics about your DSP</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 text-white border rounded-lg bg-slate-800 border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Company Size *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {companySizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => updateFormData('companySize', size)}
                      className={`px-4 py-3 rounded-lg border transition-all ${
                        formData.companySize === size
                          ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Primary Operating Region *
                </label>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => updateFormData('operatingRegion', region)}
                      className={`w-full px-4 py-3 rounded-lg border transition-all flex items-center justify-between ${
                        formData.operatingRegion === region
                          ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {region}
                      </span>
                      {formData.operatingRegion === region && <Check className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </div>

              {formData.operatingRegion && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-300">
                    State(s)/Province(s) of Operation *
                  </label>
                  <div className="p-4 overflow-y-auto border rounded-lg bg-slate-800 border-slate-700 max-h-48">
                    <div className="grid grid-cols-2 gap-2">
                      {getLocationOptions().map((location) => (
                        <label
                          key={location}
                          className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-slate-700/50"
                        >
                          <input
                            type="checkbox"
                            checked={formData.statesProvinces.includes(location)}
                            onChange={() => toggleStateProvince(location)}
                            className="w-4 h-4 text-blue-500 rounded bg-slate-700 border-slate-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-slate-300">{location}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {formData.statesProvinces.length > 0 && (
                    <p className="mt-2 text-sm text-slate-400">
                      {formData.statesProvinces.length} selected
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Industry/Service Type
                </label>
                <select
                  value={formData.industryType}
                  onChange={(e) => updateFormData('industryType', e.target.value)}
                  className="w-full px-4 py-3 text-white border rounded-lg bg-slate-800 border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select industry type</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="mb-8 space-y-2 text-center">
              <div className="inline-block p-3 mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Document Requirements</h2>
              <p className="text-slate-400">Select which documents you need to track for compliance</p>
            </div>

            <div className="space-y-3">
              {documentTypes.map((doc) => (
                <div
                  key={doc.id}
                  className={`bg-slate-800 border rounded-lg p-4 transition-all ${
                    formData.documents.includes(doc.id)
                      ? 'border-blue-500'
                      : 'border-slate-700'
                  }`}
                >
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.documents.includes(doc.id)}
                      onChange={() => toggleDocument(doc.id)}
                      disabled={doc.mandatory}
                      className="w-5 h-5 mt-0.5 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{doc.label}</span>
                        {doc.mandatory && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                            Mandatory
                          </span>
                        )}
                      </div>
                      {formData.documents.includes(doc.id) && (
                        <div className="pl-2 mt-3 border-l-2 border-blue-500/30">
                          <p className="mb-2 text-sm text-slate-400">Send reminders (days before expiry):</p>
                          <div className="flex gap-2">
                            {[90, 60, 30, 14, 7].map((days) => (
                              <button
                                key={days}
                                onClick={() => {
                                  const current = formData.reminderDays[doc.id] || [];
                                  const updated = current.includes(days)
                                    ? current.filter(d => d !== days)
                                    : [...current, days].sort((a, b) => b - a);
                                  updateFormData('reminderDays', {
                                    ...formData.reminderDays,
                                    [doc.id]: updated
                                  });
                                }}
                                className={`px-3 py-1 rounded text-sm transition-all ${
                                  (formData.reminderDays[doc.id] || []).includes(days)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                              >
                                {days}d
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              ))}
            </div>

            <div className="flex gap-3 p-4 border rounded-lg bg-blue-500/10 border-blue-500/30">
              <div className="text-blue-400 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-300">Pro Tip</p>
                <p className="mt-1 text-sm text-slate-300">
                  We recommend 90, 30, and 7-day reminders to ensure drivers never miss renewals.
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="mb-8 space-y-2 text-center">
              <div className="inline-block p-3 mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Bell className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Notification Preferences</h2>
              <p className="text-slate-400">Configure how you want to receive compliance alerts</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-3 text-sm font-medium text-slate-300">
                  Primary Notification Method *
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'email', label: 'Email only', icon: <Mail className="w-5 h-5" /> },
                    { value: 'sms', label: 'SMS only', icon: <Phone className="w-5 h-5" /> },
                    { value: 'both', label: 'Both Email & SMS', icon: <Bell className="w-5 h-5" />, recommended: true }
                  ].map((method) => (
                    <button
                      key={method.value}
                      onClick={() => updateFormData('notificationMethod', method.value)}
                      className={`w-full px-4 py-3 rounded-lg border transition-all flex items-center justify-between ${
                        formData.notificationMethod === method.value
                          ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {method.icon}
                        {method.label}
                        {method.recommended && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                            Recommended
                          </span>
                        )}
                      </span>
                      {formData.notificationMethod === method.value && <Check className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-3 text-sm font-medium text-slate-300">
                  Who should receive compliance alerts? *
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'admin', label: 'Admin/Owner' },
                    { value: 'fleet_manager', label: 'Fleet Manager' },
                    { value: 'drivers', label: 'Drivers directly' },
                    { value: 'staff', label: 'Other staff members' }
                  ].map((recipient) => (
                    <label
                      key={recipient.value}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                        formData.notificationRecipients.includes(recipient.value)
                          ? 'bg-blue-500/10 border-blue-500/50'
                          : 'bg-slate-800 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.notificationRecipients.includes(recipient.value)}
                        onChange={() => toggleRecipient(recipient.value)}
                        className="w-4 h-4 text-blue-500 rounded bg-slate-700 border-slate-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-300">{recipient.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {(formData.notificationMethod === 'email' || formData.notificationMethod === 'both') && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-300">
                    Admin Email *
                  </label>
                  <input
                    type="email"
                    value={formData.adminEmail}
                    onChange={(e) => updateFormData('adminEmail', e.target.value)}
                    placeholder="admin@yourcompany.com"
                    className="w-full px-4 py-3 text-white border rounded-lg bg-slate-800 border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {(formData.notificationMethod === 'sms' || formData.notificationMethod === 'both') && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-300">
                    Admin Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.adminPhone}
                    onChange={(e) => updateFormData('adminPhone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 text-white border rounded-lg bg-slate-800 border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="mb-8 space-y-2 text-center">
              <div className="inline-block p-3 mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Team Setup</h2>
              <p className="text-slate-400">Invite team members to help manage compliance (optional)</p>
            </div>

            <div className="p-6 text-center border rounded-lg bg-slate-800/50 border-slate-700">
              <Users className="w-12 h-12 mx-auto mb-3 text-slate-600" />
              <h3 className="mb-2 text-lg font-semibold text-white">Invite Team Members</h3>
              <p className="mb-4 text-sm text-slate-400">
                You can add team members now or skip and do this later from Settings
              </p>
              <button className="px-6 py-2 text-white transition-all rounded-lg bg-slate-700 hover:bg-slate-600">
                Add Team Member
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={handleNext}
                className="text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Skip this step →
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="mb-8 space-y-2 text-center">
              <div className="inline-block p-3 mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Quick Start</h2>
              <p className="text-slate-400">Let's add your first driver to get started!</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Driver Name *
                </label>
                <input
                  type="text"
                  value={formData.firstDriverName}
                  onChange={(e) => updateFormData('firstDriverName', e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 text-white border rounded-lg bg-slate-800 border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Driver Email or Phone *
                </label>
                <input
                  type="text"
                  value={formData.firstDriverContact}
                  onChange={(e) => updateFormData('firstDriverContact', e.target.value)}
                  placeholder="john.doe@email.com or +1 555-123-4567"
                  className="w-full px-4 py-3 text-white border rounded-lg bg-slate-800 border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-3 text-sm font-medium text-slate-300">
                  Required Documents
                </label>
                <div className="space-y-2">
                  {formData.documents.map((docId) => {
                    const doc = documentTypes.find(d => d.id === docId);
                    return (
                      <div key={docId} className="flex items-center gap-3 px-4 py-3 border rounded-lg bg-slate-800 border-slate-700">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-slate-300">{doc?.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 p-4 border rounded-lg bg-blue-500/10 border-blue-500/30">
                <div className="text-blue-400 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-300">What happens next?</p>
                  <p className="mt-1 text-sm text-slate-300">
                    We'll send an email to your driver with a secure upload link. No login required!
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => {/* Handle bulk upload */}}
                className="flex items-center justify-center w-full gap-2 px-6 py-3 transition-all border rounded-lg bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300"
              >
                <Upload className="w-5 h-5" />
                Or upload multiple drivers via CSV
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={handleComplete}
                className="text-sm text-slate-400 hover:text-slate-300"
              >
                Skip for now, I'll add drivers later
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-w-full min-h-screen text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative elements */}
      <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl"></div>
      <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="p-6 md:p-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
              DSP ComplianceManager
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-slate-400">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-2 transition-all duration-300 ease-out bg-gradient-to-r from-blue-500 to-cyan-400"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`flex flex-col items-center ${
                    step <= currentStep ? 'text-blue-400' : 'text-slate-600'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      step < currentStep
                        ? 'bg-blue-500 text-white'
                        : step === currentStep
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white'
                        : 'bg-slate-800 text-slate-600'
                    }`}
                  >
                    {step < currentStep ? <Check className="w-4 h-4" /> : step}
                  </div>
                  <span className="hidden mt-2 text-xs md:block">
                    {step === 1 && 'Company'}
                    {step === 2 && 'Documents'}
                    {step === 3 && 'Notifications'}
                    {step === 4 && 'Team'}
                    {step === 5 && 'Start'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 py-8 md:px-10">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 border bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl md:p-12">
              {renderStep()}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="p-6 md:p-10">
          <div className="flex items-center justify-between max-w-3xl gap-4 mx-auto">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="flex items-center gap-3">
              {currentStep < totalSteps && (
                <button
                  onClick={() => setCurrentStep(totalSteps)}
                  className="px-6 py-3 font-medium transition-colors rounded-lg text-slate-400 hover:text-slate-300"
                >
                  Skip to finish
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 font-semibold transition-all rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 group"
              >
                {currentStep === totalSteps ? 'Complete Setup' : 'Continue'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 text-center">
          <p className="text-sm text-slate-500">
            Need help? <a href="/support" className="text-blue-400 hover:text-blue-300">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
}