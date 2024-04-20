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
  glasses: boolean;
}
