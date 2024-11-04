# GitHub Repo Searcher
GitHub Repo Searcher is a modern web application developed for searching and exploring GitHub repositories. It is built using React, TypeScript, and Tailwind CSS.
![GitHub Repo Searcher Interface](./app-screenshot.png)
## 🚀 Features
- 🔍 Real-time search in GitHub repositories
- 🌓 Dark/Light theme support
- 🔐 User management with Firebase Authentication
- 📱 Responsive design
- 🏷️ Filtering based on categories and programming languages
- ⭐ View most popular repositories
- 🔄 Real-time updated results
## 🛠️ Technologies Used
- React 18
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Vite
- React Router
- Lucide Icons
## 📋 Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account
## ⚙️ Installation
1. Clone the repository:
```bash
git clone https://github.com/username/github-repo-searcher.git
cd github-repo-searcher
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Create your Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable Authentication service and activate Email/Password and Google sign-in methods
4. Create `.env` file:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```
5. Start the development server:
```bash
npm run dev
# or
yarn dev
```
## 🚀 Deployment
1. Build the project:
```bash
npm run build
# or
yarn build
```
2. Install Firebase CLI and login:
```bash
npm install -g firebase-tools
firebase login
```
3. Initialize your Firebase project:
```bash
firebase init
```
4. Deploy the application:
```bash
npm run firebase
# or
yarn firebase
```
## 📝 Usage
1. Log in or sign up to the application
2. Use the search bar to search GitHub repositories
3. Filter results using categories or programming languages
4. Click on cards to view repository details
## 🤝 Contributing
1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request
## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
## 👏 Acknowledgments
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Lucide Icons](https://lucide.dev/)
## 📧 Contact
Name Surname - [[palamut62](https://x.com/palamut62)](https://x.com/palamut62)
Project Link: [https://github.com/palamut62/github-repo-searcher](https://github.com/palamut62/github-repo-searcher)
