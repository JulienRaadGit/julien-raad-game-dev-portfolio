import brickitGame from "@/assets/brickit-game.jpg";
import unrealPhysics from "@/assets/unreal-physics.jpg";
import soulsJudgment from "@/assets/souls-judgment.jpg";
import cookingUiux from "@/assets/cooking-uiux.jpg";

export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  image: string;
  overview: string;
  context: string;
  work: string;
  techTools: string[];
  takeaways: string[];
  links?: { label: string; url: string; icon: "github" | "video" | "download" }[];
}

export const projects: ProjectData[] = [
  {
    id: "brickit",
    title: "BrickIt",
    shortDescription: "Personal mobile game focused on gameplay systems and mobile design.",
    tags: ["Unity", "C#", "Mobile", "2D", "Casual"],
    image: brickitGame,
    overview:
      "BrickIt is a personal mobile game project where I focused on building solid gameplay systems, responsive touch controls, and a polished mobile-first experience. The goal was to create a fun, replayable casual game with clean architecture.",
    context:
      "This project was born from my desire to ship a complete mobile game from start to finish. I wanted to practice the full pipeline: game design, implementation, optimization for mobile devices, and preparing a build for distribution.",
    work:
      "I designed and implemented core gameplay mechanics including block destruction, combo systems, and power-ups. I built a modular level system, handled touch input with responsive feedback, and optimized rendering and physics for smooth 60fps on mid-range devices.",
    techTools: ["Unity 2D", "C#", "Android SDK", "Firebase Analytics", "Git"],
    takeaways: [
      "Mobile optimization is a discipline of its own — profiling early saves time.",
      "Playtesting with real users revealed UX issues I never expected.",
      "Shipping a complete project taught me scope management and prioritization.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/JulienRaadGit", icon: "github" },
    ],
  },
  {
    id: "unreal-physics",
    title: "Unreal Physics Project",
    shortDescription: "Experimental physics interactions and gameplay mechanics in Unreal Engine.",
    tags: ["Unreal Engine", "C++", "Blueprints", "3D", "Physics"],
    image: unrealPhysics,
    overview:
      "An experimental project exploring realistic physics interactions and emergent gameplay mechanics using Unreal Engine 5. The focus was on understanding the physics pipeline and creating satisfying, systemic interactions.",
    context:
      "Built as a learning project to expand my skill set beyond Unity and dive into Unreal Engine's physics system. The goal was to create a small sandbox where objects interact in believable and entertaining ways.",
    work:
      "I implemented custom physics materials, destructible meshes, force-based interactions, and a grab/throw system. I combined Blueprints with C++ for performance-critical calculations and built a small test environment to showcase the mechanics.",
    techTools: ["Unreal Engine 5", "C++", "Blueprints", "Chaos Physics", "Git"],
    takeaways: [
      "Unreal's Chaos physics system is powerful but requires careful tuning.",
      "Mixing Blueprints and C++ is key for rapid iteration with good performance.",
      "Physics-driven gameplay creates emergent moments that feel rewarding.",
    ],
  },
  {
    id: "souls-judgment",
    title: "Soul's Judgment",
    shortDescription: "39-hour Game Jam dungeon crawler — 2nd place finish.",
    tags: ["Unity", "C#", "3D", "Procedural", "Game Jam"],
    image: soulsJudgment,
    overview:
      "Soul's Judgment is a procedural Egyptian dungeon crawler developed in 39 hours during a Game Jam at Gaming Campus Paris. Three famous game bugs were transformed into intentional gameplay mechanics under the theme \"It's not a bug, it's a feature.\"",
    context:
      "Game Jam 2025 at Gaming Campus Paris. Our team of 8 students (4 devs, 4 artists) had 39 hours to deliver a playable build. We placed 2nd out of 6 teams.",
    work:
      "I contributed to core gameplay systems: the rollback teleport mechanic (fake connection loss), wall clipping movement, procedural dungeon generation, and the auto-shoot targeting system. I also worked on combat-locked room logic and enemy spawning.",
    techTools: ["Unity 3D", "C#", "Procedural Generation", "Custom 3D Assets", "Git"],
    takeaways: [
      "Game jams force ruthless prioritization — cut features fast, polish what matters.",
      "Turning bugs into features requires creative framing and solid execution.",
      "Team coordination under pressure is as important as technical skill.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/JulienRaadGit", icon: "github" },
    ],
  },
  {
    id: "cooking-uiux",
    title: "Cooking UI/UX Project",
    shortDescription: "Interface and UX focused project around cooking gameplay systems.",
    tags: ["Unity", "C#", "3D", "UI/UX", "Casual"],
    image: cookingUiux,
    overview:
      "A UI/UX-focused game project centered on cooking mechanics. Built during a Unity UI/UX course, the project emphasizes intuitive interfaces, visual feedback, and ergonomic design for casual gameplay.",
    context:
      "Developed as part of a UI/UX course at Gaming Campus. The objective was to design and implement a polished user interface that enhances gameplay rather than just displaying information.",
    work:
      "I designed the full UI flow: ingredient selection, cooking timers, recipe progression, and scoring screens. I implemented drag-and-drop mechanics, animated transitions, contextual tooltips, and responsive layouts that work across screen sizes.",
    techTools: ["Unity 3D", "C#", "Unity UI Toolkit", "DOTween", "Figma"],
    takeaways: [
      "Good UI is invisible — players should focus on the game, not the interface.",
      "Animation and feedback make interactions feel tangible and satisfying.",
      "Prototyping in Figma before implementing in Unity saves significant iteration time.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/JulienRaadGit", icon: "github" },
    ],
  },
];
