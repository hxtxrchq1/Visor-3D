import Viewer from './components/Viewer'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎨 Visor 3D</h1>
        <p className="subtitle">Dormitorio principal completo</p>
      </header>

      <main className="app-main">
        <Viewer />
      </main>

      <footer className="app-footer">
        <p>Usa el mouse/touch para rotar • Scroll para zoom • Click derecho para mover</p>
      </footer>
    </div>
  )
}

export default App
