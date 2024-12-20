/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { HostComponent, ViewProps } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";
import {Double, WithDefault} from 'react-native/Libraries/Types/CodegenTypes';

export interface ImageURISource {
  uri?: string | undefined;
  bundle?: string | undefined;
  method?: string | undefined;
  headers?: ReadonlyArray<Readonly<{name: string, value: string}>>;
  cache?: WithDefault<'default' | 'reload' | 'force-cache' | 'only-if-cached', 'default'>;
  body?: string | undefined;
  width?: Double | undefined;
  height?: Double | undefined;
  scale?: Double | undefined;
}

export interface NativeProps extends ViewProps {
  source: ImageURISource;
  capInsets: {
    top?: Double | null;
    left?: Double | null;
    right?: Double | null;
    bottom?: Double | null;
  };
}

export default codegenNativeComponent<NativeProps>(
  "RNCImageCapInsets"
) as HostComponent<NativeProps>;
