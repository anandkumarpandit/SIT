# How to Add Your Prospectus PDF

## Instructions

1. **Create or obtain your prospectus PDF file**
   - You can create it using any tool (Microsoft Word, Canva, Adobe InDesign, Google Docs, etc.)
   - Make sure it's a PDF format

2. **Add the file to this folder**
   - Place your PDF file in: `/Users/anandkumar/Desktop/SIT/client/public/`
   - Name it: `STI-Prospectus-2024-2025.pdf`

3. **That's it!**
   - The download button on your website will automatically serve this PDF
   - No code changes required

## Custom Filename (Optional)

If you want to use a different filename:

1. Place your PDF in the `public` folder with your chosen name
2. Update the filename in `src/components/AdmissionCTA.jsx` (lines 15-16):

```javascript
link.href = '/your-custom-filename.pdf';
link.download = 'your-custom-filename.pdf';
```

## Current Setup

- Download button location: Admission CTA section on homepage
- Button text: "📄 Download Prospectus"
- Expected file path: `/public/STI-Prospectus-2024-2025.pdf`

## Updating the Prospectus

To update the prospectus in the future:
1. Simply replace the PDF file in the `public` folder
2. Keep the same filename
3. The updated PDF will be served immediately (no restart needed)
