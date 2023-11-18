---
aside: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Adam Hurt',
    title: 'Modelování & Historie',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Lukáš Kalenda',
    title: 'Grafika & 3D úpravy',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Michal Kruliš',
    title: '3D modelování',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

## Náš tvůrčí tým

Náš pracovní tým se pomalu začíná rozšiřovat o další členy, kteří se podílejí na vývoji projektu.

<VPTeamMembers size="small" :members="members" />
