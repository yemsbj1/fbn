'use client';
import { Account, Transaction } from '@/utils/types';
import React, { useState } from 'react';
import { formatCurrency } from '../formatCurrency';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';

interface TransactionHistoryProps {
  user: Account;
  hideBalance: boolean;
}
const TransactionHistory: React.FC<TransactionHistoryProps> = ({ user, hideBalance }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const transactionsToShow = showMore ? user.transaction_history : user.transaction_history.slice(0, 5);

  const statusColors = {
    Pending: 'text-yellow-600',
    Processing: 'text-blue-600',
    Failed: 'text-red-600',
    Success: 'text-green-600',
    Canceled: 'text-gray-600',
  };

  return (
    <div className="px-[16px]">
      <div className="w-full">
        <div className="text-[14px] w-full font-[500] flex items-center justify-between">
          <span>Recent Transactions</span>
          <Link href="/dashboard/transactions" className="text-[13px] font-[500] text-[#991b1b]">
            See More
          </Link>
        </div>
        <div className="mt-[10px]">
          {transactionsToShow.map((transaction: Transaction) => (
            <div key={transaction.transaction_id} className="flex justify-between py-3">
              <div className="flex gap-2 text-gray-800">
                <button className="border-none flex items-center justify-center outline-none rounded-full w-[35px] h-[35px] bg-[#991b1b]/10">
                  <HiArrowDown className={`${transaction.amount_usd < 0 ? 'rotate-180' : ''}`} />
                </button>
                <div className="flex flex-col gap-1 justify-between">
                  <span className="text-[14px] uppercase font-[600] w-[150px] xxxs:w-[200px] xs:w-[250px] sm:max-w-full">{transaction.description}</span>
                  {/* <span className="text-[14px] font-[600] truncate max-w-[200px] sm:max-w-full overflow-hidden">{transaction.description}</span> */}
                  <span className="text-[10px] font-medium">{transaction.dateTime}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className={`text-[14px] font-[600] ${transaction.amount_usd < 0 ? 'text-red-800' : ''}`}>{hideBalance ? '*****' : `${formatCurrency(transaction.amount_usd)}`}</span>
                <span className={`text-[12px] font-medium ${statusColors[transaction.status as keyof typeof statusColors] ?? 'text-gray-500'}`}>{transaction.status}</span>{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
