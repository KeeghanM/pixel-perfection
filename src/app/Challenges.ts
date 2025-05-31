export type Challenge = {
  id: number
  name: string
  HTML: string
  generalCSS: string
  description: string
  correctCSS: string
  wrongCSS: string
}

export const Challenges: Challenge[] = [
  {
    id: 0,
    name: 'Tutorial Challenge',
    description:
      "Welcome to the tutorial! All you need to do is correct the below invalid CSS to make the 'wrong' design look like the 'correct' design.",
    HTML: `<h1>
  <span>Hello,</span> world.
</h1>`,
    generalCSS: '',
    correctCSS: `h1 {
            color: rgb(100,100,255);
        }

        h1 span {
            color: rgb(80,30,155);
        }`,
    wrongCSS: `h1 {
  color: rgb(100,100,255);
}`,
  },
  {
    id: 1,
    name: 'Modern Input Magic',
    description:
      'A sleek name input with subtle shadows and smooth focus states. The details in modern inputs can make or break the user experience.',
    HTML: `<div class="input-container">
  <input type="text" placeholder="Enter your name here" />
  <button type="submit">Submit</button>
</div>`,
    generalCSS: '',
    correctCSS: `.input-container {
  display: flex;
  align-items: center;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  overflow: hidden;
}
.input-container:focus-within {
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 0 0 3px rgba(59, 130, 246, 0.1);
}
.input-container input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: #1f2937;
  flex: 1;
  padding: 0 1rem;
}
.input-container input::placeholder {
  color: #9ca3af;
}
.input-container button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}
.input-container button:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateX(2px);
}`,
    wrongCSS: `.input-container {
  display: flex;
  align-items: center;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  overflow: hidden;
}
.input-container:focus-within {
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 0 0 3px rgba(59, 130, 246, 0.1);
}
.input-container input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: #1f2937;
  flex: 1;
  padding: 1.25rem 1.5rem;
}
.input-container input::placeholder {
  color: #9ca3af;
}
.input-container button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 1.25rem 1.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}
.input-container button:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateX(2px);
}`,
  },
  {
    id: 2,
    name: 'Notification Pop',
    description:
      'Modern notifications need to grab attention without being annoying. Fix this notification component to match the correct design.',
    HTML: `<div class="notification">
  <div class="icon">✓</div>
  <div class="content">
    <h3>Success!</h3>
    <p>Your changes have been saved.</p>
  </div>
  <button class="close">×</button>
</div>`,
    generalCSS: '',
    correctCSS: `.notification {
  display: flex;
  align-items: center;
  background: white;
  border-left: 4px solid #22c55e;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 400px;
  gap: 1rem;
}
.notification .icon {
  background: #22c55e;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.notification .content {
  flex: 1;
}
.notification .content h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: #1f2937;
}
.notification .content p {
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
}
.notification .close {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
}`,
    wrongCSS: `.notification {
  display: flex;
  align-items: center;
  background: white;
  border-left: 2px solid #22c55e;
  border-radius: 4px;
  padding: 0.75rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 400px;
  gap: 0.75rem;
}
.notification .icon {
  background: #22c55e;
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.notification .content {
  flex: 1;
}
.notification .content h3 {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  color: #1f2937;
}
.notification .content p {
  margin: 0;
  font-size: 0.75rem;
  color: #6b7280;
}
.notification .close {
  background: none;
  border: none;
  font-size: 1rem;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
}`,
  },
  {
    id: 3,
    name: 'Tag Team',
    description:
      'Tags are everywhere in modern UIs. This one looks almost right, but the spacing is just... off. Can you spot the difference?',
    HTML: `<div class="tag-container">
  <span class="tag">React</span>
  <span class="tag">TypeScript</span>
  <span class="tag">CSS</span>
</div>`,
    generalCSS: '',
    correctCSS: `.tag-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  display: inline-flex;
  align-items: center;
}`,
    wrongCSS: `.tag-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  display: inline-flex;
  align-items: center;
}`,
  },
  {
    id: 4,
    name: 'Profile Perfect',
    description:
      'A user profile card that needs some love. The avatar and layout need to be just right to look professional.',
    HTML: `<div class="profile-card">
  <div class="avatar">
    <img src="https://mighty.tools/mockmind-api/content/human/111.jpg" alt="AI Generated User Avatar" />
  </div>
  <div class="info">
    <h3>Sarah Chen</h3>
    <p>Senior Frontend Developer</p>
    <span class="status">Online</span>
  </div>
</div>`,
    generalCSS: '',
    correctCSS: `.profile-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  max-width: 320px;
  gap: 1rem;
}
.avatar {
  position: relative;
}
.avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.info {
  flex: 1;
}
.info h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
}
.info p {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: #6b7280;
}
.info .status {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  color: #059669;
  font-weight: 500;
}
.info .status::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  margin-right: 0.5rem;
}`,
    wrongCSS: `.profile-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  max-width: 320px;
  gap: 0.75rem;
}
.avatar {
  position: relative;
}
.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.info {
  flex: 1;
}
.info h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
}
.info p {
  margin: 0 0 0.5rem 0;
  font-size: 0.75rem;
  color: #6b7280;
}
.info .status {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  color: #059669;
  font-weight: 500;
}
.info .status::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 0.25rem;
}`,
  },
  {
    id: 5,
    name: 'Progress Bar Blues',
    description:
      'A progress bar that should feel smooth and satisfying. The colors need to be just right.',
    HTML: `<div class="progress-container">
  <div class="progress-label">
    <span>Uploading...</span>
    <span>68%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
</div>`,
    generalCSS: '',
    correctCSS: `.progress-container {
  width: 100%;
  max-width: 300px;
}
.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #666666;
}
.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
}
.progress-fill {
  height: 100%;
  width: 68%;
  background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 9999px;
  transition: width 0.3s ease-in-out;
  position: relative;
}`,
    wrongCSS: `.progress-container {
  width: 100%;
  max-width: 300px;
}
.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
}
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.progress-fill {
  height: 100%;
  width: 68%;
  background: #3b82f6;
  border-radius: 4px;
  transition: width 0.5s linear;
  position: relative;
}`,
  },
  {
    id: 6,
    name: 'Article Card Perfection',
    description:
      'A modern article card with beautiful gradients and smooth hover effects. The subtle details make all the difference in professional designs.',
    HTML: `<article class="card">
  <div class="card-content">
    <div class="card-header">
      <span class="category">Technology</span>
      <h2>The Future of Web Design</h2>
    </div>
    <p class="card-description">
      Exploring the latest trends in modern web development, from cutting-edge CSS techniques to revolutionary user experience patterns that are shaping the digital landscape.
    </p>
    <div class="card-footer">
      <div class="author">
        <span class="author-name">Sarah Chen</span>
        <span class="read-time">5 min read</span>
      </div>
      <button class="read-more">Read Article</button>
    </div>
  </div>
</article>`,
    generalCSS: `body {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 2rem;
    }`,
    correctCSS: `.card {
  background: white;
  border-radius: 20px;
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  max-width: 400px;
  position: relative;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.card-content {
  padding: 1.5rem;
}
.card-header {
  margin-bottom: 1rem;
}
.category {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}
.card-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.3;
}
.card-description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-size: 0.875rem;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.author-name {
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}
.read-time {
  font-size: 0.75rem;
  color: #9ca3af;
}
.read-more {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.read-more:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateY(-1px);
}`,
    wrongCSS: `.card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  overflow: hidden;
  max-width: 400px;
  position: relative;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.card-content {
  padding: 1.25rem;
}
.card-header {
  margin-bottom: 1rem;
}
.category {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}
.card-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.3;
}
.card-description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
  font-size: 0.8125rem;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.author-name {
  font-weight: 600;
  color: #374151;
  font-size: 0.8125rem;
}
.read-time {
  font-size: 0.75rem;
  color: #9ca3af;
}
.read-more {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all 0.15s ease;
}
.read-more:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}`,
  },
  {
    id: 7,
    name: 'The Spacing Trap',
    description:
      'This pricing card looks good at first glance, but something about the spacing feels... wrong. A true test of your eye for detail!',
    HTML: `<div class="pricing-card">
  <div class="badge">Popular</div>
  <h2>Pro Plan</h2>
  <div class="price">
    <span class="currency">$</span>
    <span class="amount">29</span>
    <span class="period">/month</span>
  </div>
  <ul>
    <li>Unlimited projects</li>
    <li>Priority support</li>
    <li>Advanced analytics</li>
  </ul>
  <button>Get Started</button>
</div>`,
    generalCSS: `body {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }`,
    correctCSS: `.pricing-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  max-width: 280px;
  position: relative;
}
.badge {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}
.pricing-card h2 {
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #1f2937;
}
.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 1.5rem 0;
}
.price .currency {
  font-size: 1.25rem;
  color: #6b7280;
  margin-right: 0.25rem;
}
.price .amount {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
}
.price .period {
  font-size: 1rem;
  color: #6b7280;
  margin-left: 0.25rem;
}
.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}
.pricing-card li {
  padding: 0.5rem 0;
  color: #6b7280;
}
.pricing-card button {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1rem;
}`,
    wrongCSS: `.pricing-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  max-width: 280px;
  position: relative;
}
.badge {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}
.pricing-card h2 {
  margin: 1.25rem 0;
  font-size: 1.5rem;
  color: #1f2937;
}
.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 1.75rem 0;
}
.price .currency {
  font-size: 1.25rem;
  color: #6b7280;
  margin-right: 0.125rem;
}
.price .amount {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
}
.price .period {
  font-size: 1rem;
  color: #6b7280;
  margin-left: 0.125rem;
}
.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 1.75rem 0;
}
.pricing-card li {
  padding: 0.375rem 0;
  color: #6b7280;
}
.pricing-card button {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1.25rem;
}`,
  },
]
