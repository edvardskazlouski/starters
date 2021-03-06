const BASES = {
    PROFILE: '/profile',
    SESSION: '/session',
};

const IDS = {
};

const ROUTES_PARTS = {
    ACTIVATE: '/activate',
    ACTIVATION_BACKDOOR: '/activation-backdoor',
    RESEND_ACTIVATION: '/resend-activation',
    RESET_PASSWORD: '/reset-password',
    UPDATE_PASSWORD: '/update-password',
    SEND_RESET_PASSWORD_MAIL: '/send-reset-password-mail',
};

export const ROUTES = {
    PROFILE: {
        BASE: BASES.PROFILE,
        CREATE: '',
        GET: '',
        ACTIVATE: ROUTES_PARTS.ACTIVATE,
        RESEND_ACTIVATION: ROUTES_PARTS.RESEND_ACTIVATION,
        RESET_PASSWORD: ROUTES_PARTS.RESET_PASSWORD,
        SEND_RESET_PASSWORD_MAIL: ROUTES_PARTS.SEND_RESET_PASSWORD_MAIL,
        UPDATE_PASSWORD: ROUTES_PARTS.UPDATE_PASSWORD,
        DELETE: '',
        ACTIVATION_BACKDOOR: ROUTES_PARTS.ACTIVATION_BACKDOOR,
    },
    SESSION: {
        BASE: BASES.SESSION,
        LOG_IN: '',
    },
};

export const ALLOWED_FOR_UNAUTHORIZED = {
    GET: [
        `${ROUTES.SESSION.BASE}`,
    ],
    POST: [
        `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.CREATE}`,
        `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.SEND_RESET_PASSWORD_MAIL}`,
        `${ROUTES.SESSION.BASE}${ROUTES.SESSION.LOG_IN}`,
    ],
    PUT: [
        `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.RESET_PASSWORD}`,
    ],
};

export const ALLOWED_FOR_UNACTIVATED = {
    GET: [
    ],
    POST: [
        `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.ACTIVATE}`,
        `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.RESEND_ACTIVATION}`,
        `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.ACTIVATION_BACKDOOR}`,
    ],
    DELETE: [
        `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.DELETE}`,
    ]
};
