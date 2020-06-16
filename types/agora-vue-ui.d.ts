import Vue from 'vue'

import { AgoraButton } from './button'

export interface InstallationOptions {
  locale: any,
  i18n: any
}

export function install (vue: typeof Vue, options: InstallationOptions): void

export class Button extends AgoraButton {}
