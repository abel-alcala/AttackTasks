## TaskO Phishing Attack Demo

This cybersecurity project demonstrates how phishing attacks exploit user trust by simulating a realistic phishing attack targeting TaskO (a previously built to-do app). The attack includes:

- **Phishing email** that announces fake "Google OAuth integration"
- **Cloned login page** hosted at `tiktasks.vercel.app`
- **Fake Google sign-in popup** that captures user credentials
- **Backend server** that stores stolen credentials in MongoDB
- **Error redirect** that sends users back to the real site

### The Attack Flow
1. User receives convincing email about new Google login feature from bad actor
2. Clicks link to a fake TaskO site (URL is slightly different from original)
3. User tries to sign in with Google - popup & authO process looks identical to real Google auth process
4. Credentials get quietly stored in attacker's database
5. Fake error appears and discretely redirects user to real TaskO site
6. Bad Actor obtains user credentials while user thinks there was just a technical glitch

### Tech Stack
- **Frontend**: React, CSS (cloned from original TaskO UI)
- **Backend**: Express.js, MongoDB
- **Email**: Python SMTP script
- **Hosting**: Vercel (frontend), Render (backend)

---

*Built by Abel Alcala for Cal Poly CSC 321 - Winter 2025*