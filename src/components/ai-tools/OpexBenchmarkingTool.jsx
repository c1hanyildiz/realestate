import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign, Building, Square, Users, Wrench, Zap, Droplet, Shield, Sparkles, Mail, Phone, Lock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const benchmarks = {
  janitorial: { min: 1.40, max: 3.75 },
  utilities: { electric: { min: 2.25, max: 3.50 }, gas: { min: 1.50, max: 2.25 }, water: { min: 0.50, max: 1.00 } },
  maintenance: 0.025, // 2.5% of property value (simplified to per sqft)
  staff: {
    porter: { nonUnion: 30, union: 55 },
    concierge: { nonUnion: 31, union: 48.5 },
    superintendent: { nonUnion: 45, union: 55 }, // Simplified hourly
    security: { nonUnion: 33, union: 50 },
  }
};

const OpexBenchmarkingTool = ({ isHomePageVersion = false }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: 'Residential',
    sqft: 50000,
    units: 50,
    isUnion: false,
    janitorialCost: '',
    useJanitorialBenchmark: true,
    utilitiesCost: '',
    useUtilitiesBenchmark: true,
    maintenanceCost: '',
    useMaintenanceBenchmark: true,
    staff: {
      porter: { included: true, cost: '', useBenchmark: true },
      concierge: { included: true, cost: '', useBenchmark: true },
      superintendent: { included: false, cost: '', useBenchmark: true },
      security: { included: false, cost: '', useBenchmark: true },
    },
    email: '',
    phone: '',
  });
  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStaffChange = (staffName, field, value) => {
    setFormData(prev => ({
      ...prev,
      staff: {
        ...prev.staff,
        [staffName]: { ...prev.staff[staffName], [field]: value }
      }
    }));
  };

  const calculatedCosts = useMemo(() => {
    const sqft = parseFloat(formData.sqft) || 0;
    if (sqft === 0) return {};

    const staffType = formData.isUnion ? 'union' : 'nonUnion';
    const annualHours = 2080;

    const janitorial = formData.useJanitorialBenchmark
      ? ((benchmarks.janitorial.min + benchmarks.janitorial.max) / 2) * sqft
      : parseFloat(formData.janitorialCost) || 0;

    const utilities = formData.useUtilitiesBenchmark
      ? ((benchmarks.utilities.electric.min + benchmarks.utilities.electric.max) / 2 +
         (benchmarks.utilities.gas.min + benchmarks.utilities.gas.max) / 2 +
         (benchmarks.utilities.water.min + benchmarks.utilities.water.max) / 2) * sqft
      : parseFloat(formData.utilitiesCost) || 0;

    const maintenance = formData.useMaintenanceBenchmark
      ? (sqft * 5) // Simplified benchmark
      : parseFloat(formData.maintenanceCost) || 0;

    const staffCost = Object.keys(formData.staff).reduce((total, role) => {
      const roleData = formData.staff[role];
      if (roleData.included) {
        const cost = roleData.useBenchmark
          ? benchmarks.staff[role][staffType] * annualHours
          : parseFloat(roleData.cost) || 0;
        return total + cost;
      }
      return total;
    }, 0);

    const total = janitorial + utilities + maintenance + staffCost;

    return { janitorial, utilities, maintenance, staff: staffCost, total };
  }, [formData]);

  const benchmarkCosts = useMemo(() => {
    const sqft = parseFloat(formData.sqft) || 0;
    if (sqft === 0) return {};
    
    const staffType = formData.isUnion ? 'union' : 'nonUnion';
    const annualHours = 2080;

    const janitorial = ((benchmarks.janitorial.min + benchmarks.janitorial.max) / 2) * sqft;
    const utilities = ((benchmarks.utilities.electric.min + benchmarks.utilities.electric.max) / 2 +
                       (benchmarks.utilities.gas.min + benchmarks.utilities.gas.max) / 2 +
                       (benchmarks.utilities.water.min + benchmarks.utilities.water.max) / 2) * sqft;
    const maintenance = sqft * 5;
    const staffCost = Object.keys(formData.staff).reduce((total, role) => {
      if (formData.staff[role].included) {
        return total + benchmarks.staff[role][staffType] * annualHours;
      }
      return total;
    }, 0);
    const total = janitorial + utilities + maintenance + staffCost;

    return { janitorial, utilities, maintenance, staff: staffCost, total };
  }, [formData.sqft, formData.isUnion, formData.staff]);

  const analyzeOpex = (e) => {
    e.preventDefault();
    const sqft = parseFloat(formData.sqft);
    if (!sqft || sqft <= 0) {
      toast({ title: "Invalid Input", description: "Please enter a valid square footage.", variant: "destructive" });
      return;
    }

    const userTotalPerSqft = calculatedCosts.total / sqft;
    const benchmarkTotalPerSqft = benchmarkCosts.total / sqft;
    
    const overspending = {};
    const comparisonData = [
      { name: 'Janitorial', yourCost: calculatedCosts.janitorial / sqft, benchmark: benchmarkCosts.janitorial / sqft },
      { name: 'Utilities', yourCost: calculatedCosts.utilities / sqft, benchmark: benchmarkCosts.utilities / sqft },
      { name: 'Maintenance', yourCost: calculatedCosts.maintenance / sqft, benchmark: benchmarkCosts.maintenance / sqft },
      { name: 'Staffing', yourCost: calculatedCosts.staff / sqft, benchmark: benchmarkCosts.staff / sqft },
    ];

    comparisonData.forEach(item => {
      if (item.yourCost > item.benchmark) {
        overspending[item.name] = ((item.yourCost - item.benchmark) / item.benchmark) * 100;
      }
    });

    const efficiencyScore = Math.max(0, Math.min(100, 100 - (userTotalPerSqft - benchmarkTotalPerSqft) / benchmarkTotalPerSqft * 50));

    setResults({
      userTotalPerSqft,
      benchmarkTotalPerSqft,
      efficiencyScore,
      overspending,
      comparisonData,
      totalSavings: Math.max(0, calculatedCosts.total - benchmarkCosts.total)
    });
    setStep(2);
  };

  const unlockReport = (e) => {
    e.preventDefault();
    if (!formData.email) {
      toast({ title: "Email Required", description: "Please enter your email to unlock the full report.", variant: "destructive" });
      return;
    }
    toast({ title: "Report Unlocked!", description: "Thank you! Here is your detailed analysis." });
    setStep(3);
  };

  const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);

  const renderForm = () => (
    <form onSubmit={analyzeOpex} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="propertyType">Property Type</Label>
          <div className="relative mt-1">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Mixed-Use</option>
            </select>
          </div>
        </div>
        <div>
          <Label htmlFor="sqft">Square Footage</Label>
          <div className="relative mt-1">
            <Square className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input id="sqft" name="sqft" type="number" placeholder="e.g., 50000" value={formData.sqft} onChange={handleInputChange} className="pl-10" required />
          </div>
        </div>
        <div>
          <Label htmlFor="units">Units / Floors</Label>
          <div className="relative mt-1">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input id="units" name="units" type="number" placeholder="e.g., 50" value={formData.units} onChange={handleInputChange} className="pl-10" />
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-thunders-light">
        <div className="flex items-center justify-between">
          <Label>Staffing: Union or Non-Union?</Label>
          <div className="flex items-center space-x-2">
            <Label htmlFor="isUnion" className={!formData.isUnion ? 'text-gold' : 'text-gray-400'}>Non-Union</Label>
            <Switch id="isUnion" checked={formData.isUnion} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isUnion: checked }))} />
            <Label htmlFor="isUnion" className={formData.isUnion ? 'text-gold' : 'text-gray-400'}>Union</Label>
          </div>
        </div>
      </div>

      {!isHomePageVersion && (
        <>
          <div className="space-y-4 pt-4 border-t border-thunders-light">
            <h4 className="font-semibold text-white">Enter Known Costs (or use benchmarks)</h4>
            {renderCostInput('janitorialCost', 'Janitorial/Cleaning', formData.useJanitorialBenchmark, (checked) => setFormData(prev => ({ ...prev, useJanitorialBenchmark: checked })))}
            {renderCostInput('utilitiesCost', 'Utilities (Electric, Gas, Water)', formData.useUtilitiesBenchmark, (checked) => setFormData(prev => ({ ...prev, useUtilitiesBenchmark: checked })))}
            {renderCostInput('maintenanceCost', 'Repairs & Maintenance', formData.useMaintenanceBenchmark, (checked) => setFormData(prev => ({ ...prev, useMaintenanceBenchmark: checked })))}
          </div>

          <div className="space-y-4 pt-4 border-t border-thunders-light">
            <h4 className="font-semibold text-white">Select Staffing Roles</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(formData.staff).map(role => (
                <div key={role} className="bg-thunders/50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`include-${role}`} className="capitalize text-white">{role}</Label>
                    <Checkbox id={`include-${role}`} checked={formData.staff[role].included} onCheckedChange={(checked) => handleStaffChange(role, 'included', checked)} />
                  </div>
                  {formData.staff[role].included && (
                    <div className="mt-2">
                      {renderCostInput(`${role}Cost`, 'Annual Cost', formData.staff[role].useBenchmark, (checked) => handleStaffChange(role, 'useBenchmark', checked), (e) => handleStaffChange(role, 'cost', e.target.value), formData.staff[role].cost)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-light text-black py-4 text-lg">
        <Sparkles className="mr-2" size={20} />
        {isHomePageVersion ? 'Get Your Free OPEX Score' : 'Analyze My OPEX'}
      </Button>
    </form>
  );

  const renderCostInput = (name, label, useBenchmark, onBenchmarkChange, onChange, value) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="text-gray-300">{label}</Label>
        <div className="flex items-center space-x-2">
          <Label htmlFor={`benchmark-${name}`} className="text-xs text-gray-400">Use Benchmark</Label>
          <Checkbox id={`benchmark-${name}`} checked={useBenchmark} onCheckedChange={onBenchmarkChange} />
        </div>
      </div>
      {!useBenchmark && (
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input id={name} name={name} type="number" placeholder="Enter annual cost" value={value ?? formData[name]} onChange={onChange ?? handleInputChange} className="pl-10" />
        </div>
      )}
    </div>
  );

  const renderResultsPreview = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6">
      <h3 className="text-2xl font-bold text-white">Your Preliminary Analysis is Ready!</h3>
      <div className="flex justify-around items-center">
        <div className="space-y-2">
          <p className="text-gray-400">Efficiency Score</p>
          <p className="text-6xl font-bold gradient-text">{Math.round(results.efficiencyScore)}</p>
          <p className="text-xs text-gray-500">out of 100</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400">Your OPEX / sq ft</p>
          <p className="text-3xl font-bold text-white">{formatCurrency(results.userTotalPerSqft)}</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400">NYC Benchmark / sq ft</p>
          <p className="text-3xl font-bold text-gold">{formatCurrency(results.benchmarkTotalPerSqft)}</p>
        </div>
      </div>
      <div className="bg-thunders/50 p-6 rounded-xl">
        <h4 className="font-semibold text-white mb-4">Unlock Your Full Report & Savings Analysis</h4>
        <p className="text-gray-300 mb-6">Enter your email to see a detailed cost breakdown, identify overspending areas, and get actionable recommendations.</p>
        <form onSubmit={unlockReport} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input type="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleInputChange} className="pl-10" required />
          </div>
          <Button type="submit" className="bg-gold hover:bg-gold-light text-black">
            <Lock className="mr-2" size={16} /> Unlock Full Report
          </Button>
        </form>
      </div>
    </motion.div>
  );

  const renderFullReport = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white">Your Full OPEX Analysis</h3>
        <p className="text-gray-300">Here's how your building stacks up against NYC benchmarks.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="glass-effect p-4 rounded-lg">
          <p className="text-sm text-gray-400">Efficiency Score</p>
          <p className="text-4xl font-bold gradient-text">{Math.round(results.efficiencyScore)}/100</p>
        </div>
        <div className="glass-effect p-4 rounded-lg">
          <p className="text-sm text-gray-400">Potential Annual Savings</p>
          <p className="text-4xl font-bold text-green-400">{formatCurrency(results.totalSavings)}</p>
        </div>
        <div className="glass-effect p-4 rounded-lg">
          <p className="text-sm text-gray-400">Your Total OPEX / sq ft</p>
          <p className="text-4xl font-bold text-white">{formatCurrency(results.userTotalPerSqft)}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-effect p-6 rounded-lg">
          <h4 className="font-bold text-white mb-4 text-center">Cost Breakdown (/ sq ft)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={results.comparisonData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.5rem' }}
                labelStyle={{ color: '#f9fafb' }}
              />
              <Bar dataKey="yourCost" name="Your Cost" fill="#8884d8">
                {results.comparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.yourCost > entry.benchmark ? '#f87171' : '#60a5fa'} />
                ))}
              </Bar>
              <Bar dataKey="benchmark" name="NYC Benchmark" fill="#ca8a04" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-effect p-6 rounded-lg">
          <h4 className="font-bold text-white mb-4 text-center">AI Recommendations</h4>
          <ul className="space-y-3">
            {Object.keys(results.overspending).length > 0 ? (
              Object.entries(results.overspending).map(([key, value]) => (
                <li key={key} className="flex items-start">
                  <div className="w-5 h-5 bg-red-500/20 text-red-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <Wrench size={12} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{key}</p>
                    <p className="text-gray-400 text-sm">Your costs are <span className="font-bold text-red-400">{value.toFixed(0)}% above</span> the NYC average. Consider renegotiating vendor contracts or exploring energy-efficient upgrades.</p>
                  </div>
                </li>
              ))
            ) : (
              <li className="flex items-start">
                <div className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                  <Shield size={12} />
                </div>
                <div>
                  <p className="text-white font-semibold">Excellent Efficiency!</p>
                  <p className="text-gray-400 text-sm">Your operating expenses are well within or below NYC benchmarks. Keep up the great work!</p>
                </div>
              </li>
            )}
            <li className="pt-4 border-t border-thunders-light">
              <Button as="a" href="/contact" className="w-full bg-gold hover:bg-gold-light text-black">
                <Phone className="mr-2" size={16} /> Request Full Cost Optimization Proposal
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={`py-20 ${isHomePageVersion ? 'bg-thunders' : 'bg-thunders-dark'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            NYC Building <span className="gradient-text">OPEX Benchmarking Tool</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Compare your operating expenses against industry benchmarks and uncover potential savings with our AI-powered calculator.
          </p>
        </div>
        <div className={`glass-effect rounded-2xl p-8 md:p-12 transition-all duration-500 ${step > 1 ? 'max-w-5xl mx-auto' : 'max-w-4xl mx-auto'}`}>
          {step === 1 && renderForm()}
          {step === 2 && renderResultsPreview()}
          {step === 3 && renderFullReport()}
        </div>
      </div>
    </section>
  );
};

export default OpexBenchmarkingTool;