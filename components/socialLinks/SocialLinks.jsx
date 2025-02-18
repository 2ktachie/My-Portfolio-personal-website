import React from 'react';
import {
  AiOutlineCodepen,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiDailydotdev } from "react-icons/si";
import styles from './social.module.css';
import Anchor from '../link/Anchor';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      ariaLabel: 'linkedin',
      href: 'https://www.linkedin.com/in/tendai-douglas-a6201023b/',
      icon: AiFillLinkedin,
    },
    {
      id: 2,
      ariaLabel: 'github',
      href: 'https://github.com/2ktachie',
      icon: AiFillGithub,
    },
    {
      id: 3,
      ariaLabel: 'dailydev',
      href: 'https://app.daily.dev/tendaitachivona',
      icon: SiDailydotdev,
    },
    {
      id: 4,
      ariaLabel: 'codepen',
      href: 'https://codepen.io/2ktachie',
      icon: AiOutlineCodepen,
    },
    {
      id: 5,
      ariaLabel: 'leetcode',
      href: 'https://leetcode.com/u/tachivonatendai/',
      icon: TbBrandLeetcode,
    },
  ];

  return (
    <div className={`absolute bottom-1 right-0 lg:flex flex flex-col justify-between ${styles.mobile}`}>
      <div className={`social ${styles.wrapper}`}>
        {links.map((link) => {
          const Icon = link.icon;
          if (!Icon) {
            console.error(`Icon not found for ${link.ariaLabel}`);
            return null;
          }
          return (
            <div key={link.id}>
              <Anchor ariaLabel={link.ariaLabel} href={link.href}>
                <Icon size={40} />
              </Anchor>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;