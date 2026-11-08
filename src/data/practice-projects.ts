export type PracticeProject = {
  id: string
  title: string
  skill: string
  summary: string
  detailEyebrow?: string
  detailSubtitle?: string
  detailDescription?: string
  highlightsHeading?: string
  highlightImagePosition?: 'before' | 'after'
  preview?: { src: string; alt: string; width: number; height: number }
  highlights?: { title: string; description: string; image?: { src: string; alt: string; width: number; height: number }; additionalImages?: { src: string; alt: string; width: number; height: number }[]; keySkills?: string }[]
  outcome?: string
  toolsUsed?: string[]
  skillsPracticed?: string[]
  skillsHeading?: string
  practiceDisclaimer?: string
  practiceDisclaimerHeading?: string
  scenario?: string
  workflow?: string[]
  sample?: { heading: string; lines: string[] }
}

/** Fictional exercises for demonstrating process; no real client work is implied. */
export const practiceProjects: PracticeProject[] = [
  {
    id: 'inbox-triage',
    title: 'Inbox Organization & Email Triage',
    skill: 'Email management',
    summary: 'Organized a sample executive inbox using Gmail labels, the 4D Email Management Method, and a Google Sheets tracker to prioritize messages and monitor pending follow-ups.',
    detailEyebrow: 'SAMPLE / PRACTICE PROJECT · EMAIL MANAGEMENT',
    detailSubtitle: 'Beginner Executive VA · Simulated Practice Project',
    detailDescription: 'Practiced organizing a fictional executive’s inbox using Gmail labels, the 4D Email Management Method, and a Google Sheets follow-up tracker to manage priorities and keep outstanding tasks visible.',
    preview: {
      src: '/Inbox%20Organization%20and%20Email%20Triage.png',
      alt: 'Gmail inbox organized with labels for urgent messages, reference items, meetings, newsletters, tasks, and follow-ups.',
      width: 750,
      height: 630,
    },
    highlights: [
      {
        title: '01. Gmail Label Organization',
        description: 'Created Gmail labels such as Urgent, To do, Meetings, Newsletter, Archive - Reference, and Waiting for Reply to organize emails by category and make important messages easier to identify.',
        image: {
          src: '/inbox-label-organization.png',
          alt: 'Gmail inbox organized with labels for urgent messages, reference items, meetings, newsletters, tasks, and follow-ups.',
          width: 750,
          height: 629,
        },
      },
      {
        title: '02. Inbox Zero Workflow',
        description: 'Cleared the Gmail Primary inbox by organizing messages and applying labels, achieving an empty Primary tab while keeping custom labels available for email organization.',
        image: {
          src: '/Zero%20inbox.png',
          alt: 'Gmail Primary inbox shown empty with practice labels for urgent messages, reference, meetings, newsletters, tasks, and follow-ups.',
          width: 1016,
          height: 679,
        },
      },
      {
        title: '03. Email Follow-Up Tracker',
        description: 'Organized email-related tasks in Google Sheets by recording each next action, assigning a responsible person, setting deadlines, and updating statuses such as Pending, Waiting for Details, and Waiting for Reply.',
        image: {
          src: '/Follow%20up%20tracker.png',
          alt: 'Google Sheets follow-up tracker with columns for email, task or next action, owner, deadline, and status.',
          width: 1303,
          height: 363,
        },
      },
    ],
    outcome: 'This practice sample brings inbox priorities, an empty-inbox review, and follow-up tracking into a clear workflow for review. It demonstrates an organized process without claiming client results.',
    toolsUsed: ['Gmail', 'Google Sheets'],
    skillsPracticed: ['Inbox categorization and label organization', 'Email triage and priority setting', 'Inbox Zero workflow', 'Follow-up tracking', 'Clear status reporting'],
  },
  {
    id: 'email-communication',
    title: 'Professional Email Communication',
    skill: 'Email writing',
    summary: 'A collection of sample business emails covering client communication, supplier follow-ups, and administrative reminders, with a focus on clear and professional correspondence.',
    detailEyebrow: 'SAMPLE / PRACTICE PROJECT · EMAIL WRITING',
    detailSubtitle: 'Beginner Executive VA · Simulated Practice Project',
    detailDescription: 'I practiced drafting clear, polite, and professional business emails to support executive communication and administrative tasks, focusing on client communication, supplier follow-ups, and administrative reminders.',
    preview: {
      src: '/Professional%20Email%20Communication.png',
      alt: 'Simulated Gmail practice email requesting a meeting reschedule, shown as an example and not as a confirmed sent message.',
      width: 1536,
      height: 1024,
    },
    highlights: [
      {
        title: '01. Client Communication',
        description: 'Prepared clear, polite, and professional email drafts to communicate with clients, coordinate meeting changes, and confirm next steps.',
        image: {
          src: '/Meeting%20Rescheduling%20Email%20Interface.png',
          alt: 'Simulated Gmail practice email to a client proposing alternative meeting times; not a confirmed sent message.',
          width: 1536,
          height: 1024,
        },
        keySkills: 'Professional Email Writing · Client Communication · Clear Messaging · Meeting Coordination',
      },
      {
        title: '02. Supplier Follow-Ups',
        description: 'Drafted polite, professional follow-up emails to request pending supplier information, clarify deadlines, and keep administrative tasks moving forward.',
        image: {
          src: '/Follow-Up%20Pricing%20Proposal.png',
          alt: 'Simulated Gmail practice follow-up email requesting revised proposal pricing; not a confirmed sent message.',
          width: 1536,
          height: 1024,
        },
        keySkills: 'Supplier Communication · Follow-Up Emails · Deadline Management · Professional Writing',
      },
      {
        title: '03. Administrative Reminders',
        description: 'Prepared clear and courteous reminder emails to follow up on pending tasks, communicate deadlines, and clarify next steps to help keep administrative workflows organized.',
        image: {
          src: '/Reminder%20Email%20Interface.png',
          alt: 'Simulated Gmail practice reminder email about pending document submission; not a confirmed sent message.',
          width: 1536,
          height: 1024,
        },
        keySkills: 'Administrative Support · Reminder Emails · Deadline Management · Professional Communication',
      },
    ],
    outcome: 'Demonstrated practice in drafting clear, courteous business emails for client communication, supplier follow-ups, and administrative support.',
    toolsUsed: ['Gmail'],
    skillsPracticed: ['Business Writing', 'Professional Tone', 'Grammar & Clarity', 'Follow-Up Communication'],
    skillsHeading: 'Skills Demonstrated',
    practiceDisclaimer: 'All examples are simulated practice drafts, not paid client work or messages confirmed as sent.',
  },
  {
    id: 'calendar-management',
    title: 'Calendar Management',
    skill: 'Calendar Management',
    summary: 'Organized a sample executive calendar through appointment scheduling, meeting coordination, and daily calendar briefings to support clear communication and efficient planning.',
    detailEyebrow: 'SAMPLE / PRACTICE PROJECT · CALENDAR MANAGEMENT',
    detailSubtitle: 'Beginner Executive VA · Simulated Practice Project',
    detailDescription: "Managed and organized an executive's weekly calendar by arranging appointments, coordinating meetings through professional email communication, and preparing daily calendar briefings. Focused on maintaining an organized schedule, clear communication, and efficient daily planning.",
    preview: {
      src: '/Calendar%20Management%20Workspace.png',
      alt: 'Google Calendar week view showing a sample schedule with planning, client meetings, an operations check-in, supplier follow-up, and daily wrap-up events.',
      width: 1309,
      height: 609,
    },
    highlightsHeading: 'Practice Work & Key Highlights',
    highlightImagePosition: 'before',
    highlights: [
      {
        title: '01. Calendar Organization',
        description: "Organized the executive's weekly schedule by arranging appointments, managing meeting times, and maintaining a clear calendar overview.",
        image: {
          src: '/Calendar%20.png',
          alt: 'Google Calendar week view showing the executive’s scheduled appointments, meetings, supplier follow-up, and daily wrap-up.',
          width: 1309,
          height: 609,
        },
      },
      {
        title: '02. Meeting Coordination Email',
        description: 'Prepared professional email communications to coordinate meeting schedules, communicate appointment changes, and confirm meeting details.',
        image: {
          src: '/Meeting%20Coordination%20Email.png',
          alt: 'Gmail practice email identifying a client meeting schedule conflict and proposing an alternative time for approval.',
          width: 1536,
          height: 1024,
        },
      },
      {
        title: '03. Daily Calendar Briefing',
        description: 'Prepared daily schedule summaries highlighting upcoming meetings, important appointments, and reminders to help the executive stay informed and prepared.',
        image: {
          src: '/Calendar%20Briefing.png',
          alt: 'Gmail practice email with a weekly calendar briefing, schedule overview, pending items, next actions, completed tasks, and notes.',
          width: 1536,
          height: 1024,
        },
      },
    ],
    outcome: "Established a structured weekly calendar, improved visibility of upcoming commitments, and provided clear meeting coordination and daily schedule updates to support the executive's time management and daily planning.",
    toolsUsed: ['Google Calendar', 'Gmail', 'Google Docs'],
    skillsPracticed: ['Calendar Management', 'Meeting Coordination', 'Email Communication', 'Time Management', 'Organization', 'Attention to Detail'],
    skillsHeading: 'Skills Demonstrated',
    practiceDisclaimerHeading: '',
    practiceDisclaimer: 'All examples are simulated practice work created for portfolio demonstration and do not represent paid client work.',
  },
  {
    id: 'travel-management',
    title: 'Travel Management',
    skill: 'Travel coordination',
    summary: 'Prepared a sample Manila-to-Singapore business travel plan featuring flight and hotel comparisons, a structured itinerary, and an estimated travel budget.',
    preview: {
      src: '/Travel%20Management%20Dashboard%20Mockup.png',
      alt: 'Sample travel itinerary spreadsheet with trip dates, times, destinations, activities, and reference links.',
      width: 1303,
      height: 637,
    },
    detailEyebrow: 'SAMPLE / PRACTICE PROJECT · TRAVEL MANAGEMENT',
    detailSubtitle: 'Beginner Executive VA · Simulated Practice Project',
    detailDescription: 'Prepared a structured business travel plan for a fictional executive traveling from Manila to Singapore. Organized flight and hotel comparisons, created a travel itinerary, and prepared an estimated travel budget to support efficient planning and informed travel decisions.',
    highlightsHeading: 'Practice Work & Key Highlights',
    highlightImagePosition: 'before',
    highlights: [
      {
        title: '01. Flight & Hotel Comparison',
        description: 'Researched and compared three flight and hotel options based on pricing, travel schedules, accommodation preferences, and convenience to identify suitable options.',
        image: {
          src: '/Flight%20Reco.png',
          alt: 'Travel planning spreadsheet comparing flight options by airline, price, cabin, dates, departure and arrival details.',
          width: 1321,
          height: 630,
        },
        additionalImages: [
          {
            src: '/Hotel%20Reco.png',
            alt: 'Hotel recommendation spreadsheet comparing accommodation preferences and hotel options by location, room type, rate, and status.',
            width: 1258,
            height: 634,
          },
        ],
      },
      {
        title: '02. Travel Itinerary Preparation',
        description: 'Created an organized business travel itinerary outlining departure and arrival details, hotel arrangements, business meetings, and return travel schedules.',
        image: {
          src: '/Itenerary.png',
          alt: 'Travel itinerary spreadsheet listing trip dates, times, locations, activities, and travel details.',
          width: 1303,
          height: 637,
        },
        additionalImages: [
          {
            src: '/To%20do.png',
            alt: 'Travel preparation to-do spreadsheet with dated tasks for passport checks, meeting schedules, airport transfers, travel documents, and sharing the final itinerary.',
            width: 494,
            height: 572,
          },
        ],
      },
      {
        title: '03. Travel Budget & Expense Planning',
        description: 'Prepared an estimated travel budget covering airfare, accommodation, transportation, meals, insurance, and miscellaneous expenses, including a contingency allowance.',
        image: {
          src: '/Travel%20Budget.png',
          alt: 'Estimated travel budget document with expense categories, cost estimates, contingency allowance, and total estimated cost.',
          width: 566,
          height: 660,
        },
        additionalImages: [
          {
            src: '/Budget%20Summary.png',
            alt: 'Budget summary comparing the estimated budget, estimated expenses, and remaining budget.',
            width: 520,
            height: 288,
          },
        ],
      },
    ],
    outcome: 'Developed a complete and organized sample business travel plan with flight and hotel comparisons, a structured itinerary, and an estimated expense breakdown. The deliverables demonstrate the ability to organize travel information and support executive travel planning.',
    toolsUsed: ['Google Sheets', 'Google Docs', 'Research Websites'],
    skillsPracticed: ['Research', 'Organization', 'Itinerary Planning', 'Budget Comparison', 'Attention to Detail'],
    skillsHeading: 'Skills Demonstrated',
  },
  {
    id: 'daily-workflow',
    title: 'Executive Daily Workflow',
    skill: 'Administrative organization',
    summary: "Organized a sample executive's daily responsibilities through task prioritization, deadline monitoring, follow-up tracking, and an end-of-day status report.",
    preview: {
      src: '/Executive%20Assistant%20Daily%20Workflow%20Dashboard.png',
      alt: 'Executive assistant daily workflow dashboard organizing inbox review, calendar preparation, priority tasks, and follow-up tracking.',
      width: 1536,
      height: 1024,
    },
    detailEyebrow: 'SAMPLE / PRACTICE PROJECT · EXECUTIVE SUPPORT',
    detailSubtitle: 'Beginner Executive VA · Simulated Practice Project',
    detailDescription: "Organized a fictional executive's daily responsibilities by prioritizing tasks, monitoring deadlines, tracking pending follow-ups, and preparing an end-of-day status report. Demonstrated an organized workflow to help an executive stay informed about daily progress and outstanding responsibilities.",
    highlightsHeading: 'Practice Work & Key Highlights',
    highlightImagePosition: 'before',
    highlights: [
      {
        title: '01. Daily Task Prioritization',
        description: 'Organized executive responsibilities based on urgency, importance, and deadlines.',
        image: {
          src: '/Daily%20Task%20Tracker.png',
          alt: 'Simulated daily executive task tracker with responsibilities, priority, deadlines, owners, statuses, next actions, and meeting context.',
          width: 1266,
          height: 466,
        },
      },
      {
        title: '02. Task & Follow-Up Tracking',
        description: 'Monitored outstanding tasks, supplier responses, client follow-ups, and upcoming deadlines.',
        image: {
          src: '/Task%20&%20Follow%20Up.png',
          alt: 'Simulated task and follow-up tracker with owners, priorities, due dates, statuses, response tracking, next actions, and notes.',
          width: 1241,
          height: 540,
        },
        additionalImages: [
          {
            src: '/Follow%20up%20log.png',
            alt: 'Simulated follow-up communication log showing dates, contacts, follow-up reasons, actions, responses, next steps, and status.',
            width: 1089,
            height: 343,
          },
        ],
      },
      {
        title: '03. End-of-Day Reporting',
        description: 'Prepared a structured daily report summarizing completed tasks, pending responsibilities, and next actions.',
        image: {
          src: '/End%20of%20Day%20Report.png',
          alt: 'Simulated end-of-day executive status report summarizing key updates, outstanding responsibilities, next-day priorities, and decisions needed.',
          width: 547,
          height: 608,
        },
      },
    ],
    outcome: 'Established an organized executive workflow that provides clear visibility into daily priorities, task progress, pending follow-ups, and upcoming deadlines. Prepared a structured end-of-day report to communicate outstanding responsibilities and next actions, helping the executive stay informed and organized.',
    toolsUsed: ['Google Sheets', 'Google Calendar', 'Notion'],
    skillsPracticed: ['Organization', 'Prioritization', 'Task Tracking', 'Time Management', 'Administrative Reporting'],
    skillsHeading: 'Skills Demonstrated',
  },
]
