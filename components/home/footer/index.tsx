import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

const socials = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/burokku_one',
        icon: '/images/social-media/twitter-x.svg',
        label: "X formerly known as Twitter"
    }
];

const links = [
    {
        name: 'Blog',
        href: process.env.NEXT_PUBLIC_BLOG_URL ?? '#'
    },
    {
        name: 'Docs',
        href: process.env.NEXT_PUBLIC_DOCS_URL ?? '#'
    },
    // //Add this back when we need to
    // {
    //     name: 'Privacy Policy',
    //     href: '/privacy-policy'
    // },
    {
        name: 'Terms of Service',
        href: '/terms-of-service'
    }
];

function HomeFooter() {
    return (
        <footer className="mt-auto flex flex-col-reverse gap-y-20 md:flex-row w-full py-4 px-8 md:justify-between text-muted-foreground">
            <div className="flex gap-x-2 justify-center">
                <Image
                    src="/images/icons/icon-white.svg"
                    alt={APP_NAME}
                    width={25}
                    height={25}
                />
                <span>{APP_NAME} © 2024</span>
            </div>
            <div className="flex mt-6 md:mt-0 flex-col gap-y-4 md:flex-row gap-x-5">
                {
                    socials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            aria-label={social.label}
                            className="my-auto hover:opacity-80 px-0 md:px-2"
                        >
                            <Image
                                src={social.icon}
                                alt={social.name}
                                width={15}
                                height={15}
                            />
                        </Link>
                    ))
                }
                {
                    links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="hover:opacity-80"
                        >{link.name}</Link>
                    ))
                }
            </div>
        </footer>
    );
}

export default HomeFooter;