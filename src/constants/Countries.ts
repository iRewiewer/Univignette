export interface Country {
    code: string;
    name: string;
    flag: string;
}

export const vignetteCountries: Country[] = [
    { code: 'AT', name: 'Austria', flag: 'https://flagcdn.com/w320/at.png' },
    { code: 'BG', name: 'Bulgaria', flag: 'https://flagcdn.com/w320/bg.png' },
    { code: 'CZ', name: 'Czech Republic', flag: 'https://flagcdn.com/w320/cz.png' },
    { code: 'HU', name: 'Hungary', flag: 'https://flagcdn.com/w320/hu.png' },
    { code: 'RO', name: 'Romania', flag: 'https://flagcdn.com/w320/ro.png' },
    { code: 'SK', name: 'Slovakia', flag: 'https://flagcdn.com/w320/sk.png' },
    { code: 'SI', name: 'Slovenia', flag: 'https://flagcdn.com/w320/si.png' },
    { code: 'CH', name: 'Switzerland', flag: 'https://flagcdn.com/w320/ch.png' }
];
