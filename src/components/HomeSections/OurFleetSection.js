import fleetSectionData from "../../data/fleetSectionData";

const OurFleetSection = () => {
  return (
    <section className="h-full bg-white">
      <h2>Our Premium Fleet – Tailored to Your Needs</h2>

      {/* CARDS */}
      {fleetSectionData.map((data, i) => (
        <div>
          <img src={data.image} alt="" />
          <h3>{data.title}</h3>
          <div>{data.description}</div>
          <button>{data.button}</button>
        </div>
      ))}
    </section>
  );
};

export default OurFleetSection;
