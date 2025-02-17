```javascript
// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/'); // Navigate back to the home page
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back Home</button>
    </div>
  );
}
```