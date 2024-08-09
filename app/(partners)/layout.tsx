import PartnersNavBar from "./_components/PartnersNavBar";

const PartnersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PartnersNavBar />
      {children}
    </div>
  );
};

export default PartnersLayout;
