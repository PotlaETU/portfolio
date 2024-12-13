import Project from "@/datas/interfaces/projects";

const projects: Project[] = [
    {
        id: 1,
        title: "API PicIt",
        description: "API RESTful pour le réseau social PicIt",
        image: "/projects/1/picit.png",
        tags: ["Java", "Spring Boot", "MongoDB", "Neo4j", "Docker"],
        githubUrl: "https://github.com/PotlaETU/picit-api",
    },
    {
        id: 2,
        title: "FCrypt",
        description: "Outil de chiffrement de fichiers (texte, image, audio, vidéo)",
        image: "/projects/2/art_project_2.png",
        tags: ["Spring Shell", "Java", "Chiffrement", "Docker"],
        githubUrl: "https://github.com/PotlaETU/Fcrpyt",
    },
    {
        id: 3,
        title: "ClearLinks",
        description: "Contrats sur la blockchain Ethereum (Sepolia Testnet) permettant de faire des donations à des créateurs, des votes, etc .",
        image: "/projects/3/clear_links.png",
        tags: ["TypeScript", "Solidity", "Ethereum", "Hardat"],
        githubUrl: "https://github.com/PotlaETU/ClearLinks-Contracts"
    }
]

export default function getProjects(): Project[] {
    return projects;
}

