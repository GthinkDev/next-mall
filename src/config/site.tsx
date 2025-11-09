import {
  BriefcaseConveyorBelt,
  CalendarCog,
  ChartPie,
  ListOrdered,
  MonitorCog,
  Rows3,
  SquareTerminal,
  Store,
  TableProperties,
} from "lucide-react";

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMall: [
    {
      title: "数据看板",
      url: "/home",
      icon: <ChartPie size={18} />,
    },
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
        {
          title: "物流管理",
          icon: <BriefcaseConveyorBelt size={18} />,
          items: [
            {
              title: "默认设置",
              url: "/mall/logistics/settings-default",
            },
            {
              title: "物流设置",
              url: "/mall/logistics/logistics-settings",
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
      title: "订单管理",
      url: "#",
      icon: <SquareTerminal size={18} />,
      items: [
        {
          title: "商品列表",
          icon: <SquareTerminal size={18} />,
          items: [
            {
              title: "全部商品",
              url: "#",
            },
          ],
        },
      ],
    },
  ],
};
