import ProjectDetail from "./projectDetail";

const HolidayCabinDetail = () => {
  const project = {
    name: "Holiday Cabin",
    details: "This project is a real-world like project...",
    techStck: ["JavaScript", "React", "Supabase", "Styled Components"],
  };

  return <ProjectDetail project={project} />;
};

export default HolidayCabinDetail;
