import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState('email');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (step === 'email') {
            const trimmedEmail = email.trim();
            if (!trimmedEmail || !trimmedEmail.includes('@')) {
                setError('Please enter a valid email address.');
                emailInputRef.current?.focus();
                return;
            }

            if (!trimmedEmail.endsWith('climaxlubs.com')) {
                setError("Email should end with '@climaxlubs.com'");
                emailInputRef.current?.focus();
                return;
            }

            setStep('password');
            setError('');
        } else if (step === 'password') {
            if (!password.trim()) {
                setError('Enter a password');
                passwordInputRef.current?.focus();
                return;
            } else {
                navigate('/dashboard');
            }
            
            setError('');
        }
    };

    const handleBack = () => {
        setPassword('');
        setError('');
        setShowPassword(false);
        setStep('email');
    };

    const handleClearEmail = () => {
        setEmail('');
        emailInputRef.current?.focus();
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (step === 'email') emailInputRef.current?.focus();
            else if (step === 'password') passwordInputRef.current?.focus();
        }, 300);
        return () => clearTimeout(timeout);
    }, [step]);

    // Expose only what the UI actually needs to know about
    return {
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
    };
}