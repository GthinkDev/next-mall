import type { FC } from "react";
import { memo } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MenuItem } from "./items";

const Dashboard: FC = () => {
  // 获取当前路径
  const currentPath = usePathname();
  // 获取Dashboard配置
  const dashboardConfig = siteConfig.Dashboard;

  // 检查配置是否存在
  if (!dashboardConfig) {
    return null;
  }

  return (
    <div className="menu w-full gap-1">
      <ul className="flex flex-col gap-2">
        <MenuItem
          title={dashboardConfig.title}
          url={dashboardConfig.url}
          icon={dashboardConfig.icon}
          isActive={currentPath === dashboardConfig.url}
        />
      </ul>
    </div>
  );
};

export default memo(Dashboard);
