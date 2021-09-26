import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { Web3Manager } from '.'
import Web3 from 'web3'

type TAppSettings = {}

class App {
  static version = 1
  static env = process.env
  static rootPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')

  constructor(s: TAppSettings) {
    dotenv.config({ path: path.join(App.rootPath, `.env`) })
  }

  async start() {
    const mgr = new Web3Manager({
      provider: App.env.WEB3_PROVIDER!
    })
    const web3 = mgr.web3
    const balance = await web3.eth.getBalance(App.env.ETH_ADDRESS!)
    console.log(Web3.utils.fromWei(balance, 'ether') + ' ETH')

    const account = web3.eth.accounts.create()
    console.log(account)
    console.log(web3.eth.accounts.privateKeyToAccount(account.privateKey))
    console.log(web3.eth.getAccounts())
  }
}

new App({}).start()
