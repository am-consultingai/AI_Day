import { Session } from './types';

export const SESSIONS: Session[] = [
  {
    id: 'session-1',
    title: 'מפגש 1: Google AI Studio ומהפכת ה-Vibe Coding',
    level: 'מתחילים (Beginners)',
    requirements: 'נדרש ידע מוצק בהנחיית מודלים (פרומפטינג). מתאים למי שמכיר עבודה עם צ\'אט ו-AI בסיסי.',
    focus: 'בניית אפליקציות שלמות ללא כתיבת קוד מסורתית',
    date: 'יום שני 23.3',
    time: '10:00',
    duration: '60 דקות',
    price: 199,
    overview: 'Google AI Studio הוא המסלול המהיר ביותר לעבודה עם Gemini. במפגש נלמד להפוך רעיון לאפליקציה עובדת תוך דקות באמצעות Vibe Coding — פיתוח בשפה טבעית והנחיית המודל במקום כתיבת סינטקס.',
    topics: [
      'מה זה Vibe Coding — מעבר מתפקיד "מתכנת" ל"מנצח" (Orchestrator)',
      'Build Mode ב־AI Studio: ייצור קבצי React, HTML ו־JS מתוך תיאור מילולי עם Gemini 3',
      'Iterative Refinement — "תיקוני ויב": שינוי עיצוב והוספת לוגיקה בזמן אמת',
      'חיחיבור ל־Backend עם Python Code Execution לחישוב וניתוח נתונים'
    ],
    takeaways: [
      'יכולת בנייה מהירה — הפיכת רעיונות ל־MVPs תוך פחות מ־30 דקות',
      'חשיבה מוכוונת תוצאה — ניהול שיחה עם מודל ליצירת קוד תקני ומעוצב',
      'היכרות עם ה־Sandbox של גוגל — הרצת אפליקציות ללא התקנות מקומיות'
    ],
    image: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/ai_lab_virt_sessions/Google_AI_studio.jpg',
    apiField: 'regBeginners'
  },
  {
    id: 'session-2',
    title: 'מפגש 2: Claude Code למתקדמים (Intermediate)',
    level: 'ביניים (Intermediate)',
    requirements: 'נדרש ידע בשורת פקודות (טרמינל). מתאים למי שמשתמש ב-CLI ורוצה לשלב סוכן AI בעבודה.',
    focus: 'פיתוח מבוסס סוכנים בטרמינל (CLI)',
    date: 'יום שני 23.3',
    time: '12:00',
    duration: '60 דקות',
    price: 199,
    overview: 'Claude Code מעביר את זרימת העבודה מהדפדפן לטרמינל. נלמד להשתמש בסוכן ה־CLI של Anthropic כדי לנהל מאגרי קוד שלמים ולבצע רפקטורינג מורכב.',
    takeaways: [
      'שיפור פרודוקטיביות — קיצור בזמני כתיבת טסטים, תיקון באגים ויצירת תיעוד',
      'שליטה ב־MCP — הבנה של פרוטוקול Context לחיבור AI לכלים מקומיים (DB, Browser)',
      'ניהול פרויקטים מונחי AI — "חוקת פרויקט" (CLAUDE.md) לשמירה על עקביות הקוד'
    ],
    image: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/ai_lab_virt_sessions/claude_code.png',
    apiField: 'regIntermediate'
  },
  {
    id: 'session-3',
    title: 'מפגש 3: סוכנים אוטונומיים (Advanced)',
    level: 'מתקדמים (Advanced)',
    requirements: 'נדרשות יכולות Python מוצקות. מתאים למי שמפתח בפייתון ורוצה לבנות מערכות סוכנים.',
    focus: 'מערכות מרובות סוכנים (MAS) ואורקסטרציה',
    date: 'יום שני 23.3',
    time: '14:00',
    duration: '60 דקות',
    price: 199,
    overview: 'המפגש צולל ל"ארכיטקטורה הקוגניטיבית" של ה־AI. נלמד לבנות מערכות שבהן מספר סוכנים מתקשרים ביניהם לפתרון בעיות ללא מגע יד אדם.',
    takeaways: [
      'יכולת ארכיטקטורה — תכנון מערכות מבוזרות (Multi-Agent Systems)',
      'שליטה ב־Memory & Logic — זיכרון לטווח ארוך ו־Adaptive Reasoning',
      'אוטומציה של DevOps — סוכני "ריפוי עצמי" (Self-healing) שחוסכים זמן בתחזוקת מערכות'
    ],
    image: 'https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/ai_lab_virt_sessions/automomous_agents.png',
    apiField: 'regAdvanced'
  }
];

export const REGISTRATION_API_URL = 'https://script.google.com/macros/s/AKfycbxOmdE0mirm_8RJ0ZaG2GGxPg4TCqEF8vIHDmW3Sn7Rc8mDPCdQKd_Y5KuwH7yWAJ65yw/exec';
