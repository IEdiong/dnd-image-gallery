import DndComponent from '@/components/dnd';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = getServerSession(options);

  if (!session) {
    redirect('/signin?callbackUrl=/');
  } else {
    return <DndComponent />;
  }
}
