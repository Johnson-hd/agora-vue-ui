import { AgoraVueUIComponent, AgoraVueUIComponentSize } from './component'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export declare class AgoraButton extends AgoraVueUIComponent {
  size: AgoraVueUIComponentSize
  type: ButtonType
  disabled: boolean
}
