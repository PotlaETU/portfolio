import {getSkills} from "@/datas/skills";

export default function Page() {
    const skills = getSkills();

    return (
        <>
            <div className="min-h-screen">
                <div className="container mx-auto px-6 pt-10 pb-12">
                    <h1 className="text-4xl font-bold">A propos</h1>
                    <h2 className="text-2xl mt-8">Mes compétences</h2>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-slate-850 p-4 rounded-md">
                                <h3 className="text-xl font-bold">{category}</h3>
                                <ul className="mt-4">
                                    {Object.entries(items).map(([name, value]) => (
                                        <li key={name} className="flex justify-between">
                                            <span>{name}</span>
                                            <span>{value}%</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}