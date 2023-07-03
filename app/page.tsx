import { Phone } from '@/components/Phone';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <Phone padding>
      <div className="rounded-4 flex flex-col gap-2">
        <h1>Hello, Nick</h1>
        <div className="text-2xl font-bold flex justify-between items-center gap-6">
          <h2>
            Your <div>Projects (4)</div>
          </h2>
          <UserButton />
        </div>
      </div>
    </Phone>
  );
}
