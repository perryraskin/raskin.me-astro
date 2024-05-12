const profile = {
  name: 'Perry Raskin',
  title: 'Perry Raskin | Software Engineer',
  description:
    'Software engineer and linux enthusiast interested in user/dev experience, design systems, statically typed languages and functional programming',
  image: '/images/cover.png',
  username: 'perryraskin',
  links: {
    email: 'mailto:perry@raskin.me',
    github: 'https://github.com/perryraskin',
    twitter: 'https://twitter.com/perryraskin',
    linkedin: 'https://linkedin.com/in/perryraskin',
  },
}

export const constants = {
  profile,
  site: import.meta.env.SITE,

  links: {
    internal: [
      { name: 'Home', link: '/' },
      { name: 'Blog', link: '/blog' },
      { name: 'Projects', link: '/projects' },
      // { name: 'Uses', link: '/uses' },
    ],
    external: [
      { name: 'Email', link: profile.links.email },
      { name: 'GitHub', link: profile.links.github },
      { name: 'Twitter', link: profile.links.twitter },
      { name: 'LinkedIn', link: profile.links.linkedin },
    ],
  },

  projects: [
    {
      name: 'Lunch mini',
      description: 'A mobile companion app for Lunch Money!',
      link: 'https://github.com/perryraskin/lunch-mini',
      using: ['SwiftUI'],
      icon: 'https://raw.githubusercontent.com/perryraskin/lunch-mini/main/Lunch%20mini/Assets.xcassets/AppIcon.appiconset/Icon-1024.png',
    },
    {
      name: 'Inviteable',
      description: 'Events of any kind, with privacy in mind.',
      link: 'https://github.com/perryraskin/buyer-dashboard',
      using: ['Next.js', 'Tailwind CSS'],
      icon: 'https://res.cloudinary.com/raskin-me/image/upload/v1648737334/inviteable/inviteable-favicon-3-alt-1_wgt3db.jpg',
    },
    {
      name: 'BuyerDash',
      description: 'Automated order tracking and reporting.',
      link: 'https://github.com/perryraskin/buyer-dashboard',
      using: ['Next.js', 'Tailwind CSS'],
      icon: 'https://res.cloudinary.com/raskin-me/image/upload/v1648132383/buyerdash/logo1_npzamy.jpg',
    },
    {
      name: 'LiteDocs',
      description: 'Minimalist documentation.',
      link: 'https://github.com/perryraskin/litedocs',
      using: ['Next.js', 'Tailwind CSS'],
      icon: 'https://res.cloudinary.com/raskin-me/image/upload/v1647982481/raskin.me/images/litedocs-icon_go9q9y.png',
    },
    {
      name: 'RecipeJoiner',
      description: 'Custom build of Simple Terminal',

      link: 'https://github.com/shmobs/recipejoiner',
      using: ['React.js', 'Tailwind CSS'],
      icon: 'https://res.cloudinary.com/raskin-me/image/upload/v1647982481/raskin.me/images/recipejoiner-icon_tdkcge.png',
    },
  ],

  uses: {
    environment: [
      { name: 'Arch', description: 'Lightweight Linux distribution', link: 'https://archlinux.org' },
      { name: 'Brave', description: 'Privacy focused web browser', link: 'https://brave.com' },
      { name: 'Fish', description: 'User friendly interactive shell', link: 'https://fishshell.com' },
      { name: 'Gnome', description: 'Desktop environment - Wayland', link: 'https://www.gnome.org' },
      { name: 'JetBrains', description: 'Font with ligatures support', link: 'https://www.jetbrains.com/lp/mono' },
      { name: 'Kitty', description: 'GPU accelerated terminal emulator', link: 'https://sw.kovidgoyal.net/kitty' },
      { name: 'Neovim', description: 'Vim-based text editor', link: 'https://neovim.io' },
      { name: 'Raycast', description: 'Better Spotlight - Productivity', link: 'https://www.raycast.com' },
      { name: 'Tmux', description: 'Terminal sessions management', link: 'https://github.com/tmux/tmux' },
    ],
    cli: [
      { name: 'FZF', description: 'General purpose fuzzy finder', link: 'https://github.com/junegunn/fzf' },
      { name: 'PNPM', description: 'JavaScript package manager', link: 'https://pnpm.io' },
      { name: 'Ripgrep', description: 'Better grep', link: 'https://github.com/BurntSushi/ripgrep' },
      { name: 'Slides', description: 'Terminal-based presentation', link: 'https://github.com/maaslalani/slides' },
      { name: 'Stow', description: 'Dotfiles management', link: 'https://www.gnu.org/software/stow' },
      { name: 'Vifm', description: 'Vim-based file manager', link: 'https://vifm.info' },
      { name: 'Volta', description: 'JavaScript tool manager', link: 'https://volta.sh' },
    ],
  },
}
