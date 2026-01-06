import brazilMapImage from "@/assets/brazil-map.png";

const BrazilMap = ({ className = "" }: { className?: string }) => {
  return (
    <img 
      src={brazilMapImage} 
      alt="Mapa do Brasil - Presença em todos os estados" 
      className={className}
    />
  );
};

export default BrazilMap;
