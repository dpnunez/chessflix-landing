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
    name: 'Evandro Barbosa',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-evandro.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.facebook.com/gmevandrobarbosa',
      youtube: 'https://www.youtube.com/c/GMEvandroBarbosa',
      instagram: 'https://www.instagram.com/gmevandrobarbosa/',
    },
  },
  {
    name: 'Luis Paulo Supi',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-supi.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.facebook.com/gmsupi/',
      youtube: 'https://www.youtube.com/channel/UCpiJhNVDJoKDhShQeC7tN4A',
      instagram: 'https://www.instagram.com/gmsupi/',
      twitch: 'https://www.twitch.tv/gmsupi',
    },
  }, {
    name: 'Yago Santiago',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/axel.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.google.com/',
      twitter: 'https://twitter.com/yagosantiagobr',
      youtube: 'https://www.youtube.com/channel/UCW2f1PF0LP_05xbOjMb7vqw',
      instagram: 'https://www.instagram.com/y__santiago/',
    },
  }, {
    name: 'Axel Bachmann',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-axel.jpg',
    title: 'Grande Mestre',
    socials: {
      twitter: 'https://twitter.com/axelpy89',
      instagram: 'https://www.instagram.com/axelpy89/',
    },
  }, {
    name: 'André Diamant',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/gm-Diamant.jpg',
    title: 'Grande Mestre',
    socials: {
      twitter: 'https://twitter.com/gm_diamant',
      youtube: 'https://www.google.com/',
      instagram: 'https://www.instagram.com/andre.diamant/',
      twitch: 'https://www.twitch.tv/cexequemate',
    },
  }, {
    name: 'Florencia Fernández',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/wmi-Florencia.jpg',
    title: 'WMI',
    socials: {
      twitter: 'https://twitter.com/ffernandezarg',
      instagram: 'https://www.instagram.com/flor.fdz/',
    },
  }, {
    name: 'Roberto Molina',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/05/molina.jpg',
    title: 'Mestre Internacional',
    socials: {
      twitter: 'https://twitter.com/RobertoJBMolina',
      youtube: 'https://www.youtube.com/channel/UCYpSrlCm16-Ism_PonJer6Q',
      instagram: 'https://www.instagram.com/robertojbmolina/',
      twitch: 'https://www.twitch.tv/robertojbmolina',
    },
  }, {
    name: 'Henrique Mecking',
    image: 'https://chessflix.com.br/wp-content/uploads/2021/09/gm-mequinho.jpg',
    title: 'Grande Mestre',
    socials: {
      facebook: 'https://www.facebook.com/henrique.costamecking',
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
