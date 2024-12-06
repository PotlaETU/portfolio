import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ExternalLink} from "lucide-react";
import Project from "@/datas/interfaces/projects";
import getProjects from "@/datas/projects";
import Image from "next/image";
import Link from "next/link";

const projects: Project[] = getProjects()

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
            <main className="container mx-auto px-6 pt-10 pb-12">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mes
                    Projets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden">
                            <Image src={project.image} alt={project.title} className="w-full h-48 object-cover"
                                   width={100} height={100}/>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <Badge key={index} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <div className="flex space-x-2">
                                    <Button size="sm" variant="outline" asChild>
                                        <Link key={project.id} href={project.githubUrl} target="_blank"
                                              rel="noopener noreferrer">
                                            <Image src="/icons/github-mark-white.png" alt="github"
                                                   width={15} height={15}/>
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}