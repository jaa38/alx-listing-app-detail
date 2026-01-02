interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <button className='px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white'>
      {label}
    </button>
  );
};

export default Pill;
