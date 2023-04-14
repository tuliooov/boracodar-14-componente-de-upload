import './page.css'

export default function Home() {
  return (
    <div id="app">
      <section className="drag-files">
        <i className="ph ph-cloud-arrow-up"></i>

        <h3>Importe seus arquivos</h3>
        <p>Arraste ou clique para fazer upload</p>

        <input type="file" />
      </section>
      <section className="files">
        <div className="box uploading">
          <div className="icon">
            <i className="ph-fill ph-file"></i>
          </div>
          <div className="info">
            <div className="filename">Scann_158.pdf</div>
            <div className="filesize">
              <span>30 MB / </span>
              <span>70 MB</span>
            </div>
            <div className="bar">
              <progress value="46" max="100"></progress>
              <span>46%</span>
            </div>
          </div>
          <div className="action">
            <i className="ph ph-x"></i>
          </div>
        </div>
        <div className="box done">
          <div className="icon">
            <i className="ph-fill ph-file"></i>
          </div>
          <div className="info">
            <div className="filename">README.md</div>
            <div className="filesize">
              <span>12 KB</span>
            </div>
            <div className="bar">
              <progress value="100" max="100"></progress>
              <span>100%</span>
            </div>
          </div>
        </div>
        <div className="box error">
          <div className="icon">
            <i className="ph-fill ph-file"></i>
          </div>
          <div className="info">
            <div className="filename">picture1.jpeg</div>
            <div className="filesize">
              <span>6.3 MB</span>
            </div>
            <div className="bar">
              <progress value="0" max="100"></progress>
              <span>Erro</span>
            </div>
          </div>
          <div className="action">
            <i className="ph ph-arrow-counter-clockwise"></i>
          </div>
        </div>
      </section>
    </div>
  )
}
