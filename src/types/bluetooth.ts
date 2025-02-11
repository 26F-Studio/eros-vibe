import type { BleDevice } from '@mnlphlp/plugin-blec'

export class RustAdapter {
  private _device: BleDevice

  constructor(device: BleDevice) {
    this._device = device
  }
}

export class WebAdapter {
  private _device: BluetoothDevice

  constructor(device: BluetoothDevice) {
    this._device = device
  }
}
