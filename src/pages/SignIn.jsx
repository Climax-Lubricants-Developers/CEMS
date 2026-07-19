import { ArrowUpRight, ChevronRight, CircleUserRound, CircleX, Copyright, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/slate900_logo.svg';
import logo2 from '../assets/logowhite_2.svg';
import { useSignInForm } from '../hooks/useSignInForm.js';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        step,
        error,
        showPassword,
        setShowPassword,
        emailInputRef,
        passwordInputRef,
        handleFormSubmit,
        handleBack,
        handleClearEmail,
    } = useSignInForm();

    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#1c1c1d] text-sm">
            <Helmet>
                <title>Sign in - Climax EMS</title>
                <meta name='description' content='Climax EMS Staff Authentication' />
            </Helmet>
            <form 
                onSubmit={handleFormSubmit}
                className="relative max-w-112.5 w-full flex flex-col items-center justify-between gap-8 px-8 py-10 text-slate-900 dark:text-white bg-white dark:bg-[#2c2c2d] rounded-4xl shadow shadow-slate-400/70 dark:shadow-black/50 overflow-hidden"
            >
                {/* Header */}
                <header className='m'>
                    <img src={logo} className="h-12 dark:hidden" alt="Climax Logo" />
                    <img src={logo2} className="h-12 hidden dark:block" alt="Climax Logo" />
                </header>

                {/* Sliding Viewport */}
                <div 
                    className='flex items-center w-full transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] mb-2 gap-10'
                    style={{ transform: `translateX(${step === 'password' ? '-110%' : '0%'})` }}
                >
                    {/* Step 1: Email Section */}
                    <div className='min-w-full flex flex-col items-center shrink-0 gap-8'>
                        <h2 className='py-0.5 font-normal text-slate-900 dark:text-white'>Sign in with your Climax EMS account</h2>
                        <div className={`w-full h-14 flex items-center px-4 gap-2 rounded-2xl ring-1 transition-all bg-white dark:bg-[#1c1c1d]
                            ${error && step === 'email'
                                ? 'focus-within:ring-2 ring-red-500 focus-within:ring-red-500'
                                : 'ring-gray-400 dark:ring-[#5C5C5C] focus-within:ring-2 focus-within:ring-clx-green'
                            }`}>
                            <input 
                                ref={emailInputRef}
                                type={'email'}
                                name='email'
                                autoComplete='username'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder='Email@staff.climaxlubs.com'
                                className='w-full focus:outline-none transition-all placeholder:font-normal placeholder:text-gray-400 dark:placeholder:text-white/50 bg-white dark:bg-[#1c1c1d] text-slate-900 dark:text-white'
                                disabled={step === 'password'}
                            />

                            {email && step === 'email' && (
                                <button
                                    type='button'
                                    onClick={handleClearEmail}
                                    className='text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-400 cursor-pointer shrink-0 transition-colors'
                                    aria-label="Clear email"
                                >
                                    <CircleX size={16} className='dark:text-white/60'/>
                                </button>
                            )}

                            {step === 'email' && (
                                <button
                                    type='submit'
                                    className='flex justify-center items-center size-6 rounded-full bg-clx-green hover:bg-clx-green2 cursor-pointer shrink-0'
                                >
                                    <ChevronRight size={20} className='text-white'/>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Step 2: Password Section */}
                    <div className='min-w-full flex flex-col items-center shrink-0 gap-8'>
                        <button
                            type='button'
                            onClick={handleBack}
                            className='active:ring-2 active:ring-clx-green group flex items-center bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 w-auto px-3 py-1 rounded-full transition-all cursor-pointer select-none max-w-full'
                        >
                            <CircleUserRound size={16} className='text-clx-green mr-1.5 shrink-0' />
                            <span className='block max-w-50 truncate text-clx-green font-normal leading-none align-middle mb-0.5'>
                                {email}
                            </span>
                            <CircleX size={16} className='text-clx-green2 dark:text-white/50 ml-1.5 shrink-0'/>
                        </button>
                        
                        <div className={`w-full flex items-center relative h-14 px-4 gap-2 rounded-2xl ring-1 transition-all bg-white dark:bg-[#1c1c1d]
                            ${error && step === 'password'
                                ? 'focus-within:ring-2 ring-red-500 focus-within:ring-red-500'
                                : 'ring-gray-400 dark:ring-[#5C5C5C] focus-within:ring-2 focus-within:ring-clx-green'
                            }`}>
                            <input 
                                ref={passwordInputRef}
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                autoComplete='current-password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                className='w-full focus:outline-none transition-all placeholder:font-normal placeholder:text-gray-400 dark:placeholder:text-white/50 bg-white dark:bg-[#1c1c1d] text-slate-900 dark:text-white'
                                disabled={step === 'email'}
                            />
                            
                            {password && step === 'password' && (
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-400 cursor-pointer shrink-0 transition-colors'
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            )}

                            {step === 'password' && (
                                <button
                                    type='submit'
                                    className='bg-clx-green text-white w-15 py-2 rounded-xl shrink-0 font-normal hover:bg-clx-green2 transition-all'
                                >
                                    Sign in
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Links footer */}
                <div className='relative flex flex-col items-center gap-1 font-normal w-full'>
                    {/* Centralized, Absolute Error Message Block */}
                    {error && (step === 'email' || step === 'password') && (
                        <p className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#e30000] text-[13px] whitespace-nowrap">
                            ! {error}
                        </p>
                    )}

                    <h1 className='flex items-center gap-1 text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-all'>Forgot your password? <ArrowUpRight size={16}/></h1>
                    <h1 className='flex items-center gap-1 text-slate-900 dark:text-white'>
                        Don't have an account? 
                        <span className='flex items-center gap-1 text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-all'>
                            Request for one 
                            <ArrowUpRight size={16} />
                        </span>
                    </h1>
                </div>
            </form>

            {/* Footer */}
            <div className='absolute bottom-0 flex items-center gap-1 text-slate-400 dark:text-white/70'>
                <Copyright size={12} />
                <h1 className='text-[12px] font-fit'>Climax Lubricants Industries, 2026</h1>
            </div>
        </section>
    );
}