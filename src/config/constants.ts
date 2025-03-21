const profile = {
  name: "Perry Raskin",
  title: "Perry Raskin | Software Engineer",
  description:
    "Software engineer and linux enthusiast interested in user/dev experience, design systems, statically typed languages and functional programming",
  image: "/images/cover.png",
  username: "perryraskin",
  links: {
    email: "mailto:perry@raskin.me",
    github: "https://github.com/perryraskin",
    twitter: "https://twitter.com/perryraskin",
    linkedin: "https://linkedin.com/in/perryraskin",
  },
}

export const constants = {
  profile,
  site: import.meta.env.SITE,

  links: {
    internal: [
      { name: "Home", link: "/" },
      { name: "Blog", link: "/blog" },
      { name: "Projects", link: "/projects" },
      // { name: 'Uses', link: '/uses' },
    ],
    external: [
      { name: "Email", link: profile.links.email },
      { name: "GitHub", link: profile.links.github },
      { name: "Twitter", link: profile.links.twitter },
      { name: "LinkedIn", link: profile.links.linkedin },
    ],
  },

  projects: [
    {
      name: "TipsPls",
      description: "QR code tipping for servers, freelancers, and street performers.",
      link: "https://www.tipspls.com",
      using: ["React", "Tailwind CSS"],
      icon: "https://www.tipspls.com/favicon.ico",
    },
    {
      name: "BankFlows",
      description: "Unified bank exports on autopilot.",
      link: "https://www.bankflows.com",
      using: ["Next.js", "Tailwind CSS"],
      icon: "https://www.bankflows.com/favicon.ico",
    },
    {
      name: "NJT Departures",
      description: "Real-time NJ Transit departures and track predictions.",
      link: "https://njt.app",
      using: ["React Native"],
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4e/0b/91/4e0b91a6-3c22-45bc-6f84-9d4528b4eae8/AppIcon-0-0-1x_U007epad-0-1-85-220.png/360x360bb.png",
    },
    {
      name: "Release Notes by AI",
      description: "Generate release notes with AI.",
      link: "https://github.com/perryraskin/release-notes-by-ai",
      using: ["React", "Vite", "Tailwind CSS", "OpenAI", "Anthropic"],
      icon: "https://kc.scia.net/Content/Resources/Icons/Icon-ReleaseNotes.png",
    },
    {
      name: "OpenAPI YAML Editor",
      description: "A web-based editor for OpenAPI specs.",
      link: "https://github.com/perryraskin/openapi-yaml-editor",
      using: ["React", "Vite", "Tailwind CSS"],
      icon: "https://raw.githubusercontent.com/perryraskin/openapi-yaml-editor/main/public/favicon.ico",
    },
    {
      name: "Lunch mini",
      description: "A mobile companion app for Lunch Money!",
      link: "https://github.com/perryraskin/lunch-mini",
      using: ["SwiftUI"],
      icon: "https://raw.githubusercontent.com/perryraskin/lunch-mini/main/Lunch%20mini/Assets.xcassets/AppIcon.appiconset/Icon-1024.png",
    },
    {
      name: "Inviteable",
      description: "Events of any kind, with privacy in mind.",
      link: "https://github.com/perryraskin/inviteable",
      using: ["Next.js", "Tailwind CSS"],
      icon: "https://res.cloudinary.com/raskin-me/image/upload/v1648737334/inviteable/inviteable-favicon-3-alt-1_wgt3db.jpg",
    },
    // {
    //   name: "BuyerDash",
    //   description: "Automated order tracking and reporting.",
    //   link: "https://github.com/perryraskin/buyer-dashboard",
    //   using: ["Next.js", "Tailwind CSS"],
    //   icon: "https://res.cloudinary.com/raskin-me/image/upload/v1648132383/buyerdash/logo1_npzamy.jpg",
    // },
    // {
    //   name: "LiteDocs",
    //   description: "Minimalist documentation.",
    //   link: "https://github.com/perryraskin/litedocs",
    //   using: ["Next.js", "Tailwind CSS"],
    //   icon: "https://res.cloudinary.com/raskin-me/image/upload/v1647982481/raskin.me/images/litedocs-icon_go9q9y.png",
    // },
    // {
    //   name: "RecipeJoiner",
    //   description: "Custom build of Simple Terminal",

    //   link: "https://github.com/shmobs/recipejoiner",
    //   using: ["React.js", "Tailwind CSS"],
    //   icon: "https://res.cloudinary.com/raskin-me/image/upload/v1647982481/raskin.me/images/recipejoiner-icon_tdkcge.png",
    // },
  ],

  uses: {
    environment: [
      { name: "Arch", description: "Lightweight Linux distribution", link: "https://archlinux.org" },
      { name: "Brave", description: "Privacy focused web browser", link: "https://brave.com" },
      { name: "Fish", description: "User friendly interactive shell", link: "https://fishshell.com" },
      { name: "Gnome", description: "Desktop environment - Wayland", link: "https://www.gnome.org" },
      { name: "JetBrains", description: "Font with ligatures support", link: "https://www.jetbrains.com/lp/mono" },
      { name: "Kitty", description: "GPU accelerated terminal emulator", link: "https://sw.kovidgoyal.net/kitty" },
      { name: "Neovim", description: "Vim-based text editor", link: "https://neovim.io" },
      { name: "Raycast", description: "Better Spotlight - Productivity", link: "https://www.raycast.com" },
      { name: "Tmux", description: "Terminal sessions management", link: "https://github.com/tmux/tmux" },
    ],
    cli: [
      { name: "FZF", description: "General purpose fuzzy finder", link: "https://github.com/junegunn/fzf" },
      { name: "PNPM", description: "JavaScript package manager", link: "https://pnpm.io" },
      { name: "Ripgrep", description: "Better grep", link: "https://github.com/BurntSushi/ripgrep" },
      { name: "Slides", description: "Terminal-based presentation", link: "https://github.com/maaslalani/slides" },
      { name: "Stow", description: "Dotfiles management", link: "https://www.gnu.org/software/stow" },
      { name: "Vifm", description: "Vim-based file manager", link: "https://vifm.info" },
      { name: "Volta", description: "JavaScript tool manager", link: "https://volta.sh" },
    ],
  },
}
