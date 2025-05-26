import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import NavItems from './NavItems';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
    return (
        <nav className="navbar sticky top-0 z-50">
            <Link href="/">
                <div className="flex cursor-pointer items-center gap-2.5">
                    <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <ThemeToggle />
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
