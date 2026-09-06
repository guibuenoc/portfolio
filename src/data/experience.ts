export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: '2rpNet',
    role: 'Estagiario DevOps',
    period: 'Jan 2026 — Atual',
    description: 'Atuo como estagiário na área de tecnologia, sendo terceirizado para a TecBan, onde venho colocando em prática os conhecimentos adquiridos durante minha graduação em Análise e Desenvolvimento de Sistemas. A experiência tem me proporcionado contato direto com o ambiente profissional de DevOps, permitindo desenvolver minhas habilidades técnicas, aprender novas tecnologias e contribuir para soluções e processos da área de tecnologia.',
    tags: ['Python', 'Linux', 'DevOps', 'CI/CD', 'Git'],
  },
]

export interface EducationItem {
  institution: string
  course: string
  period: string
  description: string
}

export const education: EducationItem[] = [
  {
    institution: 'Senai Sorocaba',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: '2026 — 2027',
    description: 'Atualmente, curso Análise e Desenvolvimento de Sistemas, uma formação que tem ampliado minha visão sobre tecnologia e fortalecido meus conhecimentos em diferentes áreas do desenvolvimento. Poder conciliar a graduação com a experiência profissional na área tem sido muito importante para minha evolução, pois consigo relacionar os conhecimentos aprendidos em sala de aula com situações e desafios do ambiente de trabalho, tornando meu aprendizado ainda mais completo e constante.',
  },
]