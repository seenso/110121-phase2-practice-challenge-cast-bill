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
    console.log('called castBill() on this bill', bill);
  }

  return (
    <div>
      <BillsCast />
      <BillCollection bills={bills} castBill={castBill}/>
    </div>
  );
}
