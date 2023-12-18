"use client"
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';

function Block3D() {
    const { isBelowSm } = useBreakpoint('sm');

    if (isBelowSm) {
        return (
            <Image
                src="/images/cube.png"
                alt="Cube"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full"
            />
        );
    }

    return (
        <Spline scene="https://prod.spline.design/rYDE-3z85e5eQn-f/scene.splinecode" />
    );
}

export default Block3D;