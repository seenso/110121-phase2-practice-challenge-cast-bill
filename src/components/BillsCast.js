import React from 'react';
import BillCard from './BillCard';

export default function BillsCast({ castedBills, castBill, fireBill }) {
  // Your code here
  // console.log("Casted Bills from Bills Cast", castedBills)

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {/*...and here..*/}
        {castedBills.map(b => (
          <BillCard key={b.id} bill={b} castBill={castBill} fireBill={fireBill} />
        ))}
        </div>
      </div>
    </div>
  );
}

