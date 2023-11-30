import React, { useState } from 'react';

function TransferForm({ onTransfer }) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();

    onTransfer({ recipient, amount, description });
    setRecipient('');
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleTransfer}>
      <div>
        <label>Recipient (ID or Username):</label>
        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      </div>
      <div>
        <label>Transfer Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Description (Optional):</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Transfer Money</button>
    </form>
  );
}

export default TransferForm;
