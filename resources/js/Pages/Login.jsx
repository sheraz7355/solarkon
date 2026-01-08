import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    // Solarkon Brand Colors
    const THEME = {
        primary: '#022c22', // Dark Green
        accent: '#bef264',  // Lime Green
        text: '#1f2937',
        lightGray: '#f9fafb'
    };

    return (
        <div className="min-h-screen w-full flex bg-white font-sans">
            <Head title="Admin Login" />

            {/* LEFT SIDE: BRANDING IMAGE (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gray-900">
                {/* Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Solar Panels"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                
                {/* Dark Green Gradient Overlay */}
                <div 
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, ${THEME.primary}DD, ${THEME.primary}99)` }} // Hex opacity
                />

                {/* Text Content over Image */}
                <div className="relative z-10 flex flex-col justify-between p-12 w-full text-white">
                    <div>
                        <h1 className="text-3xl font-bold tracking-wider">SOLARKON</h1>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold mb-4 leading-tight">
                            Powering the future,<br />
                            <span style={{ color: THEME.accent }}>sustainably.</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-md">
                            Welcome to the administrative control panel. manage projects, data, and settings securely.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: LOGIN FORM */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    {/* Mobile Logo (Visible only on small screens) */}
                    <div className="lg:hidden mb-8 text-center">
                        <h1 className="text-3xl font-bold" style={{ color: THEME.primary }}>SOLARKON</h1>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                        <p className="text-gray-500">Enter your admin credentials to continue.</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        
                        {/* USERNAME FIELD */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </span>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all"
                                    style={{ 
                                        '--tw-ring-color': THEME.primary, // Custom ring color
                                        borderColor: errors.name ? '#ef4444' : '' 
                                    }}
                                    placeholder="admin"
                                    required
                                    autoFocus
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>
                            )}
                        </div>

                        {/* PASSWORD FIELD */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all"
                                    style={{ 
                                        '--tw-ring-color': THEME.primary,
                                        borderColor: errors.password ? '#ef4444' : '' 
                                    }}
                                    placeholder="••••••••"
                                    required
                                />
                                
                                {/* Eye Toggle */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1 ml-1">{errors.password}</p>
                            )}
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-4 rounded-xl font-bold text-white shadow-md hover:shadow-lg transform active:scale-[0.98] transition-all duration-200"
                            style={{ 
                                backgroundColor: THEME.primary, 
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            {processing ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Authenticating...
                                </span>
                            ) : (
                                'Access Dashboard'
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                            © 2024 Solarkon Secure System
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}