import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

const links = [
    {
        href: '/',
        label: 'Accueil',
        icon: '/icons/home.svg',
    },
    {
        href: '/projects',
        label: 'Projets',
        icon: '/icons/projects.svg',
    },
    {
        href: '/about',
        label: 'A propos',
        icon: '/icons/about.svg',
    },
    {
        href: '/contact',
        label: 'Contact',
        icon: '/icons/contact.svg',
    },
]


const Nav = () => {
    const pathName = usePathname()
    return (
        <>
            <nav className="flex gap-7">
                {links.map((link, index) => {
                    return (
                        <Link href={link.href}
                              key={index}
                              className={`${link.href === pathName && "text-accent border-b-2 border-accent"}
                          capitalize font-medium hover:text-accent-light transition-all duration-150 dark:hover:text-accent-accent_dark flex items-center gap-2`}>
                            <Image src={link.icon}
                                   alt={"icon"}
                                   width={20}
                                   height={20}
                            />
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </>
    )
}

export default Nav