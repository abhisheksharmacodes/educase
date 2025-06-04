import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { TextBox } from '../components'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

function SignUp() {
    const [agency, setAgency] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: ''
    });
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber: string) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const handleAgencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgency(event.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            email,
        }));
        if (emailError) {
            setEmailError(!validateEmail(email) && email.trim() !== '');
        }
    };

    const handleEmailBlur = () => {
        setEmailError(!validateEmail(formData.email) && formData.email.trim() !== '');
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phoneNumber = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            phoneNumber,
        }));
        if (phoneError) {
            setPhoneError(!validatePhoneNumber(phoneNumber) && phoneNumber.trim() !== '');
        }
    };

    const handlePhoneBlur = () => {
        setPhoneError(!validatePhoneNumber(formData.phoneNumber) && formData.phoneNumber.trim() !== '');
    };

    const isFormValid = () => {
        return (
            formData.username &&
            formData.phoneNumber &&
            formData.email &&
            formData.password &&
            formData.companyName &&
            !emailError &&
            !phoneError
        );
    };

    return (
        <div className="min-h-screen w-full max-w-md p-5 bg-[#F7F8F9] py-8 pt-9 flex flex-col justify-between">
            <div className='space-y-4'>
                <h2 className="text-[27px] leading-8 text-left font-semibold text-[#1D2226] mb-8">
                    Create your<br />
                    PopX account
                </h2>
                <div className="flex flex-col gap-7">
                    <TextBox
                        label="Full name"
                        placeholder="Enter full name"
                        value={formData.username}
                        onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }}
                        error={false}
                        required
                    />
                    <div>
                        <TextBox
                            label="Phone number"
                            placeholder="Enter phone number"
                            value={formData.phoneNumber}
                            onChange={handlePhoneChange}
                            onBlur={handlePhoneBlur}
                            error={!!phoneError}
                            required
                        />
                        {phoneError && (
                            <p className="text-red-500 text-sm mt-2">Please enter a valid 10-digit phone number.</p>
                        )}
                    </div>
                    <div>
                        <TextBox
                            label="Email address"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleEmailChange}
                            onBlur={handleEmailBlur}
                            error={!!emailError}
                            required
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
                        onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
                        error={false}
                        required
                    />
                    <TextBox
                        label="Company name"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={(e) => { setFormData({ ...formData, companyName: e.target.value }) }}
                        error={false}
                    />
                </div>
                <FormControl component="fieldset" className="w-full">
                    <label className="text-[13px] font-medium text-left">
                        Are you an Agency? *
                    </label>
                    <RadioGroup
                        row
                        aria-label="agency"
                        name="agency"
                        value={agency}
                        onChange={handleAgencyChange}
                        className="flex gap-2"
                    >
                        <FormControlLabel
                            value="yes"
                            checked
                            control={<Radio
                                sx={{
                                    color: '#9ca3af',
                                    margin: '0',
                                    '&.Mui-checked': {
                                        color: '#6C25FF',
                                    },
                                }}
                            />}
                            label={<span className='text-[13px]'>Yes</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={<Radio
                                sx={{
                                    color: '#9ca3af',
                                    margin: '0',
                                    '&.Mui-checked': {
                                        color: '#6C25FF',
                                    },
                                }}
                            />}
                            label={<span className='text-[13px]'>No</span>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <Link to={isFormValid() ? "/account" : "#"}>
                <button
                    className={`bg-[var(--primary-color)] hover:bg-[#6316fd] ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isFormValid()}
                >
                    Create Account
                </button>
            </Link>
        </div>
    );
}

export default SignUp;