import Link from 'next/link';

import { IconCart, IconSearch } from '@/assets/icons';

export function Header() {
  return (
    <header className="flex items-center sticky top-0 h-7  z-20 bg-[#F7F7F7]">
      <Link href="/">
        <a>
          <img
            alt="logo app"
            className=" w-[88px] h-[24px] cursor-pointer hover:scale-105 hover:translate- transition duration-1000"
            src="https://www.airweb.fr/wp-content/uploads/2021/09/logo-crop.svg"
          />
        </a>
      </Link>

      <div className="flex w-[58px] h-7 ml-auto">
        <div className="w-[29px] cursor-pointer transition ease duration-300">
          <IconSearch />
        </div>
        <div className="relative flex items-center w-[29px] cursor-pointer transition ease duration-300">
          <div className="flex justify-center items-center absolute top-[13px] right-0 h-4 min-w-[16px]  primary-bg-color rounded-full z-30 text-white">
            <span className="text-xs font-bold">3</span>
          </div>

          <Link href="/cart">
            <a>
              <IconCart />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}