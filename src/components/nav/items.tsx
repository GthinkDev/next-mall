"use client";

import type { FC } from "react";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// 菜单项接口定义
export interface MenuItemProps {
  title: string;
  url: string;
  icon?: any;
  isActive?: boolean;
  level?: number;
  items?: MenuItemProps[];
}

// 自定义 Accordion 组件，用于导航项自动收起
const NavAccordion: FC<{
  children: React.ReactNode;
  isChildActive: boolean;
  className?: string;
}> = ({ children, isChildActive, className }) => {
  const [isOpen, setIsOpen] = useState(isChildActive);
  const pathname = usePathname();

  // 当路径变化时，根据子项是否激活来更新展开状态
  useEffect(() => {
    setIsOpen(isChildActive);
  }, [isChildActive, pathname]);

  return (
    <details
      open={isOpen}
      className={cn("group", className)}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
    >
      {children}
    </details>
  );
};

// 获取菜单项激活状态的类名
const getMenuItemActiveClass = (url: string, pathname: string): string => {
  return pathname === url
    ? "isActiveNavItem pointer-events-none text-current"
    : "";
};

// 递归渲染菜单项的组件
export const MenuItem: FC<MenuItemProps & { level?: number }> = ({
  title,
  url,
  icon,
  isActive,
  level = 1,
  items,
}) => {
  // 确保items存在且是数组
  const childrenItems = Array.isArray(items) ? items : [];
  const hasChildren = childrenItems.length > 0;
  const pathname = usePathname();

  // 检查当前路径是否匹配任何子菜单项
  const isChildActive = childrenItems.some((item) => {
    if (item.url === pathname) return true;
    if (item.items) {
      return item.items.some((subItem) => subItem.url === pathname);
    }
    return false;
  });

  // 根据level渲染不同的菜单项
  if (level === 1) {
    return (
      <li className="flex flex-col gap-2">
        {hasChildren ? (
          <NavAccordion isChildActive={isChildActive} className={cn("")}>
            <summary className={cn("navItemHover  h-9 justify-between flex")}>
              <Link
                href={url}
                className={cn(
                  "flex gap-3 font-bold items-center",
                  getMenuItemActiveClass(url, pathname),
                )}
                onClick={(e) => e.preventDefault()}
              >
                <span className="text-chart-5">{icon}</span>
                <p className="font-bold">{title}</p>
              </Link>
            </summary>
            <ul className="border-l">
              {childrenItems
                .filter(
                  (item) =>
                    item &&
                    item.title !== undefined &&
                    item.title !== null &&
                    item.title !== "",
                )
                .map((subItem, index) => (
                  <MenuItem key={index} {...subItem} level={2} />
                ))}
            </ul>
          </NavAccordion>
        ) : (
          <Link
            href={url}
            className={cn(
              "flex gap-3 font-bold h-9 items-center navItemHover",
              getMenuItemActiveClass(url, pathname),
            )}
          >
            <span className="text-chart-5">{icon}</span>
            <p className="font-bold">{title}</p>
          </Link>
        )}
      </li>
    );
  }

  if (level === 2) {
    return (
      <li className="flex flex-col py-1">
        {hasChildren ? (
          <NavAccordion
            isChildActive={isChildActive}
            className={cn("group gap-1 flex flex-col")}
          >
            <summary
              className={cn(
                "navItemHover h-9 justify-between text-accent-foreground",
              )}
            >
              <div className="flex gap-4 items-center font-bold ">
                <span className="text-foreground">{icon}</span>
                <p className="text-muted-foreground font-bold">{title}</p>
              </div>
            </summary>
            <ul className="border-l">
              {childrenItems
                .filter(
                  (item) =>
                    item &&
                    item.title !== undefined &&
                    item.title !== null &&
                    item.title !== "",
                )
                .map((subItem, index) => (
                  <MenuItem key={index} {...subItem} level={3} />
                ))}
            </ul>
          </NavAccordion>
        ) : (
          <Link
            href={url}
            className={cn(
              "flex gap-4 font-bold h-9 items-center navItemHover",
              getMenuItemActiveClass(url, pathname),
            )}
          >
            {icon}
            {title}
          </Link>
        )}
      </li>
    );
  }

  // level 3 and beyond
  return (
    <li className="flex flex-col py-1">
      <Link
        href={url}
        className={cn(
          "flex gap-4 items-center h-9 navItemHover px-5.5",
          getMenuItemActiveClass(url, pathname),
        )}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
};

// 保留旧组件以保持兼容性
export const LevelOne: FC<MenuItemProps> = (props) => {
  return <MenuItem {...props} level={1} />;
};

export const LevelTwo: FC<MenuItemProps> = (props) => {
  return <MenuItem {...props} level={2} />;
};

export const LevelThree: FC<MenuItemProps> = (props) => {
  return <MenuItem {...props} level={3} />;
};
