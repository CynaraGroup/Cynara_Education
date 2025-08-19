# ⚙️ 编译

::: warning
这是面对高级用户的文档，如果您是普通用户，请查看“安装”章节
:::

## 🔧 编译环境

- 🐍 Python 3.8 或以上版本
- 💻 Windows10 或以上版本

## 🚀 开始编译

#### 🔄 获取源码

```shell [git]
git clone https://github.com/CynaraGroup/Shutdown_Prompt.git
```

#### 📦 安装依赖

```shell [pip]

# 进入目录
cd Shutdown_Prompt

# 安装依赖
pip install pyqt5 pywin32 pyinstaller Pillow
```

#### ▶️ 源码运行

```shell [python]

python main_v2.py
```

#### 🛠️ 编译

```shell [pyinstaller]

pyinstaller -F -w -i assist/img/logo.ico --add-data "assist/font/dingtalk.ttf;." --add-data "assist/font/zhengqingke.ttf;." main_v2.py
```

## ⚖️ 许可证

::: info

本项目基于 LGPL-3.0 协议开源，您可以在遵守协议的前提下自由使用、修改和分发本项目的代码。

本项目版权归属 Cynara Group 所有，保留权利。

:::