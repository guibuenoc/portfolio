export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Nome do Projeto 1',
    description: 'Descreva o que o projeto faz, qual problema resolve e o que você aprendeu construindo ele.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/seuusuario/projeto1',
    demo: 'https://projeto1.vercel.app',
  },
  {
    title: 'Nome do Projeto 2',
    description: 'Descreva o que o projeto faz, qual problema resolve e o que você aprendeu construindo ele.',
    tags: ['TypeScript', 'Express', 'Docker'],
    github: 'https://github.com/seuusuario/projeto2',
  },
]