import BaseTemplate from '../components/templates/base/BaseTemplate';
import { mockBaseTemplateProps } from '../components/templates/base/BaseTemplate.mocks';

const Home = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="pt-24 pb-20">
          <BaseTemplate {...mockBaseTemplateProps.base} />
        </div>
      </div>
    </main>
  );
};

export default Home;
