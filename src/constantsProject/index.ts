import { Instagram as InstagramIcon, YouTube as YoutubeIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { FC } from 'react';

export interface TeacherType {
	name: string,
	image: string,
	title: string,
	socials?: {
		facebook?: string,
		twitter?: string,
		youtube?: string,
		instagram?: string,
		twitch?: string
	}
}

export interface SocialType {
	url: string,
	icon: FC
}

export const teachers: TeacherType[] = [
  {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  },
  {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  }, {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  }, {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  }, {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  }, {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  }, {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  }, {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  }, {
    name: 'GM Evandro',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://www.google.com/',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.google.com/',
      twitch: 'https://www.google.com/',
    },
  },
];

export const chessFlixSocials = [
  {
    url: 'https://google.com.br',
    icon: InstagramIcon,
  },
  {
    url: 'https://google.com.br',
    icon: YoutubeIcon,
  },
  {
    url: 'https://google.com.br',
    icon: FacebookIcon,
  },
];
