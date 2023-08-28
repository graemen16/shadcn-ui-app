import { MainNavItem, SidebarNavItem } from "types/nav"

interface NavConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "item1",
      href: "/",
    },
    {
      title: "item2",
      href: "/",
    },

  ],
  sidebarNav: [
    {
      title: "Components",
      items: [
        {
          title: "Auto Complete",
          href: "/autocomplete",
          items: [],
        },

      ],
    },
    {
      title: "Future",
      items: [
        {
          title: "future...",
          href: "/",
          items: [],
        },

      ],
    },
  ],
}