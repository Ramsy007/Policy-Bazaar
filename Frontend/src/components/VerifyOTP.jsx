import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  useEffect(() => {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeyDown);
      input.addEventListener('focus', handleFocus);
      input.addEventListener('paste', handlePaste);
    });
  }, []);

  const handleInput = (e) => {
    const index = e.target.dataset.index;
    const value = e.target.value;

    setOtp(prevOtp => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value && index < 5) {
      document.querySelector(`input[data-index="${parseInt(index) + 1}"]`).focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const index = e.target.dataset.index;
      if (index > 0) {
        setOtp(prevOtp => {
          const newOtp = [...prevOtp];
          newOtp[index] = '';
          return newOtp;
        });
        document.querySelector(`input[data-index="${parseInt(index) - 1}"]`).focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    if (/^\d{6}$/.test(text)) {
      setOtp(text.split(''));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('OTP Verified Successfully!');
    navigate('/home'); 
  };

  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 6-digit verification code that was sent to your email.
        </p>
      </header>
      <form id="otp-form" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              maxLength="1"
              data-index={index}
              value={digit}
              onInput={handleInput}
            />
          ))}
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{' '}
        <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
          Resend
        </a>
      </div>
    </div>
  );
};

export default VerifyOtp;
