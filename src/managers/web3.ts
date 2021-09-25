import Web3 from 'web3'

type TWeb3Settings = {
  provider: string
}

class Web3Manager {
  public web3: Web3
  protected settings: TWeb3Settings

  constructor(s: TWeb3Settings) {
    this.settings = { ...s }
    this.web3 = new Web3(s.provider)
  }
}

export { Web3Manager }
