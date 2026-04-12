import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart2, Database, FileSpreadsheet, Calculator, Pencil, LayoutDashboard } from "lucide-react";

const skillCategories = [
  { name: "Programming & Querying", icon: Code, skills: ["Python", "SQL", "R"] },
  { name: "Data Visualization", icon: BarChart2, skills: ["Power BI", "Tableau", "Excel Charts"] },
  { name: "Databases", icon: Database, skills: ["PostgreSQL", "MySQL", "SQL Server", "Google BigQuery"] },
  { name: "Spreadsheet Skills", icon: FileSpreadsheet, skills: ["Excel", "Pivot Tables", "Macros", "VBA"] },
  { name: "Data Analysis", icon: Calculator, skills: ["DAX", "Statistical Analysis", "Forecasting"] },
  { name: "Data Preparation", icon: Pencil, skills: ["Data Cleaning", "ETL", "Data Validation"] },
  { name: "Dashboard Creation", icon: LayoutDashboard, skills: ["Interactive Reports", "KPI Tracking", "Automated Dashboards"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">My Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-5 neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <cat.icon className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <Badge key={j} variant="outline" className="bg-muted text-muted-foreground text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
