'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { mockAccounts } from '../mockData/MockData';
import { CgLock, CgUser } from 'react-icons/cg';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="">
      <div className="h-screen bg-white">
        <div className="px-6 pt-12">
          <div className="flex items-center justify-center mb-2">
            <Image src="https://i.postimg.cc/NFzzWgd1/desktop-logo-2x.png" width={632} height={62} className="w-[302px] h-[35px]" alt="logo" />
          </div>
          <div className="mt-24">
            {error && <p className="text-[20px] my-4 text-center mx-auto max-w-[200px] rounded-md min-h-[50px] flex items-center justify-center bg-[#2d1a47] text-white">{error}</p>}
          </div>

          <div className="login-box mx-auto rounded-xl p-4 py-7">
            <p className="text-white text-2xl mb-7 font-semibold">Login</p>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="flex relative flex-col gap-3">
                  <label htmlFor="Username" className="text-[#5c5c5c] hidden text-[16px]">
                    Username
                  </label>
                  <CgUser className="text-2xl text-[#5c5c5c] absolute top-5 left-2" />
                  <input
                    type="text"
                    value={username}
                    placeholder="User ID"
                    className="p-4 pl-10 rounded-md text-[#5c5c5c] placeholder:text-[#5c5c5c] bg-white pb-5 border border-gray-300 outline-none"
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex relative flex-col gap-3">
                  <label htmlFor="password" className="text-[#5c5c5c] hidden text-[16px]">
                    Password
                  </label>
                  <CgLock className="text-2xl text-[#5c5c5c] absolute top-5 left-2" />
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    className="p-4 pl-10 rounded-md text-[#5c5c5c] placeholder:text-[#5c5c5c] bg-white pb-5 border border-gray-300 outline-none"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <button type="submit" className="p-4 bg-transparent text-white border border-white font-semibold max-w-max rounded-[10px]">
                  Log In
                </button>
              </div>
            </form>
          </div>
          <p className="text-xs text-[#5c5c5c] py-4 text-center">To help keep your account secure, save your username only on devices that aren't used by other people.</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-[#5c5c5c]">🔒 Your connection is secure and encrypted</p>
        </div>

        <div className="mt-6">
          <h3 className="text-sm text-center text-[#5c5c5c]">All users of our online services are subject to our Privacy Statement and agree to be bound by the Terms of Service.</h3>
        </div>
      </div>
      <footer className="p-6 text-center">
        <p className="text-xs text-[#5c5c5c]">© Copyright 2026 F.N.B. Corporation. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
