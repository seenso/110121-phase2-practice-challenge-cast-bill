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
    if(bill.cast === true) {
      return;
    } else {
      setBills(bills.map(b => 
        b.id === bill.id ? {...bill, cast: true} : b
        ));
      }
      console.log('called castBill() on this bill', bill);
  }

  function fireBill(bill) {
    console.log("Fire this bill", bill)
    //remove bill from BillsCast 
    bill.cast = false;

    //remove bill from BillsCollection
    setBills(
      bills.filter(b => {
        b.cast !== false
      })
    )

    console.log("Casted Bills after firing bill", bills.filter(b => b.cast))

  }

  return (
    <div>
      <BillsCast castedBills={bills.filter(b => b.cast)} 
                castBill={castBill} fireBill={fireBill} /> 
      <BillCollection bills={bills} castBill={castBill} fireBill={fireBill}/>
    </div>
  );
}
