import { ArrowUpRight, ChevronRight, CircleUserRound, CircleX, Copyright, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/slate700_logo.svg';
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
        <section className="min-h-screen flex items-center justify-center overflow-hidden bg-[#F0F4F9]">
            <Helmet>
                <title>Sign in - Climax EMS</title>
                <meta name='description' content='Climax EMS Staff Authentication' />
            </Helmet>
            <form 
                onSubmit={handleFormSubmit}
                className="relative max-w-120 w-full backdrop-blur-md flex flex-col items-center text-slate-700 p-8 bg-white rounded-4xl shadow shadow-slate-400/70 overflow-hidden"
            >
                {/* Header */}
                <header className='flex flex-col gap-4 items-center mb-4'>
                    <div>
                        <img src={logo} className="h-12" alt="Climax Logo" />
                    </div>
                    <div>
                        <h1 className='text-[32px] font-black tracking-tighter'>Welcome</h1>
                    </div>
                </header>

                {/* Sliding Viewport */}
                <div 
                    className='flex w-full transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] gap-10'
                    style={{ transform: `translateX(${step === 'password' ? '-110%' : '0%'})` }}
                >
                    {/* Step 1: Email Section */}
                    <div className='min-w-full flex flex-col items-center shrink-0'>
                        <h2 className='font-semibold text-center text-base mb-8'>Sign in with your Climax EMS account</h2>
                        <div className={`font-fit w-full flex items-center relative h-14 px-6 py-4 rounded-xl ring-1 transition-all gap-2
                            ${error && step === 'email'
                                ? 'focus-within:ring-2 ring-red-500 focus-within:ring-red-500/50'
                                : 'ring-gray-300 focus-within:ring-2 focus-within:ring-clx-green'
                            }`}>
                            <input 
                                ref={emailInputRef}
                                type='email'
                                name='email'
                                autoComplete='username'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder='Email@staff.climaxlubs.com'
                                className='w-full focus:outline-none transition-all placeholder:text-gray-300 pr-2'
                                disabled={step === 'password'}
                            />
                            
                            {email && step === 'email' && (
                                <button
                                    type='button'
                                    onClick={handleClearEmail}
                                    className='text-gray-400 hover:text-gray-600 cursor-pointer shrink-0 transition-colors'
                                    aria-label="Clear email"
                                >
                                    <CircleX size={16} />
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
                        <div className="h-6 w-full text-left mt-1">
                            {error && step === 'email' && <p className="text-[#e30000] text-sm">{error}</p>}
                        </div>
                    </div>

                    {/* Step 2: Password Section */}
                    <div className='min-w-full flex flex-col items-center shrink-0'>
                        <button
                            type='button'
                            onClick={handleBack}
                            className='mb-7 active:ring-2 active:ring-clx-green group flex items-center gap-1 max-w-100 bg-slate-200 hover:bg-slate-100 w-auto px-2 py-1 rounded-full transition-all cursor-pointer'
                        >
                            <CircleUserRound size={18} className='text-clx-green shrink-0' />
                            <span className='mb-0.5 font-fit text-base truncate flex items-center text-clx-green '>
                                {email}
                            </span>
                            <CircleX size={18} className='ml-2 shrink-0'/>
                        </button>
                        
                        <div className={`font-fit w-full flex items-center relative mb-1 h-14 px-6 py-4 rounded-2xl ring-1 transition-all gap-3
                            ${error && step === 'password'
                                ? 'focus-within:ring-2 ring-red-500 focus-within:ring-red-500/50'
                                : 'ring-gray-300 focus-within:ring-2 focus-within:ring-clx-green'
                            }`}>
                            <input 
                                ref={passwordInputRef}
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                autoComplete='current-password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                className='w-full focus:outline-none transition-all placeholder:text-gray-400 pr-2'
                                disabled={step === 'email'}
                            />
                            
                            {password && step === 'password' && (
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='text-gray-400 hover:text-gray-600 cursor-pointer shrink-0 transition-colors'
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            )}

                            {step === 'password' && (
                                <button
                                    type='submit'
                                    className='text-sm bg-clx-green text-white w-15 py-2 rounded-xl shrink-0 font-medium hover:bg-clx-green2 transition-all'
                                >
                                    <Link to='/messages'>Sign in</Link>
                                </button>
                            )}
                        </div>
                        <div className="h-6 w-full text-left mt-1">
                            {error && step === 'password' && <p className="text-[#e30000] text-sm">{error}</p>}
                        </div>
                    </div>
                </div>

                {/* Secondary Actions */}
                <div className='flex flex-col items-center font-semibold gap-1 font-fit mt-2'>
                    <h1 className='text-sm font-medium flex items-center gap-1 text-clx-green hover:text-clx-green2 cursor-pointer transition-all'>Forgot your password? <ArrowUpRight size={16}/></h1>
                    <h1 className='text-sm font-medium flex items-center gap-1'>
                        Don't have an account? 
                        <span className='flex items-center gap-1 text-clx-green hover:text-clx-green2 cursor-pointer transition-all'>
                            Request for one 
                            <ArrowUpRight size={16} />
                        </span>
                    </h1>
                </div>
            </form>

            {/* Footer */}
            <div className='absolute bottom-0 flex items-center gap-1 text-slate-400 pb-4'>
                <Copyright size={12} />
                <h1 className='text-[12px] font-fit'>Climax Lubricants Industries, 2026</h1>
            </div>
        </section>
    );
}