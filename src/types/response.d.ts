export interface TokenResponse {
  token: string;
  expires: Date;
}

export interface AuthTokensResponse {
  access: TokenResponse;
  refresh?: TokenResponse;
}

export interface CreateBookDto {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface CreateAvatarDto {
  gender: string;
  skinColor: string;
  hairColor: string;
  hairStyle: string;
  eyeColor: string;
  theme: string;
  glasses: boolean;
}

export interface BookCreateDto {
  firstName: string;
  age: number;
  gender: string;
  skinColor: string;
  hairStyle: string;
  hairColor: string;
  eyeColor: string;
  glasses: boolean;
  theme: string;
  personalMsg: string;
  familyMembers: string;
  personalEvents: string;
}
