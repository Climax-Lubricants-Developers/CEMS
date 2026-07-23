import { CircleX, Copyright, Eye, EyeOff } from 'lucide-react';
import { useSignInForm } from '../hooks/useSignInForm.js';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from "react-router-dom";
import sidebarimage from '../bg/IMG_0969.JPG';

export default function SignIn() {
    const {
        username,
        setUsername,
        password,
        setPassword,
        step,
        error,
        showPassword,
        setShowPassword,
        usernameInputRef,
        passwordInputRef,
        handleFormSubmit,
        handleBack,
        handleClearUsername,
    } = useSignInForm();

    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex flex-col lg:flex-row overflow-x-hidden bg-white dark:bg-[#1c1c1d] text-sm">
            <Helmet>
                <title>Sign in - Climax EMS</title>
                <meta name='description' content='Climax EMS Staff Authentication' />
            </Helmet>
            
            {/* Sidebar / Banner Image */}
            <div className='w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto relative overflow-hidden shrink-0'>
                <img 
                    src={sidebarimage} 
                    alt='sidebarimage' 
                    className='w-full h-full object-cover object-bottom-left' 
                />
            </div>

            {/* Form Section */}
            <div className='w-full lg:w-1/2 p-6 sm:p-10 dark:bg-[#2c2c2d] flex flex-col justify-between lg:justify-center items-center relative min-h-[calc(100vh-12rem)] lg:min-h-screen'>
                <form 
                    onSubmit={handleFormSubmit}
                    className="max-w-md w-full flex flex-col p-2 gap-6 text-slate-900 dark:text-white my-auto lg:my-0 overflow-hidden"
                >
                    {/* Header */}
                    <header>
                        <h1 className='text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight'>
                            Sign In
                        </h1>
                    </header>

                    {/* Sliding Viewport */}
                    <div 
                        className='flex w-full transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] gap-4'
                        style={{ transform: `translateX(${step === 'password' ? '-103.5%' : '0%'})` }}
                    >
                        {/* Username Section */}
                        <div className='min-w-full flex flex-col items-start shrink-0 gap-6'>
                            <h2 className='font-medium text-slate-900 dark:text-white'>
                                Climax ERP Account
                            </h2>
                            
                            {/* Input Container */}
                            <div className={`w-full h-14 flex items-center px-4 gap-2 rounded-sm transition-all bg-slate-100 dark:bg-[#1c1c1d]
                                ${error && step === 'username'
                                    ? 'focus-within:ring-2 ring-red-500 focus-within:ring-red-500'
                                    : 'ring-gray-400 dark:ring-[#5C5C5C] focus-within:ring-2 focus-within:ring-clx-green'
                                }`}>
                                <input 
                                    ref={usernameInputRef}
                                    type='text'
                                    name='username'
                                    autoComplete='username'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder='Username'
                                    className='w-full focus:outline-none transition-all placeholder:font-normal placeholder:text-gray-400 dark:placeholder:text-white/50 text-slate-900 dark:text-white bg-transparent'
                                    disabled={step === 'password'}
                                />

                                {username && step === 'username' && (
                                    <button
                                        type='button'
                                        onClick={handleClearUsername}
                                        className='text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-400 cursor-pointer shrink-0 transition-colors'
                                        aria-label="Clear username"
                                    >
                                        <CircleX size={16} className='dark:text-white/60'/>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className='min-w-full flex flex-col shrink-0 gap-6'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1 className='max-w-[200px] truncate text-clx-green font-medium'>
                                        {username}
                                    </h1>
                                </div>
                                <button type='button' onClick={handleBack}>
                                    <h2 className='underline underline-offset-2 hover:font-medium transition-all'>
                                        Change
                                    </h2>
                                </button>
                            </div>
                            
                            {/* Input Container */}
                            <div className={`w-full flex items-center relative h-14 px-4 gap-2 rounded-sm transition-all bg-slate-100 dark:bg-[#1c1c1d]
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
                                    className='w-full focus:outline-none transition-all placeholder:font-normal placeholder:text-gray-400 dark:placeholder:text-white/50 text-slate-900 dark:text-white bg-transparent'
                                    disabled={step === 'username'}
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
                            </div>
                        </div>
                    </div>

                    {/* Main Action Button */}
                    <button 
                        type={step === 'username' ? 'button' : 'submit'}
                        onClick={step === 'username' ? handleFormSubmit : undefined}
                        disabled={step === 'username' ? !username : !password}
                        className={`w-full py-3 px-4 bg-clx-green rounded-sm font-medium text-white text-[12px] transition-all
                            ${(step === 'username' ? !username: !password)
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'opacity-100 cursor-pointer hover:bg-clx-green/80'
                            }`}
                    >
                        {step === 'username' ? 'Next' : 'Sign in'}
                    </button>

                    {/* Links footer */}
                    <div className='relative flex flex-col gap-1 items-start font-normal w-full text-[12px]'>
                        {/* Centralized Error Message */}
                        {error && (step === 'username' || step === 'password') && (
                            <p className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#e30000] text-[13px] whitespace-nowrap">
                                ! {error}
                            </p>
                        )}

                        <h1 className='flex items-center gap-1 font-medium underline underline-offset-1 text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-all'>
                            Trouble signing in?
                        </h1>
                        <h1 className='flex flex-wrap items-center gap-1 text-slate-900 dark:text-white'>
                            <span>Don't have an account?</span> 
                            <span className='font-medium underline underline-offset-1 text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-all'>
                                Request for one 
                            </span>
                        </h1>
                    </div>
                </form>

                {/* Footer */}
                <div className='mt-8 lg:mt-0 lg:absolute lg:bottom-4 flex items-center gap-1 text-slate-400 dark:text-white/70'>
                    <Copyright size={12} />
                    <h1 className='text-[12px] font-fit'>Climax Lubricants Industries, 2026</h1>
                </div>
            </div>
        </section>
    );
}