# ⚙️ 本地部署

::: warning
这是面对高级用户的文档，如果您是普通用户，请查看“安装”章节和“在线使用”章节

:::

## 🔧 编译环境

- 🟢 nodejs 22 或以上版本
- 💻 Windows10 或以上版本

## 🚀 开始编译

#### 🔄 获取源码

```bash
git clone https://github.com/CynaraGroup/GenishImpact_Picker.git
```

#### 📦 安装依赖

```bash
# 进入目录
cd GenishImpact_Picker/Genshin-Impact-Wish-Simulator

# 安装依赖
npm install
```

#### ▶️ 源码运行

```bash
npm run dev
```

#### 🛠️ 编译可执行文件

```bash
# 进入目录
cd GenishImpact_Picker

# 安装依赖
pip install pyinstaller pyautogui --no-cache-dir
pip install pillow

# 转换图标格式
python -c "from PIL import Image; Image.open('img/logo.png').save('img/logo.ico', format='ICO', sizes=[(256, 256), (128, 128), (64, 64), (48, 48), (32, 32), (16, 16)])"

# 编译
pyinstaller --onefile --windowed --icon=img/logo.ico --name="NamePick" main.py
```

## ⚖️ 许可证

::: info 

本项目基于[genshin-impact](https://github.com/animation-picker/genshin-impact)开发（MIT许可证）。

本项目采用 CC BY-NC-SA 4.0 许可证，不得用于商业用途。

:::