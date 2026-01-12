import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import { User, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';

import Navbar from '@/components/client/Navbar';
import Footer from '@/components/client/Footer';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    post('/login');
  };

  const THEME = {
    primary: '#022c22',
    accent: '#bef264',
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Head title="Admin Login" />
      <Navbar />

      <main className="flex-grow-1">
        <div className="container-fluid">
          <div className="row min-vh-100">

            {/* LEFT BRAND */}
            <div className="col-lg-6 d-none d-lg-flex align-items-center position-relative p-0">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070"
                alt="Solar"
                className="position-absolute w-100 h-100 object-fit-cover"
                style={{ filter: 'brightness(0.4)' }}
              />

              <div
                className="position-absolute w-100 h-100"
                style={{
                  background: `linear-gradient(135deg, ${THEME.primary}, #064e3b)`,
                  opacity: 0.9,
                }}
              />

              <div className="position-relative text-white px-5 ms-5" style={{ maxWidth: 460 }}>
                <h1 className="fw-bold display-5 mb-3">
                  SOLAR<span style={{ color: THEME.accent }}>KON</span>
                </h1>
                <p className="fs-6 opacity-75">
                  Secure administrative access.
                </p>
              </div>
            </div>

            {/* RIGHT FULL FORM PANEL */}
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center"
              style={{
                background: 'linear-gradient(180deg, #ffffff, #f8fafc)',
              }}
            >
              <div className="w-100 px-4 px-md-5" style={{ maxWidth: 520 }}>

                {/* MOBILE LOGO */}
                <div className="text-center d-lg-none mb-5">
                  <h3 className="fw-bold" style={{ color: THEME.primary }}>
                    SOLARKON
                  </h3>
                </div>

                {/* FORM */}
                <div>
                  <h2 className="fw-bold mb-2">Welcome back</h2>
                  <p className="text-muted mb-5">
                    Sign in to continue to admin dashboard
                  </p>

                  <form onSubmit={submit}>
                    {/* USERNAME */}
                    <div className="mb-4">
                      <label className="small text-muted mb-2">
                        Username
                      </label>

                      <div className="position-relative">
                        <User
                          size={18}
                          className="position-absolute top-50 start-0 translate-middle-y ms-3"
                          color={focused === 'name' ? THEME.primary : '#9ca3af'}
                        />

                        <input
                          type="text"
                          value={data.name}
                          onChange={(e) => setData('name', e.target.value)}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          className="form-control ps-5 py-3 rounded-pill"
                          placeholder="Enter username"
                          style={{
                            background: '#ffffff',
                            border: focused === 'name'
                              ? `1px solid ${THEME.primary}`
                              : '1px solid #e5e7eb',
                          }}
                        />
                      </div>

                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>

                    {/* PASSWORD */}
                    <div className="mb-5">
                      <label className="small text-muted mb-2">
                        Password
                      </label>

                      <div className="position-relative">
                        <Lock
                          size={18}
                          className="position-absolute top-50 start-0 translate-middle-y ms-3"
                          color={focused === 'password' ? THEME.primary : '#9ca3af'}
                        />

                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={data.password}
                          onChange={(e) => setData('password', e.target.value)}
                          onFocus={() => setFocused('password')}
                          onBlur={() => setFocused(null)}
                          className="form-control ps-5 pe-5 py-3 rounded-pill"
                          placeholder="Enter password"
                          style={{
                            background: '#ffffff',
                            border: focused === 'password'
                              ? `1px solid ${THEME.primary}`
                              : '1px solid #e5e7eb',
                          }}
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 text-muted"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>

                      {errors.password && (
                        <small className="text-danger">{errors.password}</small>
                      )}
                    </div>

                    {/* BUTTON */}
                    <button
                      type="submit"
                      disabled={processing}
                      className="btn w-100 py-3 rounded-pill fw-bold text-white d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: THEME.primary,
                        boxShadow: '0 12px 24px rgba(2,44,34,0.35)',
                      }}
                    >
                      {processing ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Signing in...
                        </>
                      ) : (
                        <>
                          Login
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-center mt-5 small text-muted">
                    🔒 Secure Admin Access — Solarkon By Sulehri 
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

