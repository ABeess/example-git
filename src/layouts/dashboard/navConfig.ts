export interface IHeader extends INav {
  subheader: string
  icon: string
}

type MyHeader = IHeader[]

export interface INav {
  children: {
    id: number
    title: string
    icon: string
    path: string
  }[]
}

export const navConfig: MyHeader = [
  {
    subheader: 'menu',
    icon: 'ant-design:home-twotone',
    children: [
      {
        id: 1,
        title: 'Home',
        icon: 'ant-design:home-twotone',
        path: '/',
      },
      {
        id: 2,
        title: 'Post',
        icon: 'mdi:post',
        path: '/post',
      },
      {
        id: 4,
        title: 'Profile',
        icon: 'icomoon-free:profile',
        path: '/profile',
      },
      {
        id: 3,
        title: 'Message',
        icon: 'ant-design:message-twotone',
        path: '/message',
      },
    ],
  },
  {
    subheader: 'System manager',
    icon: 'icon',
    children: [
      {
        id: 1,
        title: 'User',
        icon: 'fa6-solid:user',
        path: '/user',
      },
      {
        id: 2,
        title: 'Roles',
        icon: 'eos-icons:cluster-role',
        path: '/roles',
      },
    ],
  },
  {
    subheader: 'Account',
    icon: 'icon',
    children: [
      {
        id: 1,
        title: 'Setting',
        icon: 'ant-design:setting-twotone',
        path: '/accouts',
      },
      {
        id: 2,
        title: 'Logout',
        icon: 'ic:round-logout',
        path: '/logout',
      },
    ],
  },
]
