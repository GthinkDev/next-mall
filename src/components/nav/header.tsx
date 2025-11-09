"use client";

import type { FC } from "react";
import React, { memo } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons";

const SideHeader: FC = () => {
  return (
    <Link
      href="/"
      className={
        "text-primary font-black flex gap-2 justify-start items-center  px-4 py-6"
      }
    >
      <Logo size={24} />
      <span className=" text-xl font-bold ">商户后台管理系统</span>
    </Link>
  );
};

export default memo(SideHeader);
