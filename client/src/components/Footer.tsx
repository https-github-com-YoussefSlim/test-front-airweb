import React from 'react';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { year } from '@/utils';

import { IconFaceBook, IconInstagram, IconTwitter, IconYouTube } from '../assets/icons';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="primary-bg-color space-y-6">
      <div className=" col pt-4 font-medium select-none text-center text-white md:row md:justify-center">
        <div className="col items-center gap-2 md:flex-row ">
          <p>{t`Follow us on social networks`}</p>
          <ul className="row gap-7 ">
            <li className="w-[23px] hover-social-media">
              <Link href="https://www.facebook.com">
                <a>
                  <IconFaceBook />
                </a>
              </Link>
            </li>
            <li className="w-[25px] hover-social-media">
              <Link href="https://www.twitter.com">
                <a>
                  <IconTwitter />
                </a>
              </Link>
            </li>
            <li className="w-[22px] hover-social-media">
              <Link href="https://www.instagram.com">
                <a>
                  <IconInstagram />
                </a>
              </Link>
            </li>
            <li className="w-[28px] hover-social-media">
              <Link href="https://www.youtube.com">
                <a>
                  <IconYouTube />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-[14px]   text-center text-white ">
        <div className="col justify-center gap-2 space-y-4 md:flex-row md:gap-20 md:space-y-2 ">
          <div className="self-center max-w-[100px]">
            <Link href="/">
              <a>
                <img
                  alt="logo airweb"
                  src="https://www.airweb.fr/wp-content/uploads/2021/09/logo-crop.svg"
                />
              </a>
            </Link>
          </div>
          <div className="text-center md:basis-1/3 md:text-start">
            <h5 className=" uppercase-bold">{t`E-shop`}</h5>
            <p>
              {t`The school or classic e-Boutique solution makes it possible href sell all transport tickets, regardless of the ticketing system`}
            </p>
          </div>

          <div className="col text-center md:text-start">
            <h5 className="secondary-color uppercase-bold">{t`Information`}</h5>

            <Link className="dark-grey-text" href="/mentions-legales">
              <a> {t`Legal Notice`}</a>
            </Link>

            <Link className="dark-grey-text" href="/conditions-generales-de-vente">
              <a> {t`Terms of Sales`}</a>
            </Link>

            <Link className="dark-grey-text" href="/team">
              <a> {t`Our team`}</a>
            </Link>
          </div>

          <div className="col text-center md:text-start">
            <h5 className="secondary-color uppercase-bold">{t`Aids`}</h5>

            <Link className="dark-grey-text" href="/mon-compte">
              <a> {t`My account`}</a>
            </Link>

            <Link className="dark-grey-text" href="/devenir-vendeur">
              <a>{t`Become a seller`}</a>
            </Link>

            <Link className="dark-grey-text" href="/contactez-nous">
              <a> {t`Contact us`}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-[0.8rem] text-white px-[14px] pb-2 before:block before:w-full before:h-px before:m-auhref before:mb-2 before:bg-white text-center tracking-widest">
        <p>
          © {year} {t`Copyright`} Airweb
        </p>
      </div>
    </footer>
  );
}
