import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Crafting visually appealing and user-friendly interfaces that not only look great but also provide an intuitive and engaging experience for your visitors. I focus on design that aligns with your brand and converts users into customers.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Transforming designs and ideas into fully functional, responsive, and high-performing websites. I build robust web solutions using modern technologies to ensure scalability, security, and a seamless user experience across all devices.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Developing custom mobile applications for iOS and Android that offer rich user experiences and solve real-world problems. I guide you from concept to launch, creating apps that are intuitive, engaging, and tailored to your business goals.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 xl:gap-x-8 justify-center">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-md sm:max-w-none h-auto min-h-[320px] flex flex-col justify-start items-center text-center relative rounded-lg shadow-lg pt-10 pb-10 px-6" // Adjusted padding and added max-w for single column
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[50px] left-1/2 -translate-x-1/2">
                  {" "}
                  {/* Centered header */}
                  <div className="w-[120px] h-[70px] sm:w-[140px] sm:h-[80px] bg-background flex justify-center items-center rounded-md shadow-md">
                    {" "}
                    {/* Adjusted icon container */}
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="mt-[50px] sm:mt-[60px]">
                  {" "}
                  {/* Added margin-top to account for absolute header */}
                  <CardTitle className="mb-4 text-xl sm:text-2xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {" "}
                    {/* Responsive text size */}
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
