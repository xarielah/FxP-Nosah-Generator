import moment from 'moment';

export default function getBBCode(forum, weeklyUser, weeklyThread) {
    const medalImage = 'https://images.weserv.nl/?url=i.imgur.com/ThPiUoI.png';
    const winnerColor = '#daa520'; // if there is a single winner - this will be the font-color.
    const grayColor = '#696969';
    const nowDate = moment().format('DD/MM/YY');

    return `[FONT=almoni-dl][CENTER][IMG]${forum.logo}[/IMG]
[SIZE=5]
[COLOR=#0099ff]אתגר שבועי:[/COLOR][/SIZE][COLOR=#0099ff]
[B][SIZE=6]משקיען השבוע ואשכול השבוע[/SIZE][/B][/COLOR]
[SIZE=2]פורום [B]${forum.name}[/B][/SIZE]

[SIZE=3]מידי שבוע הנהלת הפורום דואגת לפרגן למשתמשי הפורום שהנוכחות שלהם במהלך השבוע הייתה משמעותית בפורום.[/SIZE]
[SIZE=3]מה זה בעצם אומר על הזוכים? - הראו נוכחות באשכולות, ענו תשובות מושקעות, תרמו מהידע ומזמנם, פרסמו אשכולות רלוונטים ועוד...[/SIZE]

[SIZE=3]כמו כן גם שמירת על [/SIZE][U]חוקי הפורום[/U] [SIZE=3]זה תנאי הכרחי לקבלת הפרס ובעצם הזוכה באשכול השבוע יזכה ב[/SIZE][SIZE=4][B]לא פחות[/B][/SIZE][SIZE=3] מ[/SIZE][U][COLOR=#66ccff][SIZE=4][B]7 ימי ווינר[/B][/SIZE][/COLOR][/U][SIZE=3]![/SIZE]


[U][SIZE=4][B]מהי דרגת ה-[COLOR=#66ccff]Winner[/COLOR]?[/B][/SIZE][/U]

[B]דרגת הווינר כוללת:[/B]
[SIZE=3]- גישה לפורום היכל התהילה, מכיל פעילויות רבות והזמנות לזכות בפרסים נוספים.[/SIZE]
[SIZE=3]- כינוי ותת-ניק מעוצבים (אל תדאגו, דאגנו לכם לעיצוב מעניין ;))[/SIZE]


[B]בלי להוסיף מילה נוספת הזוכים או הזוכות לתאריך [COLOR=#3399ff]${nowDate}[/COLOR] הם/הן...[/B]

[SIZE=3][IMG]https://images.weserv.nl/?url=i.imgur.com/49v3iQt.png[/IMG][/SIZE]
${
    weeklyUser.length
        ? `[IMG]${medalImage}[/IMG] [URL="${weeklyUser[1]}"][COLOR=${winnerColor}][SIZE=5][B]${weeklyUser[0]}[/B][/SIZE][/COLOR][/URL] [IMG]${medalImage}[/IMG]`
        : `[IMG]${medalImage}[/IMG] [COLOR=${
              weeklyUser.length || weeklyThread.length ? winnerColor : grayColor
          }][SIZE=5][B]לא נמצא משקיען[/B][/SIZE][/COLOR] [IMG]${medalImage}[/IMG]`
}

[SIZE=3][IMG]https://images.weserv.nl/?url=i.imgur.com/Rb4j5af.png[/IMG][/SIZE]
${
    weeklyThread.length
        ? `[IMG]${medalImage}[/IMG] [URL="${weeklyThread[1]}"][COLOR=${winnerColor}][SIZE=5][B]${weeklyThread[0]}[/B][/SIZE][/COLOR][/URL] [IMG]${medalImage}[/IMG]`
        : `[IMG]${medalImage}[/IMG] [COLOR=${
              weeklyUser.length || weeklyThread.length ? winnerColor : grayColor
          }][SIZE=5][B]לא נמצא אשכול[/B][/SIZE][/COLOR] [IMG]${medalImage}[/IMG]`
}

[HR][/HR]
${
    weeklyThread.length || weeklyUser.length
        ? `[SIZE=3]כל הכבוד לזוכים השבוע, במידה ולא זכיתם זה בסדר לחלוטין,[/SIZE]
[SIZE=3]שבוע נוסף לפנינו והזדמנויות רבות מונחות לפנינו בכל יום מחדש![/SIZE]`
        : `[SIZE=3]לצערינו השבוע אין זוכים, מאחלים לכולם בהצלחה לקראת שבוע הבא.[/SIZE]
[SIZE=3]שבוע נוסף לפנינו והזדמנויות רבות מונחות לפנינו בכל יום מחדש![/SIZE]`
}

[SIZE=3]בברכה,[/SIZE]
[SIZE=3]הנהלת פורום [B]${forum.name}[/B][/SIZE][SIZE=3]
[IMG]https://images.weserv.nl/?url=i.imgur.com/DPZXQRv.png[/IMG][/SIZE]

[URL="https://www.fxp.co.il/terms.php"][COLOR=#000000]תנאי שימוש[/COLOR][/URL][COLOR=#000000] | [/COLOR][URL="https://www.fxp.co.il/copyright.php"][COLOR=#000000]זכויות יוצרים[/COLOR][/URL][/CENTER]
[/FONT]`;
}
