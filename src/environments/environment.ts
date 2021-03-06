import { 
  SystemCountry, 
  SystemLocale, 
  SystemCurrency 
} from "manulife-genie-ionic-angular-core/dist/assets/genie-core/system/system.module";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  envName: 'dev-jp',
  countryCode: SystemCountry.JP,
  languages: [`${SystemLocale.EN}-us'`, `${SystemLocale.JA}-${SystemCountry.JP}`],
  language_def: SystemLocale.JA,
  currencies: [
    SystemCurrency.JPY
  ],

  salesforce: {
    userinfo: 'https://vncmpsit-manulife-vietnam.cs72.force.com/services/apexrest/userinfo',
    login: 'https://localhost/pages/action/login',
    logout: 'https://localhost/pages/action/logout',
    registerPush: 'https://vncmpsit-manulife-vietnam.cs72.force.com/cmp/services/apexrest/push-proxy/v1/registration'
  },

  mobile: {
    openAddressBook:  'https://localhost/services/apexrest/openAddressBook',
    pushDeviceInfo: 'https://localhost/services/apexrest/pushDeviceInfo',
    fetchNotifications:  'https://localhost/services/apexrest/fetchNotifications',
    appInfo: 'https://localhost/services/apexrest/AppInfo',
    exportLog: 'https://localhost/services/apexrest/exportLog',
    clearUserSession: 'https://localhost/services/apexrest/clearUserSession',
    call: 'https://localhost/services/apexrest/call'
  },

  API_BASE_PATH: '',

  digitalLeads: {
    actionTimeoutWarningInSec: 0,
    actionTimeoutInSec: 0,
    countdownPeriodInMs: 0 
  },

  activity: {
    backDateDays: 0
  },

  goal: {
      weeklyGoalSettingThreshold: 0
  },

};
