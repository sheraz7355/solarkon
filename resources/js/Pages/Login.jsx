import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import { User, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';

// Import your components
import Navbar from '@/components/client/Navbar'; // Adjust path if needed (e.g. ../components/...)
import Footer from '@/components/client/Footer'; // Adjust path if needed

export default function Login() {
    // 1. Use Inertia's useForm for Laravel authentication
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    // 2. Handle Login
    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    // Brand Colors
    const THEME = {
        primary: '#022c22', // Dark Green
        accent: '#bef264',  // Lime
        text: '#1f2937',
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Head title="Admin Login" />
            
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Main Content Area */}
            <div className="flex-grow-1 d-flex align-items-stretch overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="row g-0 h-100">
                        
                        {/* LEFT SIDE: Branding (Hidden on mobile, visible on Large screens) */}
                        <div className="col-lg-6 d-none d-lg-block position-relative" style={{ minHeight: '80vh' }}>
                            <img 
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop" 
                                alt="Solar Panels"
                                className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                                style={{ filter: 'brightness(0.4)' }}
                            />
                            
                            {/* Green Overlay */}
                            <div 
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{ 
                                    background: `linear-gradient(135deg, ${THEME.primary} 0%, rgba(3, 61, 46, 0.9) 50%, ${THEME.primary} 100%)`,
                                    opacity: 0.9
                                }} 
                            />

                            {/* Text Content */}
                            <div className="position-relative z-2 d-flex flex-col justify-content-between p-5 h-100 text-white">
                                <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill border border-white border-opacity-25 bg-white bg-opacity-10">
                                    <div className="rounded-circle bg-warning" style={{ width: 8, height: 8 }}></div>
                                    <span className="small fw-bold tracking-wider">ADMIN PORTAL</span>
                                </div>

                                <div className="mb-5">
                                    <h1 className="display-3 fw-bold lh-1 mb-4">
                                        SOLAR<span style={{ color: THEME.accent }}>KON</span>
                                    </h1>
                                    <h2 className="display-6 fw-bold mb-3">
                                        Powering the future, <br />
                                        <span style={{ color: THEME.accent }}>sustainably.</span>
                                    </h2>
                                    <p className="fs-5 opacity-75" style={{ maxWidth: '450px' }}>
                                        Secure access point for administrative controls, project management, and system analytics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Login Form */}
                        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center bg-white">
                            <div className="w-100 p-4 p-md-5" style={{ maxWidth: '480px' }}>
                                
                                {/* Mobile Header */}
                                <div className="text-center d-lg-none mb-4">
                                    <h2 className="fw-bold" style={{ color: THEME.primary }}>SOLARKON</h2>
                                </div>

                                <div className="mb-4">
                                    <h3 className="fw-bold text-dark mb-1">Welcome Back</h3>
                                    <p className="text-muted">Please enter your details to sign in.</p>
                                </div>

                                <form onSubmit={submit}>
                                    {/* Username Field */}
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold small text-secondary">USERNAME</label>
                                        <div className="position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary">
                                                <User size={20} color={focusedField === 'name' ? THEME.primary : '#9ca3af'} />
                                            </div>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                className="form-control form-control-lg ps-5"
                                                placeholder="Enter username"
                                                style={{ 
                                                    fontSize: '15px', 
                                                    paddingTop: '12px', 
                                                    paddingBottom: '12px',
                                                    borderColor: errors.name ? '#dc3545' : (focusedField === 'name' ? THEME.primary : '#dee2e6'),
                                                    boxShadow: 'none',
                                                    backgroundColor: '#f8f9fa'
                                                }}
                                            />
                                        </div>
                                        {errors.name && <small className="text-danger mt-1 d-block">{errors.name}</small>}
                                    </div>

                                    {/* Password Field */}
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold small text-secondary">PASSWORD</label>
                                        <div className="position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary">
                                                <Lock size={20} color={focusedField === 'password' ? THEME.primary : '#9ca3af'} />
                                            </div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                onFocus={() => setFocusedField('password')}
                                                onBlur={() => setFocusedField(null)}
                                                className="form-control form-control-lg ps-5 pe-5"
                                                placeholder="Enter password"
                                                style={{ 
                                                    fontSize: '15px', 
                                                    paddingTop: '12px', 
                                                    paddingBottom: '12px',
                                                    borderColor: errors.password ? '#dc3545' : (focusedField === 'password' ? THEME.primary : '#dee2e6'),
                                                    boxShadow: 'none',
                                                    backgroundColor: '#f8f9fa'
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="btn border-0 position-absolute top-50 end-0 translate-middle-y pe-3"
                                                style={{ color: '#6c757d' }}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        {errors.password && <small className="text-danger mt-1 d-block">{errors.password}</small>}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="btn w-100 py-3 rounded-3 d-flex align-items-center justify-content-center gap-2 fw-bold text-white shadow-sm"
                                        style={{ backgroundColor: THEME.primary, border: 'none' }}
                                    >
                                        {processing ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                <span>Verifying...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Login to Dashboard</span>
                                                <ArrowRight size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>

                                <div className="mt-4 text-center">
                                    <small className="text-muted">
                                        <Lock size={12} className="me-1 mb-1" />
                                        Secured by Solarkon © 2024
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Footer */}
            <Footer />
        </div>
    );
}