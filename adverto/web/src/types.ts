export enum PreferredMFA {
  NO_MFA = 'NOMFA',
  SMS = 'SMSMFA',
}

export type UserAttributes = {
  email: string;
  givenName: string;
  familyName: string;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  profilePicture: string;
};

export type User = {
  attributes: UserAttributes;
  preferredMFA: PreferredMFA;
};
