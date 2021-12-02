import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({ bills, castBill, fireBill }) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bills.map(bill => (
          <BillCard key={bill.id} bill={bill} castBill={castBill} fireBill={fireBill}/>
        ))}
      </div>
    </div>
  );
}
