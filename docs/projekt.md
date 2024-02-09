---
aside: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://gravatar.com/avatar/8539186a10b6591e71960f05b0b0c3b6?s=400&d=robohash&r=x',
    name: 'Adam Hurt',
    title: 'Modelování & Historie',
  },
    {
    avatar: 'https://gravatar.com/avatar/b3e758193a3d4fd58ce539c9615394b2?s=200&d=robohash&r=x',
    name: 'Lukáš Kalenda',
    title: 'Grafika & 3D úpravy',
  },
    {
    avatar: 'https://gravatar.com/avatar/09967dd2b3d2f28e04061d7c8edbcdf6?s=200&d=robohash&r=x',
    name: 'Michal Kruliš',
    title: '3D modelování',
  },
]
</script>
# Projekt

### Náš tvůrčí tým

Jsme skupinka studentů, kteří se rozhodli spojit více druhů zájmů. Vzešlo z toho, že jsme spojili zálibu v historii a převedení jí do reality. 
Z toho vzešla výroba **3D modelů**, zatím pouze tedy lodí.

---
Náš pracovní tým se pomalu začíná rozšiřovat o další členy, kteří se podílejí na vývoji projektu.

<VPTeamMembers size="small" :members="members" />
