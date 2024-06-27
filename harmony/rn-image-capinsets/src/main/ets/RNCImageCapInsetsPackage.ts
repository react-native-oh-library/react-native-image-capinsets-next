import { RNPackage } from '@rnoh/react-native-openharmony/ts';
import type {
  DescriptorWrapperFactoryByDescriptorTypeCtx,
  DescriptorWrapperFactoryByDescriptorType
} from '@rnoh/react-native-openharmony/ts';
import { RNC } from "@rnoh/react-native-openharmony/generated/ts"

export class RNCImageCapInsetsPackage extends RNPackage {
  createDescriptorWrapperFactoryByDescriptorType(ctx: DescriptorWrapperFactoryByDescriptorTypeCtx): DescriptorWrapperFactoryByDescriptorType {
    return {
      [RNC.RNCImageCapInsets.NAME]: (ctx) => new RNC.RNCImageCapInsets.DescriptorWrapper(ctx.descriptor)
    }
  }
}