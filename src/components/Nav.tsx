import { BasicLink } from '@web/components/ui/BasicLink';

export const Nav: React.FC = () => {
  return (
    <nav className="py-4">
      <BasicLink color="orange" href="/">
        <span className="font-semibold text-2xl md:text-3xl hover:tracking-wider transition-all">JRS.</span>
      </BasicLink>
    </nav>
  );
};
