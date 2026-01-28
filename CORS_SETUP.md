# 🔧 CRITICAL: Firebase CORS Configuration Required

## ⚠️ YOU MUST RUN THIS COMMAND TO FIX CORS ERRORS

The CORS error you're seeing is because Firebase Storage bucket doesn't allow requests from localhost:3000.

### Step 1: Install Google Cloud SDK

**Windows:**
Download and install from: https://cloud.google.com/sdk/docs/install

**Mac/Linux:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### Step 2: Authenticate

```bash
gcloud auth login
```

### Step 3: Set Your Project

```bash
gcloud config set project ideathon-8d4c1
```

### Step 4: Apply CORS Configuration

```bash
gsutil cors set cors.json gs://ideathon-8d4c1.appspot.com
```

### Step 5: Verify CORS Configuration

```bash
gsutil cors get gs://ideathon-8d4c1.appspot.com
```

You should see output showing the CORS configuration is applied.

---

## 🔥 Alternative: Deploy Storage Rules via Firebase Console

1. Go to: https://console.firebase.google.com/project/ideathon-8d4c1/storage/rules
2. Copy the contents of `storage.rules` file
3. Paste into the Firebase Console
4. Click "Publish"

---

## 🔥 Deploy Firestore Rules

1. Go to: https://console.firebase.google.com/project/ideathon-8d4c1/firestore/rules
2. Copy the contents of `firestore.rules` file
3. Paste into the Firebase Console
4. Click "Publish"

---

## ✅ After Applying CORS

1. Restart your Next.js dev server: `npm run dev`
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try uploading again
4. Check console - CORS errors should be gone

---

## 🎯 Expected Result

After applying CORS configuration:
- ✅ No CORS preflight errors
- ✅ Upload completes in 1-3 seconds
- ✅ File appears in Firebase Storage under `pitchdecks/` folder
- ✅ Document created in Firestore `registrations` collection
- ✅ Form resets and returns to Step 1
- ✅ Success alert shows immediately

---

## 🔍 Troubleshooting

If CORS errors persist:

1. **Check bucket name:** Must be `ideathon-8d4c1.appspot.com`
2. **Check origin:** Must include `http://localhost:3000`
3. **Wait 5 minutes:** CORS changes can take time to propagate
4. **Clear browser cache:** Hard refresh (Ctrl+Shift+R)
5. **Check Firebase Console:** Verify Storage rules are published

---

## 📝 Production Deployment

Before deploying to production:

1. Update `cors.json` to include your production domain
2. Update Storage rules to require authentication
3. Update Firestore rules to require authentication
4. Re-apply CORS configuration with production domain
5. Deploy updated rules to Firebase

Example production CORS:
```json
[
  {
    "origin": ["https://your-production-domain.com"],
    "method": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    "responseHeader": ["Content-Type"],
    "maxAgeSeconds": 3600
  }
]
```
