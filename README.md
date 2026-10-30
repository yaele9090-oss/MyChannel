# הקמה (כ-30 דקות, בלי כרטיס אשראי)

1. https://console.firebase.google.com ← Add project (אפשר בלי Analytics). השאר בתוכנית Spark (חינם).
2. Build ← Authentication ← Get started ← Sign-in method ← Google ← Enable.
3. Build ← Firestore Database ← Create database (production mode, אזור europe-west).
4. Project settings ← Your apps ← כפתור Web (</>) ← העתק את firebaseConfig ל-index.html.
5. החלף `you@gmail.com` במייל שלך ב-2 מקומות: index.html ו-firestore.rules.
6. הדבק את firestore.rules ב-Firestore ← Rules ← Publish.
7. Build ← Hosting ← Get started, והעלה את index.html (או: npm i -g firebase-tools; firebase login; firebase init hosting; firebase deploy).
8. Authentication ← Settings ← Authorized domains: ודא שכתובת האתר מופיעה.
9. שלח את הקישור (xxx.web.app).

## סרטונים ותמונות (בלי Storage ובלי תשלום)
- דרייב: העלה לדרייב ← Share ← "Anyone with the link" (Viewer) ← העתק קישור ← הדבק בשדה הקישור ובחר סרטון/תמונה.
- יוטיוב: העלה כ-Unlisted והדבק את הקישור.
- שים לב: מי שיש לו קישור ישיר לקובץ בדרייב יכול לפתוח אותו גם בלי הערוץ.

## מה רואה מי
- כולם: מספר צפיות וסיכום אימוג'ים (בלי מיילים) והתגובה שלהם.
- רק אתה: "מי צפה והגיב" (מיילים ושעות) ולשונית "מי נכנס".
