import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

function Logo() {
    return (
        <Image
            src="/images/icons/icon-full-white.svg"
            alt={APP_NAME}
            width={126}
            height={30}
        />
    )
}


export default Logo;