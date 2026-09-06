export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Angular',
      'Vite',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Python',
      'Java',
      'Express',
      'Flask',
      'FastAPI',
      'REST APIs',
      'JSON',
    ],
  },
  {
    title: 'Data & Cloud',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQL',
      'Docker',
      'AWS',
      'Google Cloud',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Linux',
      'Swagger',
      'Postman',
      'Vercel',
    ],
  },
]