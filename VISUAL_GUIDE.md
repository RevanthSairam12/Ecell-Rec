# 🎬 Team Animations - Visual Guide & Code Reference

## Animation State Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    ANIMATION FLOW CHART                          │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ 1. PAGE LOADS                                                     │
│    Cards in HIDDEN state (opacity: 0, y: 40, blur: 8px)         │
│    teamSectionRef attached                                       │
└──────────────────────────────────────────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────────────────────────────┐
│ 2. USER SCROLLS TO SECTION                                       │
│    useInView detects section in viewport                         │
│    isTeamInView = true                                           │
└──────────────────────────────────────────────────────────────────┘
         │
         ↓