This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 项目说明

这是一个基于Next.js的陶瓷设计应用，支持使用Coze工作流生成AI图像。

## 环境配置

1. 创建 `.env.local` 文件，添加以下配置：

```
# Coze API 配置
COZE_CLIENT_ID_JWT=your_client_id_here
COZE_PRIVATE_KEY_JWT="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----"
COZE_PUBLIC_KEY_ID_JWT=your_public_key_id_here
COZE_API_BASE_JWT=https://api.coze.cn
COZE_WORKFLOW_ID_JWT=your_workflow_id_here
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Coze工作流集成

本项目使用Coze工作流API生成图像，需要在Coze平台创建一个工作流，并配置相应的API密钥。

1. 在Coze平台创建工作流
2. 获取JWT认证所需的Client ID和密钥
3. 在工作流中配置输入参数名为"input"，输出格式应包含"output"字段，值为生成的图片URL

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- Coze API

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
