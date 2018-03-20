export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    badge: {
      variant: 'info'
    },
    children: [
      {
        name: 'Debtor',
        url: '/debtor',
        icon: 'fa fa-money',
        badge: {
          variant: 'info'
        }
      },
      {
        name: 'CC Letter',
        url: '/cc-letter',
        icon: 'icon-envelope-letter',
        badge: {
          variant: 'info'
        }
      },
      {
        name: 'Templates',
        url: '/templates',
        icon: 'icon-envelope-letter',
        badge: {
          variant: 'info'
        }
      },
      {
        name: 'CC Letters',
        url: '/cc-letters',
        icon: 'icon-envelope-letter',
        badge: {
          variant: 'info'
        }
      }
    ]
  }
];
