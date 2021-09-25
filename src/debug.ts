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

    const balance = await mgr.web3.eth.getBalance(`0xecf70cb179444c780bad0be10187ac79d8f445cc`)
    console.log(Web3.utils.fromWei(balance, 'ether') + ' ETH')
  }
}

new App({}).start()
