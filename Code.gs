// Google Apps Script - מעלה קבצים לדרייב ומצרף כל מי שנכנס לתיקייה (או לקבוצה)
const API_KEY = 'FIREBASE_WEB_API_KEY';     // אותו apiKey מ-firebaseConfig
const ADMIN_EMAIL = 'you@gmail.com';        // המייל שלך
const FOLDER_ID = 'DRIVE_FOLDER_ID';        // המזהה שבסוף הקישור של התיקייה בדרייב
const GROUP_EMAIL = '';                     // אופציונלי, Google Workspace בלבד, למשל news@yourdomain.com

function doPost(e) {
  try {
    const req = JSON.parse(e.postData.contents);
    const email = verify_(req.idToken);
    if (req.action === 'join') return json_(join_(email));
    if (req.action === 'upload') {
      if (email !== ADMIN_EMAIL.toLowerCase()) throw new Error('forbidden');
      return json_(upload_(req));
    }
    throw new Error('bad action');
  } catch (err) {
    return json_({ok: false, error: String(err)});
  }
}

function verify_(idToken) {
  const r = UrlFetchApp.fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + API_KEY, {
    method: 'post', contentType: 'application/json', payload: JSON.stringify({idToken: idToken}), muteHttpExceptions: true
  });
  if (r.getResponseCode() !== 200) throw new Error('auth failed');
  const u = JSON.parse(r.getContentText()).users[0];
  if (!u || !u.email || !u.emailVerified) throw new Error('email not verified');
  return u.email.toLowerCase();
}

function join_(email) {
  if (GROUP_EMAIL) {
    const g = GroupsApp.getGroupByEmail(GROUP_EMAIL);
    if (!g.hasUser(email)) g.addUser(email);
    return {ok: true, via: 'group'};
  }
  const folder = DriveApp.getFolderById(FOLDER_ID);
  if (folder.getOwner() && folder.getOwner().getEmail().toLowerCase() === email) return {ok: true};
  const has = folder.getViewers().concat(folder.getEditors()).some(function (u) { return u.getEmail().toLowerCase() === email; });
  if (!has) folder.addViewer(email);
  return {ok: true, via: 'folder'};
}

function upload_(req) {
  const blob = Utilities.newBlob(Utilities.base64Decode(req.data), req.mime, req.name);
  const f = DriveApp.getFolderById(FOLDER_ID).createFile(blob);
  return {ok: true, id: f.getId()};
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
