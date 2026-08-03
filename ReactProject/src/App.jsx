import { useState } from 'react'
import './App.css'

const projects = [
  {
    id: 1,
    name: '01basic',
    description: 'Basic React starter project.',
    folder: '01basic',
    path: '/Users/ayanshaikh/Desktop/React/01basic',
    type: 'Starter',
  },
  {
    id: 2,
    name: 'BackgroundChange',
    description: 'Interactive background color changer.',
    folder: 'BackgroundChange',
    path: '/Users/ayanshaikh/Desktop/React/BackgroundChange',
    type: 'UI',
  },
  {
    id: 3,
    name: 'Counter',
    description: 'Simple counter app built with React.',
    folder: 'Counter',
    path: '/Users/ayanshaikh/Desktop/React/Counter',
    type: 'State',
  },
  {
    id: 4,
    name: 'Currency',
    description: 'Currency converter example.',
    folder: 'Currency',
    path: '/Users/ayanshaikh/Desktop/React/Currency',
    type: 'Converter',
  },
  {
    id: 5,
    name: 'Currency-0.2',
    description: 'Updated version of the currency app.',
    folder: 'Currency-0.2',
    path: '/Users/ayanshaikh/Desktop/React/Currency-0.2',
    type: 'Converter',
  },
  {
    id: 6,
    name: 'InputContext',
    description: 'React context demo with inputs.',
    folder: 'InputContext',
    path: '/Users/ayanshaikh/Desktop/React/InputContext',
    type: 'Context',
  },
  {
    id: 7,
    name: 'Insurance',
    description: 'Insurance app UI with Tailwind styling.',
    folder: 'Insurance',
    path: '/Users/ayanshaikh/Desktop/React/Insurance',
    type: 'App',
  },
  {
    id: 8,
    name: 'Insurance02',
    description: 'Second insurance project version.',
    folder: 'Insurance02',
    path: '/Users/ayanshaikh/Desktop/React/Insurance02',
    type: 'App',
  },
  {
    id: 9,
    name: 'MegaBlog',
    description: 'Blog-style project with reusable components.',
    folder: 'MegaBlog',
    path: '/Users/ayanshaikh/Desktop/React/MegaBlog',
    type: 'Blog',
  },
  {
    id: 10,
    name: 'miniContext',
    description: 'Compact context example.',
    folder: 'miniContext',
    path: '/Users/ayanshaikh/Desktop/React/miniContext',
    type: 'Context',
  },
  {
    id: 11,
    name: 'Password-Generator',
    description: 'Password generator UI.',
    folder: 'Password-Generator',
    path: '/Users/ayanshaikh/Desktop/React/Password-Generator',
    type: 'Tool',
  },
  {
    id: 12,
    name: 'Password-update',
    description: 'Updated password generator experience.',
    folder: 'Password-update',
    path: '/Users/ayanshaikh/Desktop/React/Password-update',
    type: 'Tool',
  },
  {
    id: 13,
    name: 'Portfolio',
    description: 'Personal portfolio project.',
    folder: 'Portfolio',
    path: '/Users/ayanshaikh/Desktop/React/Portfolio',
    type: 'Portfolio',
  },
  {
    id: 14,
    name: 'React-Router',
    description: 'Routing demo for React apps.',
    folder: 'React-Router',
    path: '/Users/ayanshaikh/Desktop/React/React-Router',
    type: 'Router',
  },
  {
    id: 15,
    name: 'ReactProject',
    description: 'Current portfolio page you are editing.',
    folder: 'ReactProject',
    path: '/Users/ayanshaikh/Desktop/React/ReactProject',
    type: 'Portfolio',
  },
  {
    id: 16,
    name: 'Router-Web',
    description: 'Web routing project.',
    folder: 'Router-Web',
    path: '/Users/ayanshaikh/Desktop/React/Router-Web',
    type: 'Router',
  },
  {
    id: 17,
    name: 'ThemeContext',
    description: 'Theme switching using React context.',
    folder: 'ThemeContext',
    path: '/Users/ayanshaikh/Desktop/React/ThemeContext',
    type: 'Theme',
  },
  {
    id: 18,
    name: 'ThemeSwitcher',
    description: 'Theme switcher UI demo.',
    folder: 'ThemeSwitcher',
    path: '/Users/ayanshaikh/Desktop/React/ThemeSwitcher',
    type: 'Theme',
  },
  {
    id: 19,
    name: 'TodoContextLocal',
    description: 'Todo app using local state and context.',
    folder: 'TodoContextLocal',
    path: '/Users/ayanshaikh/Desktop/React/TodoContextLocal',
    type: 'App',
  },
  {
    id: 20,
    name: 'WareHouse',
    description: 'Warehouse management UI example.',
    folder: 'WareHouse',
    path: '/Users/ayanshaikh/Desktop/React/WareHouse',
    type: 'Dashboard',
  },
]

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [runningProjectId, setRunningProjectId] = useState(null)

  const openProject = (project) => {
    const targetUrl = `vscode://file${project.path}`
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }

  const handleSelectProject = (project) => {
    setSelectedProject(project)
    setRunningProjectId(project.id)
    openProject(project)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>React Projects</h1>
        <p>Click any project card to open it and view its details.</p>
      </header>

      <div className="content-grid">
        <section className="project-list" aria-label="Project list">
          {projects.map((project) => {
            const isRunning = runningProjectId === project.id

            return (
              <button
                key={project.id}
                type="button"
                className={`project-card ${selectedProject.id === project.id ? 'selected' : ''} ${isRunning ? 'is-running' : ''}`}
                onClick={() => handleSelectProject(project)}
              >
                <span className={`project-badge ${isRunning ? 'running' : ''}`}>{isRunning ? 'Running' : 'Local'}</span>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </button>
            )
          })}
        </section>

        <aside className="project-preview">
          <p className="preview-label">Selected project</p>
          <h2>{selectedProject.name}</h2>
          <p>{selectedProject.description}</p>
          <p className={`status-pill ${runningProjectId === selectedProject.id ? 'running' : ''}`}>
            {runningProjectId === selectedProject.id ? 'Running now' : 'Local'}
          </p>
          <ul>
            <li>
              <strong>Folder:</strong> {selectedProject.folder}
            </li>
          </ul>
          <button type="button" className="open-button" onClick={() => openProject(selectedProject)}>
            Open project
          </button>
        </aside>
      </div>
    </div>
  )
}

export default App
