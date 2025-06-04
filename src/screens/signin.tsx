import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TextBox } from '../components';

function SignIn() {

    const [formData, setFormData] = useState({
        emailAddress: '',
        password: '',
    });

    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setFormData({ ...formData, emailAddress: email });
        if (emailError)
            setEmailError(!validateEmail(formData.emailAddress) && formData.emailAddress.trim() !== '');
    };

    const handleEmailBlur = () => {
        setEmailError(!validateEmail(formData.emailAddress) && formData.emailAddress.trim() !== '');
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, password: e.target.value });
    };

    const isFormValid = validateEmail(formData.emailAddress) && formData.password.trim() !== '';

    return (
        <div className="min-h-screen w-full max-w-md p-5 bg-[#F7F8F9] space-y-7 pt-9">
            <div>
                <h2 className="text-[27px] leading-8 font-semibold text-[#1D2226] text-left mb-3 ">
                    Signin to your <br /> PopX account
                </h2>
                <p className="text-[var(--secondary-text-color)] text-[17px] text-left w-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="flex gap-5 flex-col mb-3">
                <div>
                    <TextBox
                        label="Email address"
                        placeholder="Enter email address"
                        value={formData.emailAddress}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        error={emailError}
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
                    )}
                </div>
                <TextBox
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handlePasswordChange}
                    error={false}
                />
            </div>
            <Link to="/account">
                <button
                    className={isFormValid ? 'bg-[var(--primary-color)] hover:bg-[#6316fd]' : ''}
                    disabled={!isFormValid}
                >
                    Login
                </button>
            </Link>
        </div>
    );
}

export default SignIn;