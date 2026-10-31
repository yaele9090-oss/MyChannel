# הקמה (בלי כרטיס אשראי)

## א. Firebase
1. console.firebase.google.com ← Add project (תוכנית Spark, חינם).
2. Authentication ← Sign-in method ← Google ← Enable.
3. Firestore Database ← Create database (production mode).
4. Project settings ← Your apps ← Web (</>) ← העתק את firebaseConfig ל-index.html.
5. החלף `you@gmail.com` ב-index.html, ב-firestore.rules וב-Code.gs.
6. הדבק את firestore.rules ב-Firestore ← Rules ← Publish.
7. מחק את storage.rules מהריפו (כבר לא בשימוש).

## ב. דרייב + Apps Script (העלאת קבצים וצירוף אוטומטי)
1. בדרייב צור תיקייה (השאר אותה פרטית). המזהה הוא החלק האחרון בקישור שלה.
2. script.google.com ← New project ← הדבק את Code.gs ← מלא API_KEY, ADMIN_EMAIL, FOLDER_ID.
3. Deploy ← New deployment ← Web app ← Execute as: Me ← Who has access: Anyone ← Deploy ← אשר הרשאות.
4. העתק את כתובת ה-Web app (נגמרת ב-/exec) ל-APPS_SCRIPT_URL ב-index.html.

כל מי שנכנס לערוץ מצורף אוטומטית כצופה בתיקייה. אפשר להעלות מהאתר קבצים עד 25MB, וגדולים יותר ידנית לתיקייה + הדבקת קישור.
קבוצה (אופציונלי, Google Workspace בלבד): שנה את GROUP_EMAIL ושתף את התיקייה עם הקבוצה. נדרש שמנהל ה-Workspace יאפשר חברים מחוץ לארגון.

## ג. Hosting
Hosting ← Get started והעלה את index.html (או firebase deploy). ב-Authentication ← Settings ← Authorized domains ודא שהכתובת מופיעה.
