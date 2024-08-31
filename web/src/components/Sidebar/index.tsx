"use client"

import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"

//Menu
import {
  ChartColumn,
  ChevronsLeftRight,
  ChevronsRightLeft,
  HomeIcon,
  LucideIcon,
  MessageCircle,
  Settings,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

//SubButton
import { useUser } from "@/fetchHook/user.ts"
import { buttonVariants } from "@/components/ui/button.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import { usePanelCollapse, usePanelCollapseActions } from "@/store/collapse.ts"
import { Avatar } from "@/components/Avatar.tsx"

export const Sidebar = () => {
  const isPanelCollapse = usePanelCollapse()
  const { setPanelIsCollapse } = usePanelCollapseActions()

  return (
    <aside
      className={cn(
        "z-20 h-screen translate-x-0 transition-[width] ease-in-out duration-300 group w-16 touch-none",
      )}
    >
      <div className="relative h-full flex flex-col overflow-hidden shadow-md dark:shadow-zinc-800">
        <Link
          to="/"
          className={cn(
            buttonVariants({
              variant: "link",
              size: "default",
              className: "flex items-center gap-2",
            }),
          )}
        >
          <HomeIcon className="size-5" />
        </Link>
        <div
          className={cn(
            "w-fit rounded-lg mx-auto flex justify-center items-center text-neutral-500 hover:text-neutral-800",
            { "bg-neutral-100 text-neutral-800": isPanelCollapse },
          )}
        >
          {!isPanelCollapse ? (
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <span
                    onClick={() => setPanelIsCollapse(true)}
                    className="size-9 flex justify-center items-center"
                  >
                    <ChevronsRightLeft className="size-5" />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right">Collapse</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <span
                    onClick={() => setPanelIsCollapse(false)}
                    className="size-9 flex justify-center items-center"
                  >
                    <ChevronsLeftRight className="size-5" />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right">Collapse</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <Menu />
      </div>
    </aside>
  )
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
}

type Group = {
  separator?: boolean
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      separator: true,
      menus: [
        {
          href: "/chat",
          label: "Chat",
          active: pathname.includes("/chat"),
          icon: MessageCircle,
        },
        {
          href: "/report",
          label: "report",
          active: pathname.includes("/report"),
          icon: ChartColumn,
        },
      ],
    },
  ]
}

export function Menu() {
  const { href } = useLocation()
  const menuList = getMenuList(href)
  const { data: user } = useUser()

  return (
    <nav className="mt-2 h-full w-full text-gray-500 flex flex-col justify-between items-center">
      <ul className="flex justify-center flex-col items-center gap-2">
        {menuList.map(({ separator, menus }, index) => (
          <li
            className={cn("w-full flex justify-center items-center gap-2", {
              "flex-col": separator,
            })}
            key={index}
          >
            {separator ? <Separator className="w-1/2 h-0.5 mb-1 mt-4" /> : null}
            {menus.map(({ href, label, icon: Icon, active }, index) => {
              return (
                <div className="w-full" key={index}>
                  <TooltipProvider disableHoverableContent>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Link
                          to={href}
                          className={cn(
                            "w-fit rounded-lg mx-auto flex justify-center items-center text-neutral-500 hover:text-neutral-800",
                            { "bg-neutral-100 text-neutral-800": active },
                          )}
                        >
                          <span className="size-9 flex justify-center items-center">
                            <Icon className="size-5" />
                          </span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">{label}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )
            })}
          </li>
        ))}
      </ul>
      <ul className="mb-4 flex justify-center flex-col items-center gap-2">
        <li className="w-full flex-1 flex justify-center items-center">
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Link
                  to="/setting"
                  className="inline-flex w-fit justify-center items-center"
                >
                  <span className="size-9 p-1 flex justify-center items-center">
                    <Settings className="size-5" />
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Setting</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li className="w-full flex items-end">
          <div className="flex justify-center items-center">
            <Avatar src={user?.picture} alt={user?.email} />
            {/*<span className="border-2 size-9 rounded-lg flex justify-center items-center">*/}
            {/*  PD*/}
            {/*</span>*/}
          </div>
        </li>
      </ul>
    </nav>
  )
}
