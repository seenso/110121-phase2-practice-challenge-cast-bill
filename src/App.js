import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const api_url = "http://localhost:8002/bills";

export default function App() {
  const [bills, setBills] = useState([]);

  //start here with your code for step one
  useEffect(() => {
    fetch(api_url)
    .then(r => r.json())
    .then(data => setBills(data));
  }, []);

  function castBill(bill) {
    setBills(bills.map(b => b.id === bill.id ? {...b, cast: true} : b ));
  }

  function fireBill(bill) {
    setBills(bills.map(b => b.id === bill.id ? {...b, cast: false} : b ));
  }

  return (
    <div>
      <BillsCast castedBills={bills.filter(b => b.cast)} fireBill={fireBill} /> 
      <BillCollection bills={bills} castBill={castBill}/>
    </div>
  );
}
