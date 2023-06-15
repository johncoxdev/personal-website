const NebulaEffect = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-0">
      <div className="animate-animate-ping w-96 h-96 sm:w-114 sm:h-114 rounded-full blur-5xl absolute" style={{ background: 'radial-gradient(circle, rgba(48, 39, 143, 1) 0%, rgba(0, 0, 0, 0) 100%)' }}></div>
      <div className="animate-animate-ping w-28 h-28 sm:w-40 sm:h-40 rounded-full blur-3xl absolute" style={{ background: 'radial-gradient(circle, rgba(255, 119, 100, 1) 0%, rgba(0, 0, 0, 0) 100%)' }}></div>
    </div>
  );
};

export default NebulaEffect;
