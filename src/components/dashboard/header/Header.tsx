'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-white border-b-4 border-[#991b1b] p-[16px] py-[15px]">
      <Image src="https://i.postimg.cc/0Qj81N9Z/favicon.png" width={200} height={200} className="w-[50px] h-[30px]" alt="logo" />
      <div className="relative">
        <RiLogoutCircleLine className="text-2xl text-black" onClick={toggleNav} />

        {open && (
          <div className="absolute mt-1 z-50 w-[200px] shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px]  font-medium">
              {user.holder.firstName}&nbsp;{user.holder.lastName}
            </p>
            <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#991b1b] border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
