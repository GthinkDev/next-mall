import {
  BadgeJapaneseYen,
  BrickWallShield,
  CalendarArrowUp,
  CalendarCog,
  ChartPie,
  Cog,
  Forklift,
  Handshake,
  ListOrdered,
  Logs,
  MonitorCog,
  Puzzle,
  Rows3,
  Settings,
  SquareChartGantt,
  SquareDashedTopSolid,
  Store,
  Sunset,
  TableProperties,
  UserCog,
} from "lucide-react";

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  Dashboard: {
    title: "首页",
    url: "/home",
    icon: <ChartPie size={18} />,
  },
  navMall: [
    {
      title: "商城管理",
      url: "#",
      icon: <Store size={18} />,
      items: [
        {
          title: "商品列表",
          icon: <TableProperties size={18} />,
          items: [
            {
              title: "全部商品",
              url: "/mall/all",
            },
          ],
        },
        {
          title: "商品设置",
          icon: <CalendarCog size={18} />,
          items: [
            {
              title: "商品分类",
              url: "/mall/mall-settings/category",
            },
            {
              title: "分类层级",
              url: "/mall/mall-settings/category-levels",
            },
            {
              title: "商品分组",
              url: "/mall/mall-settings/category-groups",
            },
            {
              title: "标签管理",
              url: "/mall/mall-settings/category-tags",
            },
            {
              title: "批量设置",
              url: "/mall/mall-settings/category-bulk",
            },
          ],
        },
        {
          title: "商城设置",
          icon: <MonitorCog size={18} />,
          items: [
            {
              title: "分享设置",
              url: "/mall/mall-settings/share-settings",
            },
            {
              title: "公告管理",
              url: "/mall/mall-settings/announcement",
            },
            {
              title: "交易设置",
              url: "/mall/mall-settings/pay-settings",
            },
          ],
        },
      ],
    },
    {
      title: "商城订单",
      url: "#",
      icon: <SquareChartGantt size={18} />,
      items: [
        {
          title: "订单管理",
          icon: <Rows3 size={18} />,
          items: [
            {
              title: "全部订单",
              url: "/mall/mall-orders/orders-all",
            },
            {
              title: "待发货",
              url: "/mall/mall-orders/orders-pending",
            },
            {
              title: "待付款",
              url: "/mall/mall-orders/orders-paid",
            },
            {
              title: "待收货",
              url: "/mall/mall-orders/orders-received",
            },
            {
              title: "已完成",
              url: "/mall/mall-orders/orders-completed",
            },
            {
              title: "已关闭",
              url: "/mall/mall-orders/orders-closed",
            },
          ],
        },
        {
          title: "订单处理",
          icon: <ListOrdered size={18} />,
          items: [
            {
              title: "维权订单",
              url: "/mall/orders-processing/orders-protection",
            },
            {
              title: "评价管理",
              url: "/mall/orders-processing/orders-comment",
            },
            {
              title: "订单导出",
              url: "/mall/orders-processing/orders-export",
            },
          ],
        },
      ],
    },
    {
      title: "物流管理",
      url: "#",
      icon: <Forklift size={18} />,
      items: [
        {
          title: "默认设置",
          url: "/mall/logistics/settings-default",
          icon: <Settings size={18} />,
        },
        {
          title: "物流设置",
          url: "/mall/logistics/logistics-settings",
          icon: <Cog size={18} />,
        },
      ],
    },
  ],
  navMerchants: [
    {
      title: "商户管理",
      url: "#",
      icon: <Handshake size={18} />,
      items: [
        {
          title: "商户及认证",
          icon: <BrickWallShield size={18} />,
          items: [
            {
              title: "商户列表",
              url: "/merchants/merchants-certification/merchants-lists",
            },
            {
              title: "未认证",
              url: "/merchants/merchants-certification/merchants-unverified",
            },
            {
              title: "意向入驻",
              url: "/merchants/merchants-certification/merchants-in",
            },
            {
              title: "商户分组",
              url: "/merchants/merchants-certification/merchants-groups",
            },
            {
              title: "回收站",
              url: "/merchants/merchants-certification/merchants-recycling",
            },
          ],
        },
        {
          title: "入驻管理",
          icon: <Sunset size={18} />,
          items: [
            {
              title: "入驻设置",
              url: "/merchants/set-up/set-up-settings",
            },
            {
              title: "认证设置",
              url: "/merchants/set-up/set-up-certification-settings",
            },
          ],
        },
        {
          title: "商户结算",
          url: "/merchants/merchants-settlement",
          icon: <BadgeJapaneseYen size={18} />,
        },
        {
          title: "商户设置",
          url: "/merchants/merchants-settings",
          icon: <UserCog size={18} />,
        },
      ],
    },
    {
      title: "套餐管理",
      url: "#",
      icon: <Puzzle size={18} />,
      items: [
        {
          title: "套餐列表",
          url: "/combo/combo-lists",
          icon: <Logs size={18} />,
        },
        {
          title: "套餐订单",
          url: "/combo/combo-orders",
          icon: <SquareDashedTopSolid size={18} />,
        },
        {
          title: "助力记录",
          url: "/combo/combo-help",
          icon: <CalendarArrowUp size={18} />,
        },
      ],
    },
  ],
};
