import { RNComponentContext, RNViewBase } from '@rnoh/react-native-openharmony';
// import codegen 生成的内容
import { RNC } from "@rnoh/react-native-openharmony/generated";

export const IMAGE_CAP_INSETS = "RNCImageCapInsets"

@Component
export struct RNCImageCapInsets {
  public static readonly NAME = RNC.RNCImageCapInsets.NAME

  public ctx!: RNComponentContext
  public tag: number = 0
  @State private descriptorWrapper: RNC.RNCImageCapInsets.DescriptorWrapper = {} as RNC.RNCImageCapInsets.DescriptorWrapper
  private eventEmitter: RNC.RNCImageCapInsets.EventEmitter | undefined = undefined
  private cleanUpCallbacks: (() => void)[] = []
  @State src: PixelMap | ResourceStr| DrawableDescriptor = ''
  @State capInsets: EdgeWidths = {}

  aboutToAppear() {
    this.eventEmitter = new RNC.RNCImageCapInsets.EventEmitter(this.ctx.rnInstance, this.tag)
    this.onDescriptorWrapperChange(this.ctx.descriptorRegistry.findDescriptorWrapperByTag<RNC.RNCImageCapInsets.DescriptorWrapper>(this.tag)!)
    this.cleanUpCallbacks.push(this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (_descriptor, newDescriptorWrapper) => {
        this.onDescriptorWrapperChange(newDescriptorWrapper! as RNC.RNCImageCapInsets.DescriptorWrapper)
      }
    ))
  }

  private onDescriptorWrapperChange(descriptorWrapper: RNC.RNCImageCapInsets.DescriptorWrapper) {
    this.descriptorWrapper = descriptorWrapper
    this.src = ('assets/' + this.descriptorWrapper.props.source?.uri?.split('//')[1]) || '' as ResourceStr
    this.capInsets = this.descriptorWrapper.props.capInsets || {}
  }

  aboutToDisappear() {
    this.cleanUpCallbacks.forEach(cb => cb())
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      Image($rawfile(String(this.src)))
        .objectFit(ImageFit.Fill)
        .resizable({
          slice: {
            top: this.capInsets.top,
            bottom: this.capInsets.bottom,
            right: this.capInsets.right,
            left: this.capInsets.left,
          }
        })
    }
  }
}