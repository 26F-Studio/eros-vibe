import { startScan, stopScan } from '@mnlphlp/plugin-blec'

declare global {
  interface Window {
    isTauri?: boolean | undefined
  }
}

export class BluetoothHelper {
  async scan(filterServices: string[]): Promise<void> {
    if (window.isTauri) {
      await startScan((devices) => {
        const filtered = devices.filter((device) =>
          filterServices.every((service) => device.services.includes(service)),
        )
        console.log(filtered)
        if (filtered.length) {
          stopScan().catch((e) => console.warn(e))
        }
      }, 5000)
    } else {
      await navigator.bluetooth.requestDevice({
        filters: [
          {
            services: filterServices,
          },
        ],
        optionalServices: filterServices,
      })
    }
  }
}
