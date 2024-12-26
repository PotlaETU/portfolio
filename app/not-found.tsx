import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 | Tu t&#39;es perdu</h1>
            <button className="btn btn-neutral mt-9">
                <Link href={"/"}>
                    Retourner à l&#39;accueil
                </Link>
            </button>
        </div>
    )
}