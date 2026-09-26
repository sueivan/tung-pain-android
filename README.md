# 董氏奇穴治痛方

本仓库包含两个客户端：

- `app/`：完全离线的安卓应用。30项文字和原图均打包在 APK 内，首次打开不需要输入网址，也不依赖 ChatGPT、GitHub 或其他外部网站。
- `miniprogram/`：微信小程序原生版本，可直接导入微信开发者工具预览；正式发布前须填写实际 AppID，并根据审核要求补充主体与服务类目资料。

## 下载安卓 APK

打开仓库顶部的 **Actions**，进入最新一次 `Build Android APK`，在页面底部下载 `董氏奇穴治痛方-Android`。

## 安卓本地构建

需要 JDK 17、Android SDK 35 与 Gradle 8.10.2：

```bash
gradle assembleDebug
```

生成位置：`app/build/outputs/apk/debug/app-debug.apk`。

## 医疗声明

本应用所载穴位定位、针法与处方仅供中医药学习及专业人员参考，不构成任何诊疗建议。针刺属医疗行为，须在具备资质的执业医师指导下进行。
