import { useRouter } from 'next/router';
import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <form
      className="flex flex-col items-center gap-y-5 md:w-5/12"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/results?search=${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="rounded-full border-2 w-full sm:w-128 h-12 px-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className="px-4 py-3 bg-gray-100 text-sm">
          Google Search
        </button>
        <button
          onClick={() => alert('FEATURE COMING SOON!')}
          className="px-4 py-3 bg-gray-100 text-sm"
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
