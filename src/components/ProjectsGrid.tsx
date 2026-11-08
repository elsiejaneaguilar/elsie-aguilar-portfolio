import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, ClipboardText, X } from '@/components/slab'
import { practiceProjects, type PracticeProject } from '@/data/practice-projects'

type PracticeImage = NonNullable<NonNullable<PracticeProject['highlights']>[number]['image']>

function PracticeImageViewer({ image, onClose }: { image: PracticeImage; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  return createPortal(
    <dialog
      ref={dialogRef}
      className="practice-image-viewer"
      aria-label={image.alt}
      onClose={(event) => {
        event.stopPropagation()
        onClose()
      }}
      onClick={(event) => {
        event.stopPropagation()
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
    >
      <button className="practice-image-viewer__close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close image viewer">
        <X size={22} aria-hidden="true" />
      </button>
      <img className="practice-image-viewer__image" src={image.src} alt={image.alt} width={image.width} height={image.height} />
    </dialog>,
    document.body,
  )
}

function ProjectDetail({ project, onClose }: { project: PracticeProject; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [checked, setChecked] = useState<boolean[]>(() => project.workflow?.map(() => false) ?? [])
  const [selectedImage, setSelectedImage] = useState<PracticeImage | null>(null)
  const imageTriggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) {
      dialog.scrollTop = 0
      dialog.showModal()
    }
    // A native modal closes automatically when removed. Closing in effect cleanup
    // breaks React StrictMode's development setup/cleanup probe: its queued close
    // event clears the selected project immediately after the dialog opens.
  }, [])

  return (
    <dialog ref={dialogRef} className={`practice-dialog${project.id === 'email-communication' ? ' practice-dialog--email-communication' : ''}`} aria-labelledby={`${project.id}-title`} onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close() }}>
      <div className="practice-dialog__inner">
        <button className="practice-dialog__close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close project details"><X size={20} aria-hidden="true" /></button>
        {project.detailDescription ? (
          <header className="practice-dialog__header">
            <span className="practice-label">{project.detailEyebrow ?? 'SAMPLE / PRACTICE PROJECT'}</span>
            <h2 id={`${project.id}-title`}>{project.title}</h2>
            {project.detailSubtitle && <p className="practice-dialog__subtitle">{project.detailSubtitle}</p>}
            <p className="practice-dialog__summary">{project.detailDescription}</p>
          </header>
        ) : (
          <>
            <span className="practice-label">Sample / Practice Project · {project.skill}</span>
            <h2 id={`${project.id}-title`}>{project.title}</h2>
            <p className="practice-dialog__summary">{project.summary}</p>
          </>
        )}

        {project.highlights && (
          <section className="practice-highlights" aria-labelledby={`${project.id}-highlights`}>
            <h3 id={`${project.id}-highlights`}>{project.highlightsHeading ?? 'Practice Work & Key Highlights'}</h3>
            <div className="practice-highlights__list">
              {project.highlights.map((highlight) => {
                const imageBelow = project.highlightImagePosition === 'after'
                const highlightImages = [...(highlight.image ? [highlight.image] : []), ...(highlight.additionalImages ?? [])]
                const stacked = highlightImages.length === 0 || imageBelow
                const renderImage = (image: PracticeImage) => (
                  <button
                    className="practice-highlight__image-trigger"
                    type="button"
                    aria-label={`View larger image: ${image.alt}`}
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      imageTriggerRef.current = event.currentTarget
                      setSelectedImage(image)
                    }}
                  >
                    <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
                  </button>
                )
                const renderImages = () => {
                  if (highlightImages.length > 1) {
                    return (
                      <div className="practice-highlight__media">
                        {highlightImages.map((image) => <span key={image.src}>{renderImage(image)}</span>)}
                      </div>
                    )
                  }

                  const image = highlightImages[0]
                  return image ? renderImage(image) : null
                }
                const highlightContent = (
                  <div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                    {highlight.keySkills && <p className="practice-highlight__skills"><strong>Key Skills:</strong> {highlight.keySkills}</p>}
                  </div>
                )

                return (
                  <article className={`practice-highlight${stacked ? ' practice-highlight--text-only' : ''}`} key={highlight.title}>
                    {!imageBelow && renderImages()}
                    {highlightContent}
                    {imageBelow && renderImages()}
                  </article>
                )
              })}
            </div>
          </section>
        )}

        {project.scenario && (
          <div className="practice-dialog__scenario">
            <h3>Exercise scenario</h3>
            <p>{project.scenario}</p>
          </div>
        )}

        {(project.workflow || project.sample) && (
          <div className="practice-dialog__columns">
            {project.workflow && (
              <section aria-labelledby={`${project.id}-workflow`}>
                <h3 id={`${project.id}-workflow`}>Workflow checklist</h3>
                <p className="practice-dialog__hint">Use the checkboxes to step through this practice workflow.</p>
                <ul className="practice-checklist">
                  {project.workflow.map((step, index) => (
                    <li key={step}>
                      <label>
                        <input type="checkbox" checked={checked[index]} onChange={(event) => setChecked((current) => current.map((value, i) => i === index ? event.target.checked : value))} />
                        <span>{step}</span>
                      </label>
                    </li>
                  ))}
                </ul>
                <p className="practice-dialog__progress" aria-live="polite">{checked.filter(Boolean).length} of {checked.length} steps checked</p>
              </section>
            )}

            {project.sample && (
              <section className="practice-sample" aria-labelledby={`${project.id}-sample`}>
                <span className="practice-sample__eyebrow"><ClipboardText size={16} aria-hidden="true" /> Sample work artifact</span>
                <h3 id={`${project.id}-sample`}>{project.sample.heading}</h3>
                <ul>{project.sample.lines.map((line) => <li key={line}>{line}</li>)}</ul>
              </section>
            )}
          </div>
        )}

        {project.outcome && (
          <section className="practice-outcome" aria-labelledby={`${project.id}-outcome`}>
            <h3 id={`${project.id}-outcome`}>Project Outcome</h3>
            <p>{project.outcome}</p>
          </section>
        )}

        {(project.toolsUsed || project.skillsPracticed) && (
          <div className="practice-dialog__meta">
            {project.toolsUsed && (
              <section className="practice-meta-card" aria-labelledby={`${project.id}-tools`}>
                <h3 id={`${project.id}-tools`}>Tools Used</h3>
                <ul>{project.toolsUsed.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </section>
            )}
            {project.skillsPracticed && (
              <section className="practice-meta-card" aria-labelledby={`${project.id}-skills`}>
                <h3 id={`${project.id}-skills`}>{project.skillsHeading ?? 'Skills Practiced'}</h3>
                <ul>{project.skillsPracticed.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </section>
            )}
          </div>
        )}

        {project.practiceDisclaimerHeading !== undefined ? (
          <section className="practice-dialog__disclaimer practice-dialog__disclaimer--titled" aria-label={project.practiceDisclaimerHeading || 'Practice disclaimer'}>
            {project.practiceDisclaimerHeading && <h3>{project.practiceDisclaimerHeading}</h3>}
            <p>{project.practiceDisclaimer}</p>
          </section>
        ) : (
          <p className="practice-dialog__disclaimer">{project.practiceDisclaimer ?? 'This is a simulated practice exercise created to demonstrate an administrative process. It does not represent client work or measured results.'}</p>
        )}
      </div>
      {selectedImage && <PracticeImageViewer image={selectedImage} onClose={() => {
        const trigger = imageTriggerRef.current
        setSelectedImage(null)
        requestAnimationFrame(() => {
          if (trigger?.isConnected) trigger.focus({ preventScroll: true })
        })
      }} />}
    </dialog>
  )
}

export default function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<PracticeProject | null>(null)
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeProjectDetails = () => {
    const trigger = triggerRef.current
    setIsProjectDetailsOpen(false)
    setActiveProject(null)
    requestAnimationFrame(() => {
      if (trigger?.isConnected) trigger.focus()
    })
  }

  return (
    <section className="pgrid portfolio-section practice-projects" aria-labelledby="projects-title">
      <header className="pgrid__head portfolio-section__head">
        <span className="pgrid__eyebrow">PORTFOLIO · PRACTICE PROJECTS</span>
        <h1 className="pgrid__title" id="projects-title">Practical skills. Organized workflows. Thoughtful support.</h1>
        <p className="pgrid__lede">Explore five practice projects showcasing my approach to inbox organization, professional email communication, calendar management, travel planning, and executive workflow organization. Each project demonstrates my developing skills through practical, clearly organized sample work.</p>
      </header>

      <div className="practice-projects__grid">
        {practiceProjects.map((project, index) => (
          <article className="practice-card" key={project.id}>
            <div className="practice-card__top"><span>0{index + 1}</span><span>SAMPLE / PRACTICE</span></div>
            {project.preview && (
              <div className={`practice-card__preview${project.id === 'email-communication' ? ' practice-card__preview--email' : project.id === 'calendar-management' ? ' practice-card__preview--calendar' : ''}`} data-cursor={project.id === 'email-communication' ? 'none' : undefined}>
                <img
                  src={project.preview.src}
                  alt={project.preview.alt}
                  width={project.preview.width}
                  height={project.preview.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <p className="practice-card__skill">{project.skill}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <button type="button" onClick={(event) => { triggerRef.current = event.currentTarget; setActiveProject(project); setIsProjectDetailsOpen(true) }} aria-haspopup="dialog" aria-label={`View details for ${project.title}`} className="practice-card__open">
              View practice details <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>

      {isProjectDetailsOpen && activeProject && <ProjectDetail key={activeProject.id} project={activeProject} onClose={closeProjectDetails} />}
    </section>
  )
}
