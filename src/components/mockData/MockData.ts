import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Andrew',
      lastName: 'McNulty',
      phoneNumber: '+1-224-463-7589',
      nickName: 'jford',
      gender: 'Male',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      balance_usd: 1260480.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '24178',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    createdAt: '1/15/2026', // m/d/y
    holder: {
      firstName: 'Whaley Marie E.',
      email: 'whal**03@gmail.com ',
      username: 'whaleymarie20',
      password: 'mwhaley333'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      balance_usd: 11350000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2417',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 13, 2025',
        description: 'Transfer from Michael Sara - XXXXXX7598',
        status: 'Success',
        amount_usd: 1250
      },
      {
        dateTime: 'January 5, 2025',
        description: 'CMS - XXXXXX3904',
        status: 'Success',
        amount_usd: -1000
      },
      {
        dateTime: 'January 1, 2025',
        description: 'Wire Transfer - XXXXXX7103',
        status: 'Success',
        amount_usd: -2550
      },
      {
        dateTime: 'November 20, 2024',
        description: 'Transfer to Belcorhe corp. - XXXXXX5429',
        status: 'Success',
        amount_usd: -15000
      },
      {
        dateTime: 'November 10, 2024',
        description: 'Transfer to Lanchester Group - XXXXXX76481',
        status: 'Success',
        amount_usd: -10000
      },
      {
        dateTime: 'November 9, 2024',
        description: 'Transfer to Alderstone Corp. - XXXXXX3355',
        status: 'Success',
        amount_usd: -15000
      },
      {
        dateTime: 'November 1, 2024',
        description: 'Transfer from Beacon & Rowe Ltd. - XXXXXX6235',
        status: 'Success',
        amount_usd: 234530
      },
      {
        dateTime: 'October 30, 2024',
        description: 'Transfer fee - XXXXXX2063',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'October 30, 2024',
        description: 'Transfer to Henry Clark - XXXXXX7228',
        status: 'Success',
        amount_usd: -53000
      },
      {
        dateTime: 'October 17, 2024',
        description: 'Transfer fee - XXXXXX6544',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'October 17, 2024',
        description: 'Transfer to Lily Turner - XXXXXX2796',
        status: 'Success',
        amount_usd: -47000
      },
      {
        dateTime: 'September 20, 2024',
        description: 'Transfer fee - XXXXXX3553',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'September 20, 2024',
        description: "Transfer to Michael O'Connor - XXXXXX8942",
        status: 'Success',
        amount_usd: -34000
      },
      {
        dateTime: 'September 1, 2024',
        description: 'Transfer from Chloe Baker - XXXXXX8741',
        status: 'Success',
        amount_usd: 349940
      },
      {
        dateTime: 'August 8, 2024',
        description: 'Transfer from Alderstone Corp. - XXXXXX8259',
        status: 'Success',
        amount_usd: 182110
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Transfer from Owen Miller - XXXXXX4783',
        status: 'Success',
        amount_usd: 524740
      },
      {
        dateTime: 'July 20, 2024',
        description: 'Transfer from Halford Utilities - XXXXXX3156',
        status: 'Success',
        amount_usd: 265910
      },
      {
        dateTime: 'June 23, 2024',
        description: 'Transfer fee - XXXXXX1533',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'June 23, 2024',
        description: 'Transfer to Sophie Davies - XXXXXX7265',
        status: 'Success',
        amount_usd: -69000
      },
      {
        dateTime: 'June 15, 2024',
        description: 'Transfer from Daniel Walker - XXXXXX0621',
        status: 'Success',
        amount_usd: 308090
      },
      {
        dateTime: 'May 12, 2024',
        description: 'Transfer fee - XXXXXX8653',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'May 12, 2024',
        description: 'Transfer to Lewis Wood - XXXXXX1863',
        status: 'Success',
        amount_usd: -65000
      },
      {
        dateTime: 'May 1, 2024',
        description: 'Transfer from Capshore Solutions - XXXXXX1570',
        status: 'Success',
        amount_usd: 206570
      },
      {
        dateTime: 'April 4, 2024',
        description: 'Transfer fee - XXXXXX7264',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'April 4, 2024',
        description: 'Transfer to Charlotte Morgan - XXXXXX5093',
        status: 'Success',
        amount_usd: -76000
      },
      {
        dateTime: 'February 25, 2024',
        description: 'VAT Fee - XXXXXX6407',
        status: 'Success',
        amount_usd: -55
      },
      {
        dateTime: 'February 18, 2024',
        description: 'Transfer from Ava Foster - XXXXXX9478',
        status: 'Success',
        amount_usd: 220410
      },
      {
        dateTime: 'January 13, 2024',
        description: 'Transfer from Norwick Systems - XXXXXX0537',
        status: 'Success',
        amount_usd: 203050
      },
      {
        dateTime: 'January 11, 2024',
        description: 'Transfer from Lanchester Group - XXXXXX1940',
        status: 'Success',
        amount_usd: 223930
      },
      {
        dateTime: 'January 10, 2024',
        description: 'Transfer from Albion Freight Ltd. - XXXXXX9912',
        status: 'Success',
        amount_usd: 34940
      },
      {
        dateTime: 'January 6, 2024',
        description: 'Transfer to Harry James - XXXXXX8640',
        status: 'Success',
        amount_usd: -75000
      },
      {
        dateTime: 'January 4, 2024',
        description: 'Transfer from Marcus Bennett - XXXXXX6014',
        status: 'Success',
        amount_usd: 203050
      }
    ]
  }
];
