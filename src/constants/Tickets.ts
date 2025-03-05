export interface Ticket {
    name: string;
    currency: string;
}

export interface CountryTickets {
    api: string;
    tickets: {
        [ticketType: string]: Ticket;
    };
}

export const tickets: { [countryCode: string]: CountryTickets } = {
    AT: {
        api: 'at-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'EUR' },
            '7days': { name: '7 Days', currency: 'EUR' },
            '1month': { name: '1 Month', currency: 'EUR' },
            '1year': { name: '1 Year', currency: 'EUR' }
        }
    },
    BG: {
        api: 'bg-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'BGN' },
            '7days': { name: '7 Days', currency: 'BGN' },
            '1month': { name: '1 Month', currency: 'BGN' },
            '1year': { name: '1 Year', currency: 'BGN' }
        }
    },
    CZ: {
        api: 'cz-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'CZK' },
            '7days': { name: '7 Days', currency: 'CZK' },
            '1month': { name: '1 Month', currency: 'CZK' },
            '1year': { name: '1 Year', currency: 'CZK' }
        }
    },
    HU: {
        api: 'hu-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'HUF' },
            '7days': { name: '7 Days', currency: 'HUF' },
            '1month': { name: '1 Month', currency: 'HUF' },
            '1year': { name: '1 Year', currency: 'HUF' }
        }
    },
    RO: {
        api: 'ro-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'RON' },
            '7days': { name: '7 Days', currency: 'RON' },
            '1month': { name: '1 Month', currency: 'RON' },
            '1year': { name: '1 Year', currency: 'RON' }
        }
    },
    SK: {
        api: 'sk-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'EUR' },
            '7days': { name: '7 Days', currency: 'EUR' },
            '1month': { name: '1 Month', currency: 'EUR' },
            '1year': { name: '1 Year', currency: 'EUR' }
        }
    },
    SI: {
        api: 'si-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'EUR' },
            '7days': { name: '7 Days', currency: 'EUR' },
            '1month': { name: '1 Month', currency: 'EUR' },
            '1year': { name: '1 Year', currency: 'EUR' }
        }
    },
    CH: {
        api: 'ch-api-endpoint',
        tickets: {
            '1day': { name: '1 Day', currency: 'CHF' },
            '7days': { name: '7 Days', currency: 'CHF' },
            '1month': { name: '1 Month', currency: 'CHF' },
            '1year': { name: '1 Year', currency: 'CHF' }
        }
    }
};
