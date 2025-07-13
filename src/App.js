
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const abi = [
  "function donate() public payable",
  "function totalFunds() public view returns (uint256)"
];

export default function App() {
  const [contract, setContract] = useState(null);
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("0");

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const con = new ethers.Contract(contractAddress, abi, signer);
        setContract(con);
        const funds = await con.totalFunds();
        setTotal(ethers.formatEther(funds));
      } else alert("Cài MetaMask trước nhé!");
    }
    init();
  }, []);

  async function donate() {
    if (!amount || !contract) return;
    const tx = await contract.donate({ value: ethers.parseEther(amount) });
    await tx.wait();
    alert("Đã donate!");
    const funds = await contract.totalFunds();
    setTotal(ethers.formatEther(funds));
    setAmount("");
  }

  return (
    <div style={ padding: 20 }>
      <h1>Charity DApp</h1>
      <p>Total funds: {total} ETH</p>
      <input
        type="text"
        placeholder="ETH amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={donate}>Donate</button>
    </div>
  );
}
