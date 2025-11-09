"use client";

import type { FC } from "react";
import React, { memo, useMemo } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import { ModeToggle } from "@/components/ModeToggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

// 递归函数，用于查找路径对应的标题
const findTitleByUrl = (
  items: any[],
  url: string,
  path: string[] = [],
): string[] | null => {
  for (const item of items) {
    // 检查当前项的URL是否匹配
    if (item.url === url) {
      return [...path, item.title];
    }

    // 如果有子项，递归查找
    if (item.items) {
      const result = findTitleByUrl(item.items, url, [...path, item.title]);
      if (result) return result;
    }
  }
  return null;
};

// 将路径转换为面包屑
const generateBreadcrumbs = (pathname: string) => {
  // 首先从siteConfig中查找匹配的路径
  const navMall = siteConfig.navMall;
  const navMerchants = siteConfig.navMerchants;
  
  // 先在navMall中查找
  let breadcrumbPath = findTitleByUrl(navMall, pathname);
  
  // 如果在navMall中没找到，再在navMerchants中查找
  if (!breadcrumbPath) {
    breadcrumbPath = findTitleByUrl(navMerchants, pathname);
  }
  
  // 如果找到了路径，直接返回
  if (breadcrumbPath) {
    return breadcrumbPath;
  }

  // 如果没有找到，解析路径
  const paths = pathname.split("/").filter(Boolean);

  // 如果路径为空，返回首页
  if (paths.length === 0) {
    return ["首页"];
  }

  // 否则，构建面包屑路径
  breadcrumbPath = ["首页"];

  // 添加每个路径段
  for (let i = 0; i < paths.length; i++) {
    const segment = paths[i];
    // 尝试从navMall和navMerchants中查找对应的标题
    let found = false;

    // 先在navMall中查找
    for (const item of navMall) {
      if (item.items) {
        const result = findTitleByUrl(
          item.items,
          "/" + paths.slice(0, i + 1).join("/"),
        );
        if (result && result.length > 0) {
          breadcrumbPath.push(result[result.length - 1]);
          found = true;
          break;
        }
      }
    }
    
    // 如果在navMall中没找到，再在navMerchants中查找
    if (!found) {
      for (const item of navMerchants) {
        if (item.items) {
          const result = findTitleByUrl(
            item.items,
            "/" + paths.slice(0, i + 1).join("/"),
          );
          if (result && result.length > 0) {
            breadcrumbPath.push(result[result.length - 1]);
            found = true;
            break;
          }
        }
      }
    }

    // 如果没找到，使用路径段本身
    if (!found) {
      breadcrumbPath.push(
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      );
    }
  }

  return breadcrumbPath;
};

const Header: FC = () => {
  const pathname = usePathname();

  // 使用useMemo缓存面包屑路径
  const breadcrumbs = useMemo(() => generateBreadcrumbs(pathname), [pathname]);

  return (
    <header className="flex  h-14 rounded-xl bg-card pr-3 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {index === 0 ? (
                      <span>{item}</span>
                    ) : isLast ? (
                      <BreadcrumbPage>{item}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbPage className="text-muted-foreground">
                        {item}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ModeToggle />
    </header>
  );
};

export default memo(Header);
