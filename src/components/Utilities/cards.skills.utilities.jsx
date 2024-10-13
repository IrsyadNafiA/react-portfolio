const CardSkill = ({ icon: Icon, name }) => {
  return (
    <div className="flex p-2 bg-white rounded-lg items-center gap-2 drop-shadow-md hover:bg-slate-50">
      <Icon size={32} />
      <p className="text-gray-600 font-medium">{name}</p>
    </div>
  );
};

export default CardSkill;
