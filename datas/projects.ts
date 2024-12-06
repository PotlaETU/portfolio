import Project from "@/datas/interfaces/projects";

const projects: Project[] = [
    {
        id: 1,
        title: "API PicIt",
        description: "API RESTful pour le réseau social PicIt",
        image: "/projects/1/picit.png",
        tags: ["Java", "Spring Boot", "MongoDB"],
        githubUrl: "https://github.com/PotlaETU/picit-api",
    }
]

export default function getProjects(): Project[] {
    return projects;
}

