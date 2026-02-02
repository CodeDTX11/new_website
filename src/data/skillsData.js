export const skillsData = {
  languages: [
    'Go',
    'Python',
    'C++',
    'C',
    'Java',
    'JavaScript',
    'TypeScript'
  ],
  frameworks: [
    'Spring Boot',
    'Angular',
    'REST APIs'
  ],
  cloudDevOps: [
    'Kubernetes',
    'AWS',
    'GitOps',
    'MCP',
    'Helm',
    'ArgoCD',
    'Docker',
    'OIDC/IRSA'
  ],
  databases: [
    'PostgreSQL'
  ],
  tools: [
    'Git',
    'Linux',
    'Bash',
    'HTML',
    'CSS',
    'Bootstrap'
  ]
}

export const allSkills = [
  ...skillsData.languages,
  ...skillsData.frameworks,
  ...skillsData.cloudDevOps,
  ...skillsData.databases,
  ...skillsData.tools
]
