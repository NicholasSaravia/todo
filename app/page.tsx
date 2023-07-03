import { PageTitle } from '@/components/PageTitle';
import { Phone } from '@/components/Phone';
import { Projects } from '@/components/page-components/home/Projects';
import { UserButton, currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();

  return (
    <Phone padding>
      <section id="header-section" className="flex flex-col gap-0 mb-6">
        <h2 className="text-sm">Hello, {user?.firstName}</h2>
        <div className="flex justify-between items-center">
          <PageTitle>
            Your{' '}
            <div>
              Projects <span className="font-normal">(4)</span>
            </div>
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
      </section>
      <Projects />
    </Phone>
  );
}
