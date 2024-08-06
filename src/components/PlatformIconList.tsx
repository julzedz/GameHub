import { Platform } from '../hooks/useGames';
import {FaAndroid, FaApple, FaPlaystation, FaXbox, FaLinux, FaWindows} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
  
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    android: FaAndroid,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }
  return (
    <HStack marginY={1}>
      {platforms.map(( platform ) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
}

export default PlatformIconList