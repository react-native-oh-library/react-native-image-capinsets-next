### This fork has some new features:
- Increased support for React Native v0.59.10 and v0.60+;
- Increased support for loading local images;
- Add Manual Link guide (recommended);
- Hide warning that was happening on RN v0.60.

Fork from: https://github.com/summer88123/react-native-image-capinsets

# react-native-image-capinsets-next

[![NPM version](https://badge.fury.io/js/react-native-image-capinsets-next.svg)](http://badge.fury.io/js/react-native-image-capinsets-next)
[![Build Status](https://travis-ci.org/mayconmesquita/react-native-image-capinsets-next.svg?branch=master)](https://travis-ci.org/mayconmesquita/react-native-image-capinsets-next)

Adds support for a similar functionality as `<Image capInsets={...} />` to android.

Behind the scenes it will generate a `NinePatchDrawable` and set as background for the android `ImageView`

[![NPM](https://nodei.co/npm/react-native-image-capinsets-next.png?downloads=true)](https://nodei.co/npm/iconerator-next/)

## Installation

> `npm i --save react-native-image-capinsets-next`


## Auto Link `(not recommended - RN v0.59 and lower)` [Android only]
> `react-native link react-native-image-capinsets-next`

## Manual link `(recommended - RN v0.59, v0.60 and above)` [Android only]

Ensure your build files match the following requirements:
1. Define the `react-native-image-capinsets-next` project in `android/settings.gradle`:

```groovy
...
include ':react-native-image-capinsets-next'
project(':react-native-image-capinsets-next').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-image-capinsets/android')
```

2. Add the `react-native-image-capinsets-next` as an dependency of your app in `android/app/build.gradle`:

```groovy
...
dependencies {
  ...
  implementation project(':react-native-image-capinsets-next')
}
```

3. (RN v0.59 and lower) Add `import dk.madslee.imageCapInsets.RCTImageCapInsetPackage;` and `new RCTImageCapInsetPackage(),` in your `MainApplication.java` :

```java
import dk.madslee.imageCapInsets.RCTImageCapInsetPackage;
...
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RCTImageCapInsetPackage()
        );
    }
```

4. (RN v0.60 and above) Add `import dk.madslee.imageCapInsets.RCTImageCapInsetPackage;` and `packages.add(new RCTImageCapInsetPackage());` in your `MainApplication.java` :

```java
import dk.madslee.imageCapInsets.RCTImageCapInsetPackage;
...
  @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
      
      packages.add(new RCTImageCapInsetPackage());
      return packages;
  }
```

That's it, you made it! :+1:

## Tips
1. Please use a local image. Remote files usually don't works.
2. For saving a remote file, before load as local, you can use https://github.com/joltup/rn-fetch-blob. Open an issue here if you need an example.

## Examples

```javascript
import ImageCapInset from 'react-native-image-capinsets-next';

<ImageCapInset
  source={require('./bubble.png')}
  capInsets={{ top: 8, right: 8, bottom: 8, left: 8 }}
/>
```
