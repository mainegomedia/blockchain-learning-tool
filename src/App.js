import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Button from './Components/button';
import Navigation from './Components/nav';
import Store from './Components/Store';
import { useState, useEffect } from 'react'
import TableArea from './Components/TableArea';
import CoinGeckoApi from './Components/coinMarketCapApiTest';
import Footer from './Components/footer';

function App() {


  //changes the desciptions on the right side of the screen
  const [description, setDescription] = useState("Click the buttons to see how the blockchain functions. It's actually fairly simple.")

  function registerNodeDescription(){
      setDescription
      ("A node is basically any computer system on the blockchain used to mine bitcoin. See the highlighted node created.")
  }
  function miningDescription(){
      setDescription("Mining is the process by which cryptocurrency is created, maintained and secured. See the new block mined.")
  }
  function createTransactionDescription(){
      setDescription("Transactions are any changes made to the blockchain ledger. See the transaction has been added to the block.")
  }
//changes the descriptions on the left side of the screen
  const [ blockchain, changeBlockchain] = useState
        ("");

  function addNode(){
      changeBlockchain
    (<p>
      <mark>
      "chain": [ <br></br>
      
      "index": 1, <br></br>
      "timestamp": 1642612796198, <br></br>
      "transactions": [], <br></br>
      "nonce": 100, <br></br>
      "hash": "0", <br></br>
      "previousBlockHash": "0" <br></br>
      
      ], [ <br></br>
      "pendingTransactions": [], <br></br>
      "currentNodeUrl": "http://localhost:3001", <br></br>
      "networkNodes": <br></br>
      "http://localhost:3002" <br></br>
      ] [ <br></br>
        </mark>
    </p>) 
  }

  function addTransaction(){
    changeBlockchain
    (<p>
        
        "chain": [ <br></br>
        
        "index": 1, <br></br>
        "timestamp": 1642648119487, <br></br>
        "transactions": [], <br></br>
        "nonce": 100,  <br></br>
        "hash": "0",  <br></br>
        "previousBlockHash": "0"  <br></br>
        
        ], [ <br></br>
        <mark>"pendingTransactions": <br></br>
        
        "amount": 895, <br></br>
        "sender": "EIOJADSKFJAKDFSJI3O4E", <br></br>
        "recipient": "IEUWROIEGJDNFADSFNJDSFH4759" <br></br>
        , [ <br></br>
        
        "amount": 1417, [ <br></br>
        "sender": "OWERIJDFI47595495484", <br></br>
        "recipient": "JWIOUEFJ375984984359" <br></br>
        
        ],</mark>
        
        [ <br></br>
        "currentNodeUrl": "http://localhost:3001", <br></br>
        "networkNodes": [] <br></br>
        

    </p>)
  }

  function addMinedBlock(){
    changeBlockchain
    (<p>
        
        "chain": [ <br></br>
        
        "index": 1, <br></br>
        "timestamp": 1642648119487, <br></br>
        "transactions": [], <br></br>
        "nonce": 100, <br></br>
        "hash": "0", <br></br>
        "previousBlockHash": "0" <br></br>
          [ <br></br>
        <mark>
        "index": 2, <br></br>
        "timestamp": 1642649299308, <br></br>
        "transactions": <br></br>
        
        "amount": 895, <br></br>
        "sender": "EIOJADSKFJAKDFSJI3O4E", <br></br>
        "recipient": "IEUWROIEGJDNFADSFNJDSFH4759" <br></br>
        
        
        "amount": 1417, <br></br>
        "sender": "OWERIJDFI47595495484", <br></br>
        "recipient": "JWIOUEFJ375984984359" <br></br>
        
        ], [ <br></br>
        "nonce": 76839, <br></br>
        "hash": "00002bb5cb1a458856f26f9053d97bae947176ca11a771086bde062c658470f5", <br></br>
        "previousBlockHash": "0" <br></br>
          [ <br></br>
        
        "index": 3, <br></br>
        "timestamp": 1642649305119, <br></br>
        "transactions": <br></br>
        
        "amount": 12.5, <br></br>
        "sender": "00", <br></br>
        "recipient": "4408e4f0799e11ecba13c7699c4ece0d", <br></br>
        "transactionId": "03467f1079a111ecba13c7699c4ece0d" <br></br>
        
        ], [ <br></br>
        "nonce": 119281, <br></br>
        "hash": "00000d41b66d1027591da0851e401cda081bb79fd840b146e9b40bb630ebd0d8", <br></br>
        "previousBlockHash": "00002bb5cb1a458856f26f9053d97bae947176ca11a771086bde062c658470f5" <br></br>
        
        ], [ <br></br>
        "pendingTransactions": <br></br>
        
        "amount": 12.5, <br></br>
        "sender": "00", <br></br>
        "recipient": "4408e4f0799e11ecba13c7699c4ece0d", <br></br>
        "transactionId": "06bae55079a111ecba13c7699c4ece0d" <br></br>
        </mark>
        ], [ <br></br>
        "currentNodeUrl": "http://localhost:3001", <br></br>
        "networkNodes": [] <br></br>
        

    </p>)
}


  return (
    <div className="App">
      {/* Header */}
      <Navigation />
      {/* <img src="./blockchain-nodes.png" alt="" /> */}
      {/* Container */}
            <div class="container px-4">
              <div class="row gx-5">
                <div class="col">
                  <div class="p-3 border bg-light"> <strong>YOUR COOL BLOCKCHAIN HERE</strong>
                    <p> { blockchain } </p>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border bg-light"><strong>BLOCKCHAIN FUNCTIONS</strong>
                  <div class="container overflow-hidden">
                      <div class="row gx-5">
                        <div class="col">
                        <div class="p-3 border bg-light">

                        {/* Buttons */}
                        <div class="d-grid gap-2">
                          {/* <Button text = 'Register Node'/>
                          <Button text = 'Mine Block' />
                          <Button text = 'Create Transaction' /> */}
                          <button class="btn btn-primary" type="button" onClick = { () => {registerNodeDescription(); addNode(); }} > Register Node </button>
                          <button class="btn btn-primary" type="button" onClick = { () => {createTransactionDescription(); addTransaction() }}> Create Transaction </button>
                          <button class="btn btn-primary" type="button" onClick = { () => {miningDescription(); addMinedBlock() }}> Mine Block </button>

                        </div>
                        
                        </div>
                        </div>
                        <div class="col">
                        <div class="p-3 border bg-light"> { description } </div>
                        </div>
                      </div>
                    </div>
                  </div>
                        <Store>
                          <TableArea />
                        </Store>
                      <CoinGeckoApi />
                </div>
              </div>
            </div>
            <Footer />
    </div>
  );
}

export default App;
