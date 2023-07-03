import { colors } from '@/lib/colors';
import { ProgressBar } from './ProgressBar';

export const ProjectCard = ({ i }: { i: number }) => {
  const generateRandomBackgroundColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const color = generateRandomBackgroundColor();

  return (
    <div
      className={`flex flex-col gap-8 pt-6 rounded-[2rem] text-white ${color}`}
    >
      <div className="flex flex-col gap-8 px-3">
        <h3 className="text-3xl font-bold">Holiday in Norway</h3>
        <div className="flex items-center transform -translate-x-4">
          <ProgressBar />
          <div className="transform -translate-x-2">
            <div className="text-lg font-bold">8/10</div>
            <div>tasks</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between m-1">
        <button className="border-white border rounded-full bg-white h-14 w-14 bg-opacity-10">
          ···
        </button>
        <button className="rounded-full bg-white h-14 w-14 bg-opacity-50">
          ➕
        </button>
      </div>
    </div>
  );
};
