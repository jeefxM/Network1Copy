import React from 'react'

function MetamaskSign() {
    const metamaskLogin = () => {
        const activeAccount = document.getElementById("currentAccount");
        const activeChainId = document.getElementById("currentChainId");
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            activeAccount.innerHTML = accounts;
            activeChainId.innerHTML = window.ethereum.networkVersion;
          });
      };
  return (
    <div>{metamaskLogin}</div>
  )
}

export default MetamaskSign