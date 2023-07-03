import { PageTitle } from '@/components/PageTitle';
import { Phone } from '@/components/Phone';
import { UserButton, currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();

  return (
    <Phone padding>
      <div className="rounded-4 flex flex-col gap-0">
        <h2 className="text-sm">Hello, {user?.firstName}</h2>
        <div className="flex justify-between items-center gap-6">
          <PageTitle>
            Your <div>Projects (4)</div>
          </PageTitle>
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  height: 50,
                  width: 50
                },
                card: {
                  maxWidth: 245,
                  width: '100%'
                }
              }
            }}
          />
        </div>
      </div>
    </Phone>
  );
}
