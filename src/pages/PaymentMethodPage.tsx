import { useState } from "react";

const PaymentMethodPage = () => {
  const [method, setMethod] = useState('debit');
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [upi, setUpi] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Payment Method</h1>
        <div className="flex justify-center mb-6 gap-4">
          <button
            className={`px-4 py-2 rounded-lg font-semibold border ${method === 'debit' ? 'bg-cvk-purple text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setMethod('debit')}
          >
            Debit Card
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold border ${method === 'upi' ? 'bg-cvk-purple text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setMethod('upi')}
          >
            UPI
          </button>
        </div>
        {method === 'debit' ? (
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Card Number</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="1234 5678 9012 3456"
                value={card.number}
                onChange={e => setCard({ ...card, number: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Cardholder Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Name on card"
                value={card.name}
                onChange={e => setCard({ ...card, name: e.target.value })}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">Expiry</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="MM/YY"
                  value={card.expiry}
                  onChange={e => setCard({ ...card, expiry: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1">CVV</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2"
                  placeholder="CVV"
                  value={card.cvv}
                  onChange={e => setCard({ ...card, cvv: e.target.value })}
                />
              </div>
            </div>
            <button type="button" className="w-full bg-cvk-purple text-white py-3 rounded-lg font-bold mt-4 hover:bg-cvk-darkpurple transition">Pay Now</button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">UPI ID</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="yourname@upi"
                value={upi}
                onChange={e => setUpi(e.target.value)}
              />
            </div>
            <button type="button" className="w-full bg-cvk-purple text-white py-3 rounded-lg font-bold mt-4 hover:bg-cvk-darkpurple transition">Pay Now</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodPage; 