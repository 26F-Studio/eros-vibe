import type { BleDevice } from '@mnlphlp/plugin-blec'
import { startScan } from '@mnlphlp/plugin-blec'

declare global {
  interface Window {
    isTauri?: boolean | undefined
  }
}

export class BluetoothHelper {
  async scan(filterServices: string[]): Promise<void> {
    if (window.isTauri) {
      try {
        const devices = (
          await new Promise<BleDevice[]>((resolve, reject) => {
            startScan((devices) => resolve(devices), 5000).catch((e) => reject(<Error>e))
          })
        ).filter((device) => filterServices.every((service) => device.services.includes(service)))
        console.log(devices)
      } catch (e) {
        console.error(e)
      }
    } else {
      await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      })
    }
  }
}
