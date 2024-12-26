import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className="p-8 text-center min-h-screen md:ml-12">
                <p className="text-4xl">ROLLAND Anthony</p>
                <h2 className="text-3xl mt-3 font-bold bg-gradient-to-r
                    from-green-400 to-blue-500
                    bg-clip-text text-transparent">
                    Étudiant en informatique
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center md:text-center">
                    <Image src="/me.jpg"
                           alt="me"
                           width={300}
                           height={300}
                           className="rounded-full mt-11 md:mt-0 md:ml-8 w-48 h-56 md:w-72 md:h-80"
                    />
                    <p className="p-8 md:p-32 text-xl text-justify">
                        Je m&#39;appelle Anthony Rolland, j&#39;ai 20 ans et je suis étudiant en 2e année de BUT
                        Informatique à
                        l&#39;IUT de Lens. Le domaine des nouvelles technologies et plus particulièrement de
                        l&#39;informatique me
                        passionne. Vous pouvez voir sur mon portfolio toutes mes compétences ainsi que mon parcours
                        scolaire. J&#39;ai l&#39;occasion de faire des petits projets personnels pour gagner en
                        compétences et en
                        expérience. Je suis à la recherche d&#39;un stage à partir de mars 2025 qui me permettra
                        d&#39;intégrer
                        une équipe dynamique. Pour plus d&#39;informations, vous pouvez explorer mon portfolio.
                    </p>
                </div>
            </main>
        </>
    );
}