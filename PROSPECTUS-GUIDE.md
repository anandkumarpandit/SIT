# 📄 How to Add Your Prospectus PDF

## Quick Guide

### Step 1: Prepare Your PDF
Create your prospectus using any tool:
- Microsoft Word/PowerPoint → Save as PDF
- Canva → Download as PDF
- Google Docs → File → Download → PDF
- Adobe InDesign/Acrobat → Export as PDF

### Step 2: Add to Project
1. **Navigate to:** `/Users/anandkumar/Desktop/SIT/client/public/`
2. **Copy your PDF file** into this folder
3. **Rename it to:** `STI-Prospectus-2024-2025.pdf`

### Step 3: Done! 🎉
The download button will automatically work with your PDF.

---

## Alternative: Use Custom Filename

If you prefer a different filename:

1. **Place your PDF** in `/Users/anandkumar/Desktop/SIT/client/public/` with any name

2. **Update the code** in `src/components/AdmissionCTA.jsx`:

Find lines 15-16 and change:
```javascript
link.href = '/your-filename.pdf';      // Your PDF filename
link.download = 'your-filename.pdf';   // Same filename
```

---

## Testing

After adding your PDF:

1. **Open the website:** http://localhost:5173
2. **Scroll to** the Admission section
3. **Click** "📄 Download Prospectus" button
4. **Verify** your PDF downloads

---

## Updating Later

To change the prospectus:
1. Simply replace the PDF file in the `public` folder
2. Keep the same filename
3. Changes take effect immediately (no restart needed)

---

## Current Setup

✅ Download button configured and ready
✅ Code expects: `/public/STI-Prospectus-2024-2025.pdf`
✅ No additional setup required

**Just add your PDF and you're done!**
