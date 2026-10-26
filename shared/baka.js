/* בית קטן בבקעה — תוכן משותף ועזרי הזמנה לכל חמשת העיצובים.
   מקור התוכן: bakah.jerusalem-hotel.co.il (נאסף 25.10.2026).
   מחירים: דגימה ממנוע ההזמנות של המלון (EZGO) ללילה בנובמבר 2026, כולל ארוחת בוקר ומע״מ.
   המחיר הסופי תמיד נקבע במנוע ההזמנות לפי התאריכים. */
(function () {
  const scriptSrc = document.currentScript && document.currentScript.src;
  const imgBase = scriptSrc ? new URL('../img/', scriptSrc).href : '../img/';

  const BAKA = {
    name: 'בית קטן בבקעה',
    nameShort: 'בית קטן',
    nameEn: 'The Little House in Bakah',
    city: 'ירושלים',
    neighborhood: 'בקעה',
    roomsCount: 34,
    built: 'שנות ה־20 של המאה ה־20',
    hotelSince: 2000,
    address: 'רחוב יהודה 1 (פינת דרך חברון 80), ירושלים',
    addressShort: 'יהודה 1, בקעה, ירושלים',
    phone: '02-6737944',
    phoneHref: 'tel:+97226737944',
    whatsapp: '054-2469215',
    whatsappNumber: '972542469215',
    email: 'hotelbaka@gmail.com',
    facebook: 'https://www.facebook.com/littlehouseinbakah/',
    youtube: 'https://www.youtube.com/user/JerusalemHotel',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('רחוב יהודה 1, ירושלים'),
    ezgoItemId: 2394,

    taglines: [
      'בית ערבי מדהים ביופיו, עם קשתות ועמודים, בלב בקעה',
      'תחושו את ירושלים במיטבה',
      'אווירה משפחתית, מסבירת פנים ונינוחה'
    ],

    intro: [
      '„בית קטן בבקעה” הוא מלון מקסים בבניין ערבי מדהים ביופיו, עם קשתות ועמודים — אחד הבתים היפים בירושלים. הבניין הוכרז „לשימור מחמיר” על ידי המועצה לשימור אתרים.',
      'הבית שופץ באופן יסודי למלון מודרני בן 34 חדרים וסוויטות, ממוזגים ומצוידים היטב: ריהוט קלאסי, ריצוף פרקט, וילונות בעיצוב ייחודי ועוד.',
      'שלא כמו במלונות גדולים, האווירה כאן משפחתית, מסבירת פנים ונינוחה. ב„בית קטן בבקעה” תחושו את ירושלים במיטבה — חוויה ייחודית ושונה מכל מלון שבו שהיתם עד היום.'
    ],

    highlights: [
      { icon: 'wifi', title: 'אינטרנט אלחוטי חינם', text: 'בכל שטחי המלון' },
      { icon: 'parking', title: 'חניה חינם', text: 'בחניון מול המלון, רחוב מרדכי היהודי 2' },
      { icon: 'coffee', title: 'פינת קפה ותה', text: 'חופשית, 24 שעות ביממה' },
      { icon: 'shabbat', title: 'חדר אוכל לשבת', text: 'פלטות, מקררים ומיחם — לשימוש חופשי' },
      { icon: 'garden', title: 'גן פורח', text: 'פינות ישיבה מוצלות להנאת האורחים' },
      { icon: 'nosmoking', title: 'מלון ללא עישון', text: 'בכל שטחי המלון, על פי החוק' }
    ],

    rooms: [
      {
        id: 'double',
        name: 'חדר זוגי',
        subtitle: 'תקרות של 4 מטרים וחלונות מקושתים',
        count: 10,
        guestsLabel: 'ל־2 אורחים, בחלקם אפשר להוסיף מיטה',
        maxGuests: 3,
        price: 550,
        priceDirect: 523,
        summary: 'עשרה חדרים זוגיים עם תקרות גבוהות, חלונות מקושתים ופריטי אבן עתיקים — חלקם צופים לגינה פורחת.',
        description: [
          'החדרים שלנו מיוחדים במינם: לכולם תקרות גבוהות של 4 מטרים, חלונות מקושתים ופריטי אבן עתיקים, וחלקם צופים לגינה פורחת.',
          'העיצוב המיוחד משרה אווירת קדומים, כמו להתארח בטירה עתיקה. אין יותר ירושלים מזה.',
          'החדרים מעוצבים בסגנון כפרי חמים, ויש בהם כל הדרוש לשהייה נוחה, שקטה ומהנה.'
        ],
        features: ['מיזוג אוויר', 'מיטה זוגית או מיטות נפרדות', 'מקלחון או אמבטיה ושירותים', 'טלוויזיה בכבלים', 'כספת', 'מקרר קטן ושולחן כתיבה', 'מרפסת קטנה בשלושה מהחדרים', 'אינטרנט אלחוטי חינם'],
        images: ['double-arched.jpg', 'double-1.jpg', 'double-2.jpg', 'double-4.jpg', 'twin.jpg', 'bath-tub.jpg']
      },
      {
        id: 'single',
        name: 'חדר יחיד',
        subtitle: 'קטן ואינטימי, גבוה ומואר',
        count: 9,
        guestsLabel: 'לאורח אחד',
        maxGuests: 1,
        price: 390,
        priceDirect: 371,
        summary: 'תשעה חדרים ליחידים — קטנים ואינטימיים, אך התקרות הגבוהות והחלונות המקושתים משרים תחושת מרחב.',
        description: [
          'חדרי היחיד שלנו קטנים ואינטימיים, אך התקרות הגבוהות והחלונות המקושתים מפצים ומשרים תחושת מרחב.',
          'החדרים מעוצבים בסגנון כפרי חמים, ויש בהם כל הדרוש לשהייה נוחה, שקטה ומהנה.'
        ],
        features: ['מיזוג אוויר', 'מיטה זוגית', 'אמבטיה ושירותים', 'טלוויזיה בכבלים', 'כספת', 'אינטרנט אלחוטי חינם'],
        images: ['double-3.jpg', 'single-1.jpg', 'bath-amenities.jpg']
      },
      {
        id: 'family',
        name: 'יחידה משפחתית',
        subtitle: 'שני חדרים עם דלת מקשרת',
        count: 3,
        guestsLabel: 'ל־4–5 אורחים (6 — בתיאום עם המלון)',
        maxGuests: 5,
        price: 950,
        priceDirect: 903,
        summary: 'שלוש יחידות רחבות ידיים: חדר להורים, חדר לילדים, מרפסת עם פינת ישיבה ויחידת רחצה.',
        description: [
          'היחידה המשפחתית שלנו מיוחדת במינה: רחבת ידיים, עם חדר נפרד להורים וחדר נוסף לילדים, מרפסת עם פינת ישיבה ויחידת רחצה.',
          'התקרות הגבוהות ושפע החלונות המקושתים משרים אווירה של טירה עתיקה.',
          'אפשר ליצור יחידות משפחתיות נוספות משני חדרים עם דלת מקשרת — צרו קשר עם המלון אם היחידות הקבועות כבר תפוסות.'
        ],
        features: ['שני חדרים ודלת מקשרת', 'מרפסת עם פינת ישיבה', 'מיזוג אוויר', 'מיטה זוגית', 'שתי טלוויזיות בכבלים', 'מקלחון ושירותים', 'כספת ומקרר קטן', 'אינטרנט אלחוטי חינם'],
        images: ['family-1.jpg', 'family-2.jpg', 'family-3.jpg', 'balcony.jpg']
      },
      {
        id: 'economy',
        name: 'חדר מוזל',
        subtitle: 'בקומת הגן, במחיר משתלם',
        count: 9,
        guestsLabel: 'ליחיד או לזוג',
        maxGuests: 2,
        price: 350,
        priceDirect: 333,
        priceDouble: 450,
        priceDoubleDirect: 428,
        summary: 'תשעה חדרים (3 זוגיים ו־6 ליחיד) בקומת הפארטר — רובם בחלק השקט הצמוד לגינת המלון.',
        description: [
          'חדרי אירוח לזוגות וליחידים בקומת חצי מרתף (פארטר) — במחיר מוזל: 3 חדרים זוגיים ו־6 חדרי יחיד.',
          'בחדרים ריהוט בסיסי בלבד, ללא התקרות הגבוהות והחלונות המקושתים. מרבית החדרים נמצאים בחלק שקט הצמוד לגינת המלון.',
          'שניים מחדרי היחיד המוזלים נמצאים בקומה העליונה, עם חלון פנימי בלבד.'
        ],
        features: ['מיזוג אוויר', 'מיטה זוגית', 'חדר רחצה פרטי', 'טלוויזיה בכבלים', 'כספת', 'אינטרנט אלחוטי חינם'],
        images: ['economy-double.jpg', 'economy-single.jpg', 'economy-bath.jpg']
      }
    ],

    services: [
      {
        id: 'garden',
        title: 'גינת המלון',
        lead: 'גן רחב ידיים, מוצל ופורח',
        text: 'במלון גינה רחבת ידיים עם פינות ישיבה מוצלות להנאת האורחים, ועוד פינות ישיבה קטנות ומקסימות ברחבי המלון ובפטיו שבכניסה.',
        images: ['garden-umbrellas.jpg', 'garden-path.jpg', 'garden-gazebo.jpg', 'patio-deck.jpg', 'garden-seating.jpg', 'flowers.jpg']
      },
      {
        id: 'breakfast',
        title: 'ארוחת בוקר',
        lead: 'בוקר ירושלמי, בחדר אוכל נעים',
        text: 'כל ההזמנות כוללות לינה וארוחת בוקר. אורחינו מספרים על ארוחת בוקר עשירה ומגוונת, המוגשת בחדר אוכל נעים ובפינה המקורה מול הגן.',
        images: ['breakfast.jpg', 'dining-room.jpg', 'coffee.jpg']
      },
      {
        id: 'shabbat',
        title: 'סעודות שבת',
        lead: 'שבת בירושלים, כמו בבית',
        text: 'שימוש חופשי בחדר האוכל לסעודות שבת — פלטות שבת, מקררים ומיחם עומדים לרשותכם.',
        images: ['wine.jpg', 'dining-room.jpg']
      },
      {
        id: 'parking',
        title: 'חניה חינם',
        lead: 'חדש: חניון חינם מול המלון',
        text: 'חניה חינם בחניון ברחוב מרדכי היהודי 2 — רחוב ללא מוצא שסופו מול המלון — על בסיס מקום פנוי. חניה חופשית גם ברחובות הסמוכים: יהודה, דרך חברון ודרך בית לחם, לצד מדרכות אפורות.',
        images: ['exterior.jpg']
      },
      {
        id: 'hall',
        title: 'אולם המלון',
        lead: 'לאירועים, הרצאות ומפגשים',
        text: 'אולם בבית קטן בבקעה, לאירועים קטנים, הרצאות ומפגשים. לפרטים ולתיאום — צרו קשר עם המלון.',
        images: ['hall.jpg', 'hall-lecture.jpg']
      },
      {
        id: 'coffee',
        title: 'פינת קפה ותה',
        lead: 'פתוחה 24 שעות',
        text: 'פינת קפה ותה חופשית, 24 שעות ביממה, ופינות ישיבה שקטות ברחבי הבית.',
        images: ['coffee.jpg', 'lounge.jpg', 'sitting-corner.jpg']
      }
    ],

    reasons: [
      { title: 'חניה חינם', text: 'חדש: חניה חינם בחניון מול המלון, ברחוב מרדכי היהודי 2.' },
      { title: 'המחיר הנמוך ביותר', text: 'נמוך מבוקינג, אקספדיה, טריווגו ואחרים — ועוד 5% הנחה למזמינים ישירות באתר. המחיר כולל מע״מ.' },
      { title: 'עדיפות לבקשות מיוחדות', text: 'מיטה זוגית או מיטות נפרדות, עזיבה מאוחרת ועוד — המזמינים ישירות מקבלים עדיפות.' },
      { title: 'ביטול גמיש', text: 'למזמינים באתר בלבד: ביטול ללא תשלום עד 3 ימים לפני ההגעה, ובחגים עד שבוע לפני (לקבוצות עשויה לחול מדיניות שונה).' },
      { title: 'קשר ישיר עם המלון', text: 'כל שינוי ובקשה — ישירות מול המלון, בלי סוכן ובלי אתר תיווך.' }
    ],

    reviews: [
      { title: 'חוויה ירושלמית עם המשפחה', text: 'הזמנו כמה חדרים ללילה אחד במלון, למשפחה המורחבת, שחלקה מתגורר בחו״ל. הגענו עם ילדה קטנה ותינוק. המלון חמוד ביותר, נוח ונקי, עם אווירה ירושלמית, בשכונה מקסימה שכיף לטייל בה בערב. ארוחת הבוקר נעימה ומספקת. השירות נהדר. כולנו נהנינו מאוד. תודה לצוות המלון!' },
      { title: 'מעולה', text: 'חדר נקי, מסודר, אווירה מקסימה. מקלחת ושירותים במצב טוב מאוד. ארוחת בוקר מגוונת.' },
      { title: 'טיול משפחתי קצר', text: 'מומלץ בחום! מקום נעים ומיקום מעולה למי שבא ליהנות מירושלים ומהאתרים שבה וזקוק למקום לינה נעים וכיף.' },
      { title: 'תמורה מלאה עבור המחיר ששילמנו', text: 'מיקום מצוין, מאפשר הליכה רגלית מהנה להרבה מאוד אתרים בירושלים. חניה נוחה בחינם בקרבת המלון, החדרים בסדר גמור. ארוחת בוקר טובה מאוד ומספקת בהחלט, המוגשת בחדר אוכל נעים.' },
      { title: 'שהייה של שני לילות', text: 'מלון קטן וביתי. חדרים נעימים. נקי מאוד. שירות מעולה וידידותי. אווירה נעימה ומאור פנים. מיקום נוח, קרוב לתלפיות, מרחק הליכה מסופר, בתי קפה, כספומט ומסעדות. שכונה יפהפייה.' },
      { title: 'המלצה חמה', text: 'המלון נמצא במקום מקסים, כמעט קרוב להכול בירושלים. בית קטן, נקי ומסודר. הצוות — אנשי מקצוע מסודרים, ומאוד נעזרתי בהם לכל מיני דברים. ארוחת בוקר עשירה. המלון מתאים מאוד למשפחות ולזוגות. ממליץ בחום על המקום.' },
      { title: 'מקום שטוב לשהות בו בירושלים', text: 'המיקום, המבנה והשירות יוצרים אווירה של מקום שנעים לשהות בו במהלך חופשה בירושלים. המלון בסביבה מיוחדת, במרחק הליכה לעיר העתיקה ולסביבותיה.' }
    ],

    history: {
      title: 'היסטוריית הבית והשכונה',
      paragraphs: [
        'המלון שוכן בשכונת בקעה, מדרום למושבה הגרמנית. ראשיתה של השכונה בסוף המאה ה־19, סמוך לתחנת הרכבת של ירושלים; עם השנים קמו בה בתים מרווחים בני שתי קומות, שהפכו אותה לאחת השכונות היפות במערב העיר.',
        'בתי בקעה הם מזיגה של מזרח ומערב: כניסות נאות ומטופחות, מרפסות גדולות ומעוצבות, חדרים גדולים ופרוזדורים.',
        'הבית נבנה בשנות ה־20 של המאה הקודמת בידי משפחת אבו־ראטס מבית ג׳אלה, בסגנון עות׳מאני־ערבי, מאבן דולומיט אדומה, חזקה ויקרה — „מיזי אחמר” — האבן שממנה נבנו רוב בתי השכונה.',
        'לאורך השנים שימש הבניין כבית הבראה, בית ספר, בית יתומים, הוסטל ואולפנה לנערות. בסוף שנות ה־90 נמכר במכרז לידיים פרטיות, ומשנת 2000 הוא פועל כמלונית „בית קטן בבקעה”.',
        'בשנות ה־90 הכינה עיריית ירושלים תוכנית לשימור אופייה ההיסטורי של השכונה, והבניין עצמו הוכרז „לשימור מחמיר” על ידי המועצה לשימור אתרים.'
      ],
      timeline: [
        { year: 'סוף המאה ה־19', text: 'ראשית שכונת בקעה, סמוך לתחנת הרכבת' },
        { year: 'שנות ה־20', text: 'הבית נבנה מאבן „מיזי אחמר” אדומה' },
        { year: 'שנות ה־90', text: 'הבניין מוכרז „לשימור מחמיר”' },
        { year: '2000', text: 'נפתחת המלונית „בית קטן בבקעה”' }
      ],
      /* צילום 1948 (גדר תיל ושלט המושל הצבאי) וצילום החפירה של האבן נשמרו ב־img/ אך לא מוצגים — לא מתאימים לאתר הזמנות */
      images: ['history-railway.jpg', 'exterior-painting.jpg', 'facade-arches.jpg', 'exterior.jpg']
    },

    location: {
      title: 'מיקום מעולה בתוך ירושלים',
      text: 'המלון נמצא בשכונת בקעה הציורית, סמוך לדרך בית לחם ולבתי הקפה והמסעדות השכונתיות שלה. אוטובוסים זמינים מאפשרים להגיע בקלות, תוך דקות, לכל אתרי התיירות החשובים בעיר.',
      nearby: [
        { place: 'דרך בית לחם', detail: 'בתי קפה ומסעדות שכונתיות', time: 'ממש מעבר לפינה' },
        { place: 'טיילת שרובר', detail: 'הנוף היפה ביותר בירושלים', time: '5 דקות הליכה' },
        { place: 'מתחם התחנה הראשונה', detail: 'בילוי, אוכל ותרבות', time: '10 דקות הליכה' },
        { place: 'המושבה הגרמנית', detail: 'סופרמרקט, מסעדות ובתי קפה', time: '10 דקות הליכה' }
      ],
      directions: [
        { mode: 'מנתב״ג', text: 'במונית — המוניות ממתינות ביציאה מהטרמינל. או ברכבת לתחנת ירושלים–יצחק נבון, ומשם באוטובוס 72, 74 או 75 או במונית. הרכבת אינה פועלת בשעות הלילה ובסופי שבוע — כדאי לבדוק מראש.' },
        { mode: 'ברכב', text: 'רחוב יהודה 1, פינת דרך חברון 80. חניון חינם ברחוב מרדכי היהודי 2 (על בסיס מקום פנוי), וחניה חופשית ברחובות הסמוכים לצד מדרכות אפורות.' },
        { mode: 'באוטובוס', text: 'מהתחנה המרכזית — קווים 72, 74 או 75, ירידה בתחנת „דרך חברון / ינובסקי”.' }
      ]
    },

    gallery: ['exterior.jpg', 'facade-arches.jpg', 'double-arched.jpg', 'garden-umbrellas.jpg', 'lounge.jpg', 'double-1.jpg', 'breakfast.jpg', 'garden-gazebo.jpg', 'family-1.jpg', 'corridor.jpg', 'patio-deck.jpg', 'reception.jpg', 'balcony.jpg', 'garden-path.jpg', 'coffee.jpg', 'room-balcony-wide.jpg'],

    imageAlt: {
      'exterior.jpg': 'חזית הבית מאבן ירושלמית, עם שורת קשתות',
      'exterior-painting.jpg': 'ציור בצבעי מים של הבית בבקעה',
      'exterior-old.jpg': 'הבית בבקעה בין העצים',
      'facade-arches.jpg': 'חלונות מקושתים ועמודים בחזית הבית',
      'garden-umbrellas.jpg': 'הגינה הפורחת עם שמשיות ופינות ישיבה',
      'garden-path.jpg': 'שביל בגינת המלון',
      'garden-guest.jpg': 'אורח קורא בגינה',
      'garden-couple.jpg': 'זוג בפינת ישיבה בגן',
      'garden-seating.jpg': 'פינת ישיבה מוצלת בגן',
      'garden-gazebo.jpg': 'גזיבו בגינת המלון',
      'patio-deck.jpg': 'הפטיו המוצל שבכניסה',
      'hall.jpg': 'אולם המלון',
      'hall-lecture.jpg': 'הרצאה באולם המלון',
      'lounge.jpg': 'טרקלין מואר עם חלונות מקושתים',
      'corridor.jpg': 'מסדרון עם קשתות וכורסאות אדומות',
      'reception.jpg': 'דלפק הקבלה',
      'breakfast.jpg': 'ארוחת בוקר בפינה המקורה',
      'dining-room.jpg': 'חדר האוכל',
      'coffee.jpg': 'קפה ומאפה על שולחן בגן',
      'wine.jpg': 'בקבוק יין לשבת',
      'flowers.jpg': 'אמנונים פורחים בגן',
      'sitting-corner.jpg': 'פינת ישיבה עם כורסאות אדומות',
      'balcony.jpg': 'מרפסת עם פינת ישיבה',
      'double-arched.jpg': 'חדר זוגי עם חלונות מקושתים',
      'double-1.jpg': 'חדר זוגי עם תקרה גבוהה',
      'double-2.jpg': 'חדר זוגי מואר',
      'double-3.jpg': 'חדר עם חלונות מקושתים',
      'double-4.jpg': 'חדר זוגי בעיצוב כפרי חמים',
      'twin.jpg': 'חדר עם מיטות נפרדות',
      'bath-tub.jpg': 'חדר רחצה עם אמבטיה',
      'bath-shower.jpg': 'חדר רחצה עם מקלחון',
      'bath-shower-2.jpg': 'חדר רחצה',
      'bath-amenities.jpg': 'מוצרי טיפוח בחדר הרחצה',
      'single-1.jpg': 'חדר יחיד',
      'family-1.jpg': 'יחידה משפחתית — חדר הילדים',
      'family-2.jpg': 'יחידה משפחתית',
      'family-3.jpg': 'יחידה משפחתית — חדר ההורים',
      'economy-double.jpg': 'חדר מוזל זוגי',
      'economy-single.jpg': 'חדר מוזל ליחיד',
      'economy-bath.jpg': 'חדר רחצה בחדר מוזל',
      'room-balcony-wide.jpg': 'חדר עם יציאה למרפסת',
      'room-classic.jpg': 'חדר בעיצוב קלאסי',
      'history-baka-1948.jpg': 'שכונת בקעה בעבר',
      'history-railway.jpg': 'תחנת הרכבת הישנה של ירושלים',
      'history-red-stone.jpg': 'אבן „מיזי אחמר” האדומה'
    },

    priceNote: 'מחיר ללילה לדוגמה (נובמבר 2026), כולל ארוחת בוקר ומע״מ. המחיר הסופי נקבע לפי התאריכים במנוע ההזמנות.'
  };

  /* ---------- תמונות ---------- */
  BAKA.img = (file) => imgBase + file;
  BAKA.alt = (file) => BAKA.imageAlt[file] || BAKA.name;
  BAKA.room = (id) => BAKA.rooms.find((r) => r.id === id);

  /* ---------- תאריכים ---------- */
  const DAY = 864e5;
  BAKA.today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  BAKA.addDays = (date, n) => { const d = new Date(date); d.setDate(d.getDate() + n); d.setHours(0, 0, 0, 0); return d; };
  BAKA.toISO = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  BAKA.fromISO = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  BAKA.sameDay = (a, b) => !!a && !!b && a.getTime() === b.getTime();
  BAKA.nights = (checkin, checkout) => (checkin && checkout) ? Math.max(0, Math.round((checkout - checkin) / DAY)) : 0;
  BAKA.monthNames = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
  BAKA.dayNames = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  BAKA.dayLetters = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'];
  /* "יום ב׳, 16 בנובמבר" */
  BAKA.fmtDate = (d, withDay = true) => d ? (withDay ? 'יום ' + BAKA.dayLetters[d.getDay()] + ', ' : '') + d.getDate() + ' ב' + BAKA.monthNames[d.getMonth()] : '';
  /* "16.11.26" */
  BAKA.fmtShort = (d) => d ? d.getDate() + '.' + (d.getMonth() + 1) + '.' + String(d.getFullYear()).slice(2) : '';
  BAKA.nightsLabel = (n) => n === 1 ? 'לילה אחד' : n === 2 ? 'שני לילות' : n + ' לילות';

  /* מטריצת חודש: מערך שבועות (ראשון–שבת), כל תא Date או null */
  BAKA.monthMatrix = (year, month) => {
    const first = new Date(year, month, 1);
    const days = new Date(year, month + 1, 0).getDate();
    const cells = Array(first.getDay()).fill(null);
    for (let d = 1; d <= days; d++) cells.push(new Date(year, month, d));
    while (cells.length % 7) cells.push(null);
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  };

  /* ---------- אורחים וחדרים ---------- */
  BAKA.guestsLabel = ({ adults = 2, children = 0, babies = 0 }) => {
    const parts = [adults === 1 ? 'מבוגר אחד' : adults + ' מבוגרים'];
    if (children) parts.push(children === 1 ? 'ילד אחד' : children + ' ילדים');
    if (babies) parts.push(babies === 1 ? 'תינוק אחד' : babies + ' תינוקות');
    return parts.join(', ');
  };
  /* חדרים שמתאימים להרכב (תינוקות לא נספרים בתפוסה) */
  BAKA.roomsFor = ({ adults = 2, children = 0 }) => BAKA.rooms.filter((r) => r.maxGuests >= adults + children);
  /* מחיר ללילה (הזמנה ישירה) לפי סוג חדר ומספר אורחים */
  BAKA.nightlyPrice = (roomId, guests = 2, direct = true) => {
    const r = BAKA.room(roomId);
    if (!r) return 0;
    if (r.id === 'economy' && guests > 1) return direct ? r.priceDoubleDirect : r.priceDouble;
    return direct ? r.priceDirect : r.price;
  };
  /* כמו במנוע: 5% הנחת אתר מחושבת על הסכום הכולל */
  BAKA.estimate = (roomId, nights, guests = 2) => Math.round(BAKA.nightlyPrice(roomId, guests, false) * nights * 0.95);
  BAKA.fmtPrice = (n) => '₪' + Number(n).toLocaleString('he-IL');

  /* ---------- הזמנה ---------- */
  /* מנוע ההזמנות האמיתי של המלון (EZGO) — אותם פרמטרים שהאתר הקיים שולח */
  BAKA.ezgoUrl = ({ checkin, checkout, nights, adults = 2, children = 0, babies = 0 }) => {
    const n = nights || BAKA.nights(checkin, checkout) || 1;
    const p = new URLSearchParams({
      iItemId: BAKA.ezgoItemId, Lng: 'he', Cur: '0',
      sDate: BAKA.toISO(checkin || BAKA.today()), n: String(n),
      ADT: String(adults), CHL: String(children), BYB: String(babies)
    });
    return 'https://secure.ezgo.co.il/Main/OnLineSearchFrame.aspx?' + p.toString();
  };
  BAKA.bookingMessage = ({ roomId, checkin, checkout, adults = 2, children = 0, babies = 0, name = '', notes = '' }) => {
    const r = BAKA.room(roomId);
    const lines = ['שלום, אשמח להזמין חדר ב' + BAKA.name + '.'];
    if (checkin && checkout) lines.push('תאריכים: ' + BAKA.fmtShort(checkin) + ' – ' + BAKA.fmtShort(checkout) + ' (' + BAKA.nightsLabel(BAKA.nights(checkin, checkout)) + ')');
    lines.push('אורחים: ' + BAKA.guestsLabel({ adults, children, babies }));
    if (r) lines.push('סוג חדר: ' + r.name);
    if (name) lines.push('שם: ' + name);
    if (notes) lines.push('בקשות: ' + notes);
    return lines.join('\n');
  };
  BAKA.whatsappUrl = (text) => 'https://wa.me/' + BAKA.whatsappNumber + (text ? '?text=' + encodeURIComponent(text) : '');
  BAKA.mailtoUrl = (text) => 'mailto:' + BAKA.email + '?subject=' + encodeURIComponent('בקשת הזמנה — ' + BAKA.name) + '&body=' + encodeURIComponent(text || '');
  /* פתיחת קישור חיצוני דרך <a> אמיתי: בדף משותף (Artifact) window.open מחזיר null לרוב הצופים,
     וקישור רגיל נפתח בלשונית חדשה לכולם */
  BAKA.openExternal = (url) => {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.hidden = true;
    document.body.appendChild(a); a.click(); a.remove();
  };
  const nativeOpen = window.open.bind(window);
  window.open = (url, target, features) => {
    try {
      const u = new URL(String(url), location.href);
      if (/^https?:$/.test(u.protocol) && (!target || target === '_blank')) { BAKA.openExternal(u.href); return null; }
    } catch (e) { /* כתובת לא תקינה — נופלים להתנהגות הרגילה */ }
    return nativeOpen(url, target, features);
  };
  BAKA.openBooking = (opts) => BAKA.openExternal(BAKA.ezgoUrl(opts));

  /* ---------- אייקונים (SVG, קו דק, currentColor) ---------- */
  const ic = (d) => '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  BAKA.icons = {
    wifi: ic('<path d="M2 9a15 15 0 0 1 20 0"/><path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8" fill="currentColor"/>'),
    parking: ic('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>'),
    coffee: ic('<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3v3M12 3v3"/>'),
    shabbat: ic('<path d="M8 21V11M16 21V11"/><path d="M8 11c-1.2-1.4-1.2-3 0-4.5 1.2 1.5 1.2 3.1 0 4.5zM16 11c-1.2-1.4-1.2-3 0-4.5 1.2 1.5 1.2 3.1 0 4.5z"/><path d="M5 21h14"/>'),
    garden: ic('<path d="M12 21v-8"/><path d="M12 13c0-4 3-7 7-7 0 4-3 7-7 7z"/><path d="M12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z"/><path d="M6 21h12"/>'),
    nosmoking: ic('<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/><path d="M7 13h7M16 13h1"/>'),
    bed: ic('<path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3H10v8"/><path d="M3 14h18"/><circle cx="6.5" cy="11" r="1.6"/>'),
    guests: ic('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.6-3.4 2.8-5.5 5.5-5.5s4.9 2.1 5.5 5.5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.6c2.5-.4 4.5 1.4 5 4.4"/>'),
    calendar: ic('<rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
    phone: ic('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
    whatsapp: ic('<path d="M4 20l1.3-3.8A8 8 0 1 1 8 19z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z"/>'),
    mail: ic('<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6l8.5 7 8.5-7"/>'),
    pin: ic('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    arrowL: ic('<path d="M15 5l-7 7 7 7"/>'),
    arrowR: ic('<path d="M9 5l7 7-7 7"/>'),
    close: ic('<path d="M5 5l14 14M19 5L5 19"/>'),
    plus: ic('<path d="M12 5v14M5 12h14"/>'),
    minus: ic('<path d="M5 12h14"/>'),
    check: ic('<path d="M4 12.5l5 5L20 6.5"/>'),
    menu: ic('<path d="M3 7h18M3 12h18M3 17h18"/>'),
    star: ic('<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>')
  };

  window.BAKA = BAKA;
})();
