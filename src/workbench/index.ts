/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration, Palette } from "../interface";
import { getPalette } from "../palette";
import { flatWorkbench } from "./flat";

export function getWorkbench(configuration: Configuration, variant: string) {
  const palette: Palette = getPalette(configuration, variant);
  return flatWorkbench(palette, configuration, variant);
}

// vim: fdm=marker fmr={{{,}}}:
