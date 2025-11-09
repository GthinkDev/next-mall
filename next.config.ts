import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // 明确指定项目根目录，避免与外部的pnpm-lock.yaml冲突
  turbopack: {
    root: __dirname
  },
  // 添加重定向规则
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
}

export default nextConfig;
