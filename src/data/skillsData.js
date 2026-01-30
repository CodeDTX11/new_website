export const skillsData = {
  languages: [
    'Go',
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'C++'
  ],
  frameworks: [
    'Spring Boot',
    'Angular',
    'React'
  ],
  cloudDevOps: [
    'Kubernetes',
    'AWS',
    'Docker',
    'Helm',
    'ArgoCD',
    'GitOps',
    'Terraform'
  ],
  databases: [
    'PostgreSQL',
    'MongoDB'
  ],
  tools: [
    'Git',
    'GitHub Actions',
    'Linux',
    'MCP',
    'LangGraph'
  ]
}

export const allSkills = [
  ...skillsData.languages,
  ...skillsData.frameworks,
  ...skillsData.cloudDevOps,
  ...skillsData.databases,
  ...skillsData.tools
]
