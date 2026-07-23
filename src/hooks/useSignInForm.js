import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSignInForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState('username');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (step === 'username') {
            const trimmedUsername = username.trim();
            if (!trimmedUsername) {
                setError('Please enter your Username');
                usernameInputRef.current?.focus();
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
        setStep('username');
    };

    const handleClearUsername = () => {
        setUsername('');
        usernameInputRef.current?.focus();
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (step === 'username') usernameInputRef.current?.focus();
            else if (step === 'password') passwordInputRef.current?.focus();
        }, 300);
        return () => clearTimeout(timeout);
    }, [step]);

    // Expose only what the UI actually needs to know about
    return {
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
    };
}