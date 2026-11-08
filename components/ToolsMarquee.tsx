import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * Horizontally scrolling list of practiced tools. The visual track is hidden
 * from assistive technology because it loops and repeats; a static list below
 * exposes each tool once to screen readers.
 */
type Tool = {
  name: string
  iconPath: string
}

export const tools: Tool[] = [
  { name: 'Gmail', iconPath: '/icons/tools-gmail.svg' },
  { name: 'Google Calendar', iconPath: '/icons/tools-calendar.svg' },
  { name: 'Google Drive', iconPath: '/icons/tools-drive.svg' },
  { name: 'Google Docs', iconPath: '/icons/tools-docs.svg' },
  { name: 'Google Sheets', iconPath: '/icons/tools-sheets.svg' },
  { name: 'Outlook', iconPath: '/icons/tools-outlook.svg' },
  { name: 'Notion', iconPath: '/icons/tools-notion.svg' },
  { name: 'Trello', iconPath: '/icons/tools-trello.svg' },
  { name: 'Slack', iconPath: '/icons/tools-slack.svg' },
  { name: 'Zoom', iconPath: '/icons/tools-zoom.svg' },
]

export default function ToolsMarquee() {
  // Duplicate the list so the -50% translate lands on a seamless seam.
  // useMemo keeps the doubled array reference-stable across renders.
  const doubled = useMemo(() => [...tools, ...tools], [])
  const [touchPaused, setTouchPaused] = useState(false)
  const touchPointerId = useRef<number | null>(null)

  useEffect(() => {
    const resume = (event?: PointerEvent) => {
      if (event && touchPointerId.current !== event.pointerId) return
      touchPointerId.current = null
      setTouchPaused(false)
    }
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') resume()
    }
    const onWindowBlur = () => resume()
    const onScroll = () => resume()

    window.addEventListener('pointerup', resume)
    window.addEventListener('pointercancel', resume)
    window.addEventListener('blur', onWindowBlur)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      window.removeEventListener('pointerup', resume)
      window.removeEventListener('pointercancel', resume)
      window.removeEventListener('blur', onWindowBlur)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <section
      className="tools-marquee"
      aria-label="Tools I have practiced"
      data-reveal
      data-touch-paused={touchPaused ? 'true' : undefined}
      onPointerDown={(event) => {
        if (event.pointerType !== 'touch') return
        touchPointerId.current = event.pointerId
        setTouchPaused(true)
      }}
      onLostPointerCapture={(event) => {
        if (touchPointerId.current === event.pointerId) {
          touchPointerId.current = null
          setTouchPaused(false)
        }
      }}
    >
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => {
          return (
            <div key={tool.name + '-' + i} className="tools-marquee__item">
              {/* The outer tile becomes a rounded icon plate on mobile. */}
              <span className="tools-marquee__tile">
                <img
                  className="tools-marquee__img"
                  src={tool.iconPath}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={24}
                  height={24}
                />
              </span>
              <span className="tools-marquee__label">{tool.name}</span>
            </div>
          )
        })}
      </div>

      {/* Real semantic list for screen readers, dedupes the visual loop. */}
      <ul className="sr-only">
        {tools.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>
    </section>
  )
}
