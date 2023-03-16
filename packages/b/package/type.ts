import { ExtractPropTypes } from 'vue-demi'

export const iconProps = {
  primary:{
    type: String
  }
}
export type IconProps = ExtractPropTypes<typeof iconProps>